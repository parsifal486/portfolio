---
title: '你等 Agent 回复的时候做什么：Coding Agent 的 Worktree 并行开发实践'
description: '为什么 git worktree 在 coding agent 时代终于变得重要，以及我基于 Claude Code 搭建的 session—worktree 强绑定工作流：轻/完整两档模式、契约文件与主 session 验收循环。'
keywords: git worktree, coding agents, Claude Code, parallel development, agent workflow
author: ryuteakwoo
date: 2026-08-03
---

Worktree 是 Git 于 2015 年推出的特性。不同于 branch 解决“代码历史如何分叉”的问题，worktree 解决的是“本地文件如何同时展开多个分支”的问题。Worktree 没有像 branch 那样普及，根本原因不是它不好，而是传统开发中，“同时展开多个分支”的需求远没有“创建多个分支”那么普遍。

但现在，基于 Coding Agent 的开发已经不同于过去的传统开发。单个开发者可以在本地开启任意多的分支任务，只要它们没有强依赖、竞态关系，并且开发者的大脑内存允许。

我开始用 worktree 进行开发，是因为发现自己在给 Coding Agent 下达指令之后，常常要经历漫长的等待。在等待 agent 生成结果、再由我 check 的这段时间里，我经常会无所事事。就算多开几个 session，也常常会因为多个 agent 同时在开发而不敢让它们同时修改代码，顶多是一个在 plan，一个在执行。这极大限制了 agent 和我的开发效率。

