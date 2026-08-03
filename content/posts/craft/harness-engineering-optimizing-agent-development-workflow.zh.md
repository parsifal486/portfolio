---
title: '概念背后：如何根据 Harness Engineering 优化 Agent 开发 Workflow'
description: '细读 OpenAI 与 Anthropic 关于 harness 概念的两篇文章，聊聊 harness engineering 到底是什么，以及为什么它基本就是用 AI 开发的开发者的日常。'
keywords: harness engineering, agent development, OpenAI, Anthropic
author: ryuteakwoo
date: 2026-07-21
---

# 概念
harness不像agent一样有一个明确的学术定义，harness概念主要由OpenAI和Anthropic两家公司提出，这个概念相关的关键文章是以下两篇：

https://openai.com/index/harness-engineering
https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents

把这两篇文章同时喂给ai，ai给出的通用定义是：
>Harness 是模型之外、直接介入模型与环境交互的可执行控制系统。它规定模型看到什么、可以做什么、行动如何执行、结果如何反馈，以及整个多步循环如何继续、受限或终止。

但是两家公司的文章对harness的定义也是存在差别的：
OpenAI指的是：
>harness = 整个被工程化的环境

Anthropic则对harness给出了一个比较明晰的定义：harness = agent 运行时/框架（SDK 本身）
>The Claude Agent SDK is a powerful, general-purpose agent harness adept at coding, as well as other tasks that require the model to use tools to gather context, plan, and execute.

# 细节&解读
下面分别来解读一下这两篇文章。
## OpenAI
其实OpenAI这篇harness的文章并不是在讲harness，甚至整篇文章中只提到了一次harness。通篇文章讲述的是OpenAI内部人员在使用纯agent进行开发的过程中，不断优化这个工程环境，以提高agent编码的效率以及质量。“a software engineering team’s primary job is no longer to write code, but to design environments, specify intent, and build feedback loops that allow Codex agents to do reliable work.”（其实这个过程就是harness，深入挖掘harness这个概念，其实和大部分使用AI工具进行开发的开发者所做的事情没什么区别罢了——优化开发环境结构以最大化模型表现）

OpenAI团队的观点我觉得最出色的在于：
### application legibility
* 通过构建多个可独立运行的worktree，Codex 每个改动跑一个实例；把 Chrome DevTools Protocol 接进 agent runtime，并造了 DOM 快照/截图/导航的 skills → agent 能复现 bug、验证修复、直接推理 UI 行为。
* 针对单个worktree建立单独的完成后可抛弃的日志追踪系统。agent 用 LogQL 查日志、PromQL 查指标（这样在单个任务中下达的数据指标就更容易被agent感知）。
### Progressive disclosure documentation architecture
* 避免一个超大的总文档AGENTS.md，特定的任务用特定的文档。如果一个文档中面面俱到，什么都写，那就相当于什么都没写。
* 总文档充当子文档的索引(table of contents)，指向更深层次的事实源。
* 真正的文档放在docs/目录。
* 专门的 linter + CI 校验知识库是否最新、交叉链接、结构正确；一个 recurring “doc-gardening” agent 扫描与真实代码不符的过期文档并开修复 PR。

### Inverted merge philosophy
* Agent coding带来的巨大业务代码吞吐量使得传统的PR+复杂审核merge合作范式变得不再高效。审核方式转向agent对agent。
* agent 吞吐远超人的注意力，纠错便宜、等待昂贵。PR生命周期很短，测试的偶发失败通常靠后续重跑来解决，而不是阻塞流程。
* 用机制化清理替代逐条人工review。

### Enforcing architecture and taste
* agent 在边界严格、结构可预测的环境里最有效。于是围绕一个刚性架构模型建 app。
* 具体分层规则：每个业务域切成固定层，依赖方向严格校验、允许的边有限——Types → Config → Repo → Service → Runtime → UI（只能“向前”依赖）；横切关注点(auth、connectors、telemetry、feature flags)只能经单一显式接口 Providers 进入；其余一律禁止，由 custom linter + 结构测试机械强制。

### Entropy and garbage collection
* agent全自治会引入漂移——Codex 复制仓库里已有的模式，包括不均匀/次优的，久了必然腐化。
* 把 “golden principles” 直接编码进仓库（有主见的机械规则，保持对未来 agent 可读、一致）。例：①优先共享工具包而非手搓 helper，把不变量集中；②不“YOLO 式”猜数据、只在边界校验或用 typed SDK，防止 agent 基于猜出来的形状继续搭。
* 执行机制：一组后台 Codex 任务按固定节奏扫描偏差 → 更新质量评级 → 开定向重构 PR；多数 <1 分钟可审、自动合并。