在 2026 年 2 月 OpenAI 发布的 [harness 相关文章](https://openai.com/index/harness-engineering) 中，就提到了“...we made the app bootable per git worktree, so Codex could launch and drive one instance per change...”。OpenAI 的实践虽然点明了可以使用 worktree 进行开发，但没有讲清楚具体应该如何开发。下面我会结合自己的开发实践以及社区文章，讲一下我的工作流和它的迭代过程。

我一开始在 Claude Code 中尝试使用 worktree 时，是直接开多个 session，然后在 session 中直接使用自然语言命令，比如：“给我开一个 worktree，写 feature xxx。”验收完，我会说：“feature 完成，close 这个 worktree。”接下来再下自然语言命令：“给我开一个 worktree，写 feature xxx。”然后在多个 session 中并行循环开发功能。

但是这个工作模式长期使用下去很容易出问题，因为在这个流程中，我把 session 当成了“可重复利用的工人”，但 Claude Code 的上下文更适合绑定一个持续稳定的任务。Session、worktree、feature 这三个对象的生命周期应当对齐。

> 删除 worktree 不等于删除上下文。往往在删除上一个 worktree 之后，还必须伴随一个 `/clear` 命令来清除上下文，然后才能干净地新建一个 worktree。但是在这 3 步操作里，我们用的是自然语言命令。这个自然语言命令中涉及两次工作目录切换、一次上下文清空。Claude 在 session 内切换目录非常容易引入隐藏状态，而上下文清空又会让 Claude 丧失回溯问题根源的能力。

更稳定的使用方式是强绑定：为一个 feature 单独创建一个 session，由它来管理一个 worktree。

下面我会结合 Claude Code 本身对 worktree 的封装，讲一下我基于这个封装改进出来的 worktree 开发工作流。工作流不应当是一成不变的；随着 coding harness 系统和业务的变化，工作流也应当持续变化。

## Claude Code 的 Worktree 集成与二次封装

### 启动层（CLI 参数）

Claude Code 在最外层加了 `--worktree` / `-w` 这个命令行参数，使得用户可以在开始一个 session 的时候立刻指明任务，并为它创建或指定 worktree。不过我不太喜欢在一开始就指明 worktree 的名字。我更倾向于根据预期任务的复杂度，在启动 session 时指明本次任务所使用的模型：给不同难度的工作使用不同的模型，可以有效提高效率；使用别名命令，也可以减少频繁启动 session 的痛苦。

例如：

```shell
alias cldo="claude --dangerously-skip-permissions --chrome --model opus"
alias cldf="claude --dangerously-skip-permissions --chrome --model fable"
```

### 工具层（EnterWorktree / ExitWorktree）

**EnterWorktree** 的作用是让 Claude 把当前会话“移动”进一个 worktree。**ExitWorktree** 则是反方向的工具，用来让 Claude 从当前所在的 worktree 中退出。

首先，我基于 EnterWorktree 封装了一个自己的命令 `/wt:new`：

```shell
/wt:new [full] <worktree task detailed description>
```

它会根据任务描述自拟一个 kebab-case 的 worktree 名，创建并进入对应的 worktree，同时完成基础的分支初始化和命名规范约定。其中，`full` 参数是工作模式的开关，用来规定这个任务是需要全量验证的复杂任务，还是简单验证即可的轻型任务。

> 本文提到的整套命令 —— `/wt:new`、`/wt:done`、`/wt:review`，连同 bootstrap 脚本和 session 上下文 hook —— 已打包成开源的 Claude Code plugin：[claude-wt](https://github.com/parsifal486/claude-wt)。`/plugin marketplace add parsifal486/claude-wt` 即可安装，装好后敲 `/wt:help`，它会在 session 里结合现场状态讲解整套工作流。

我没有对 ExitWorktree 进行封装，因为这个 tool 是给 non-interactive 工作模式下的 agent 使用的，或者用于单个 session 中多次切换 worktree 的场景。

### 声明式配置层（子代理 frontmatter）/ 状态追踪层（会话与 transcript）/ 并发安全层（锁与清理）

Claude Code 在声明式配置层给 worktree 暴露的面其实很窄。我接触比较多的只有 `.worktreeinclude`，它用于在创建 worktree 时，把匹配且被 gitignore 的文件（如 `.env` 等）复制进去。其他选项可以参考 Claude 官方文档。我在这一层并没有做特殊封装。

Claude Code 在状态追踪层实现了 session 与 worktree 的绑定。每个 session 的记录都会记录当前工作目录，目录对应的 worktree 就是当前 session 的 worktree。

在并发安全层，Claude Code 主要做两件事：worktree 有人使用时上锁，避免任何并发清理误删；自动清理前先确认不会丢失工作，也就是有未提交内容就不删除。

以上三层都是兜底性质的基础设施，不是工作流的表达点，所以我没有做封装。

### 可扩展层（hooks）

Claude Code 在这里写了两个 hook，用来处理仓库的版本管理工具不是 Git 的情况。鉴于我使用的都是 Git，这两个 hook 对我来说用处不大。我在这里实现了一个 hook：启动时检查当前 worktree 状态，并注入 context，包括分配给当前 worktree 的 dev server port 等信息；同时加入悬空分支和孤儿目录报警。

## 实际 Workflow

1. 主 session：负责 inspect，跟进远端、本地仓库状态以及各分支状况；在各分支实现合入工作分支后，通过 `/wt:review` 根据验收文档进行 review，完成全景检查、补漏、验收和清理。
2. n 个并行子 session：根据任务预期选择模型启动；使用 `/wt:new` 命令创建 worktree 并进入工作目录。如果是 `full` 模式，则生成详细的契约文件 `.claude/wt/<名>.md`，提供验收标准以及打回记录。然后调用 `wt-up.sh` 分配 port，以便在 session 内开发的过程中实时调整代码。
3. 完成之后使用 `/wt:done`：执行 `pnpm` 自检、冒烟测试，并补充验收标准供 `/wt:review` 使用（仅 `full` 模式）；随后合并、回写契约，标记为“待验收”。
4. n 个子 session 完成之后，可以按开发者自己的模块划分，在主 session 中统一运行 `/wt:review` 进行验收和跨 feature 集成检查。没有通过验收的任务可以打回重写，并由子 session 继续开发。

整个 workflow 围绕以下几点核心设计：

* 两档模式，默认轻：大部分改动不值得走完整验收流程。轻模式只保留机器检查（几十秒）和未跟踪文件检查（防止丢工作）。速度是这套工作流的生命线。模式由契约文件存在性自动判定，不用记，也不用传。
* 实现与验收分离：写代码的人只做冒烟测试，并写清楚“怎么验”。逐条验收和跨 feature 集成检查归主 session 负责，因为集成问题在未 merge 的 worktree 里结构上验不出来。
* 状态外置，session 可抛弃：验收标准、打回原因全在契约文件里。配合 hook 开局简报，任何新 session 冷启动就能接手，关 tab 不心疼。

## 参考文章

* [Run parallel sessions with worktrees](https://code.claude.com/docs/en/worktrees)
* [claude-wt —— 本文工作流的 Claude Code plugin 实现](https://github.com/parsifal486/claude-wt)