Agent软件开发使人切换到了更高的抽象层工作。优化agent软件构建环境(harness engineering)的过程仍需纪律，但纪律更多体现在脚手架(scaffolding)里，而非代码里；保持 codebase 一致的工具、抽象、反馈回路越来越重要。最难的挑战已经变成：设计让 agent 达成目标的环境、反馈回路与控制系统。

## Anthropic
Anthropic这篇文章是从context管理的角度对workflow进行优化。针对的场景是大型编码任务跨越多个上下文窗口时，如何让每个“失忆”的新会话快速衔接上一次的进度。
其实Claude Code的session记录功能以及session compact/resume功能可以做到这个。我之前和我的同事在合作开发的时候曾尝试自己开发一套session同步系统来提高合作效率，但是效果没有想象中好，而且操作起来比较复杂，最后我们还是回归到了依赖文档进行同步。

回到Anthropic的同步方法论。
Anthropic这篇《Effective harnesses for long-running agents》的内容很切合标题，写的就是如何通过优化harness来解决使用agent在长周期的开发中所遇见的问题。
具体是通过组合使用Initializer Agent和Coding Agent来实时跟进和追踪项目状态，避免coding agent的认知和行为脱轨导致的失败。
文章主要提到了四种失败的case：过早宣布整个项目完工，把环境留在带 bug 或进展未被记录的状态导致下个session接手一个一头雾水的情况，缺少充分测试就过早宣布任务完成，每次都要花时间摸索怎么运行这个项目。
Initializer Agent（初始化 agent，只在第一次 session 运行）的行为：
它负责在项目最开始搭建好一整套“环境脚手架”，具体做四件事：根据用户输入的需求生成一份结构化的 feature list（JSON 格式，列出所有端到端功能点）；创建初始的 git 仓库并写一份 progress notes 文件；这份 feature list 同时也用作后面“功能是否算完成”的判定标准；最后再写一个 `init.sh` 脚本，让后续 agent 可以直接用它启动开发服务器，不用每次都重新摸索。
Coding Agent（每个后续 session 运行）的行为：
它负责每次以“新人接班”的姿态开始工作，先做几件“了解现状、选好任务”的事：读取 feature list 文件，从中挑一个还没完成的功能来做，而不是想着一次性搞定整个项目；读取 progress notes 和 git commit 日志，并在开发服务器上跑一次基础测试，确认环境没有遗留的、未被记录的 bug。做完功能后，它还要做两件“收尾”的事：对功能进行仔细的自我验证（比如端到端测试），只有真正测试通过才把 feature list 里对应项标记为 passing；结束前提交 git commit 并更新 progress notes，给下一个 session 留下清晰的交接记录。

# 解读

我自己用下来觉得其实json格式没有特别大的必要，使用md文件也可以，只要把验收标准以及字段标准规定好就好。还有文章中提到的`init.sh`，其实更多时候的实践是把相关内容写到项目总的AGENTS.md或者CLAUDE.md中，如果比较复杂的话连接到一个子doc即可。并不需要太拘泥于形式。
另外，我和同事曾经在开发过程中尝试把各自的session log上传到公司的云服务器来实现session同步和工作协同，团队成员（或者说session）之间进行同步工作，使用文档确实比单纯的读取session log历史记录好得多，因为文档中汇集了人的决策以及产品方面的思路。但是实际用起来结果并不理想，因为session中不仅包含了人的决策，还有大量的机器根据人的决策所推导出来的决策，这些决策有的时候会背离产品初衷。而且巨量的session信息本身就是沉重的负担，当一个“文档”（或者说项目描述文本，此处指session log）尝试事无巨细地描述项目的时候，上下文塞得太满反而会挤占任务本身和相关代码的空间；而且“当所有东西都‘重要’时，其实等于没有重点”。（OpenAI的文章也有提及这种设计，“progressive disclosure”（渐进式披露）：agent 一开始只接触一个小而稳定的入口点，再被引导去查找下一步需要的具体信息，而不是一开始就被海量文档淹没。）


总的来说OpenAI的文章更全面一些，Anthropic这篇更偏向于任务之间的同步。感觉harness engineering听上去好像很牛，但其实只不过是大部分常用AI进行开发的开发者的日常罢了。AI圈还是太会造概念了，concept engineering这一块。
