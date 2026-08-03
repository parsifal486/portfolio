---
title: 'What Do You Do While Waiting for Agent Replies? A Worktree-Based Parallel Development Workflow for Coding Agents'
description: 'Why git worktree finally matters in the age of coding agents, and the session-per-worktree workflow I built on top of Claude Code: lightweight and full modes, contract files, and a main-session acceptance loop.'
keywords: git worktree, coding agents, Claude Code, parallel development, agent workflow
author: ryuteakwoo
date: 2026-08-03
---

Worktree is a Git feature introduced in 2015. Branches answer the question of "how code history diverges"; worktrees answer a different question: "how multiple branches can be checked out as local files at the same time." Worktree never became as popular as branch, not because it is a bad feature, but because in traditional development, checking out multiple branches at once was far less common than creating multiple branches.

Development with coding agents changes that. A single developer can now run many branch-level tasks locally at the same time, as long as those tasks do not have strong dependencies or race conditions, and as long as the developer's own working memory can keep up.

I started using worktree because I kept running into the same problem: after giving instructions to a coding agent, I often had to wait for a long time. While the agent was generating a result, and before I could check it, I often had nothing useful to do. Opening more sessions did not fully solve the problem. If multiple agents were working in the same checkout, I was still reluctant to let them all modify code at the same time. At most, one agent could plan while another one executed. That severely limited both the agent's productivity and mine.

In OpenAI's [February 2026 article on harness engineering](https://openai.com/index/harness-engineering), they wrote: "...we made the app bootable per git worktree, so Codex could launch and drive one instance per change...". That points to worktree as a useful development primitive, but it does not spell out what the actual workflow should look like. Below is the workflow I ended up with, and how it changed over time.

When I first tried worktree in Claude Code, I simply opened multiple sessions and issued natural-language commands inside each one. For example: "Create a worktree for me and implement feature xxx." After reviewing the result, I would say: "The feature is done. Close this worktree." Then I would give the next command: "Create a worktree for me and implement feature xxx." I used this loop to develop multiple features in parallel across multiple sessions.

This works for a while, but it becomes fragile over time. The problem is that I was treating a session as a reusable worker, while Claude Code's context is better suited to one stable task. The lifecycles of three things should line up: session, worktree, and feature.

> Deleting a worktree does not delete the session context. After deleting the previous worktree, you often also need to run `/clear` before creating a new worktree cleanly. In this three-step flow, the commands are still natural-language commands. They involve two working-directory changes and one context reset. Claude can easily accumulate hidden state when switching directories inside the same session, while clearing the context removes its ability to trace the root cause of earlier problems.

A more stable approach is to bind them tightly: one feature gets one dedicated session, and that session manages one worktree.

Next, I will walk through Claude Code's own worktree support and the workflow I built on top of it. This workflow should not be treated as fixed. As coding harnesses and business needs change, the workflow should change with them.

## Claude Code's Worktree Support and My Wrapper

### Startup Layer: CLI Arguments

Claude Code provides a top-level `--worktree` / `-w` argument, so users can specify a task and create or select a worktree as soon as a session starts. I do not particularly like naming the worktree upfront. I prefer to choose the model when starting the session, based on the expected complexity of the task. Different models fit different levels of difficulty, and aliases reduce the friction of repeatedly starting sessions.

For example:

```shell
alias cldo="claude --dangerously-skip-permissions --chrome --model opus"
alias cldf="claude --dangerously-skip-permissions --chrome --model fable"
```

### Tool Layer: EnterWorktree / ExitWorktree

**EnterWorktree** lets Claude move the current conversation into a worktree. **ExitWorktree** does the reverse: it lets Claude leave the worktree it is currently in.

I built my own `wt` command on top of EnterWorktree:

```shell
/wt [full] <worktree name> <worktree task detailed description>
```

It creates and enters the corresponding worktree based on the task name, and also handles basic branch initialization and naming conventions. The `full` parameter is a mode switch: it marks whether the task needs full validation, or whether it is a lighter task that only needs simple checks.

I did not wrap ExitWorktree, because that tool is mainly useful for agents running in non-interactive mode, or for workflows where a single session needs to switch between multiple worktrees repeatedly.

### Declarative Config, State Tracking, and Concurrency Safety

At the declarative configuration layer, Claude Code exposes only a narrow surface for worktree. The part I use most is `.worktreeinclude`, which copies matching gitignored files, such as `.env`, into the new worktree. Other options are covered in the official Claude documentation. I did not add any custom abstraction here.

At the state tracking layer, Claude Code binds sessions to worktrees. Each session record stores the current working directory, and the worktree for that directory becomes the current worktree for the session.

At the concurrency safety layer, Claude Code mainly does two things: it locks a worktree while someone is using it, so concurrent cleanup cannot delete it by accident; and before automatic cleanup, it checks that no work will be lost, which means a worktree with uncommitted changes will not be deleted.

These three layers are fallback infrastructure, not where the workflow is expressed, so I did not wrap them.

### Extension Layer: Hooks

Claude Code provides two hooks here for repositories that do not use Git as their version control system. Since all my repositories use Git, these two hooks are not very useful to me. Instead, I implemented a hook that checks the current worktree state at startup and injects context, including the dev server port assigned to the current worktree. It also warns about dangling branches and orphaned directories.

## The Actual Workflow

1. Main session: inspects remote and local repository state and tracks branch status. After implementations from different branches are merged into the working branch, the main session runs `/wt-review` against the acceptance document to review the work, check the overall state, fill gaps, validate, and clean up.
2. N parallel child sessions: each session starts with a model chosen according to the task. The session uses `/wt` to create a worktree and enter its working directory. If the task is in `full` mode, it generates a detailed contract file at `.claude/wt/<name>.md`, including acceptance criteria and rejection records. It then calls `wt-up.sh` to allocate a port, so the code can be adjusted interactively during development.
3. After finishing the task, the child session runs `/wt-done`: it runs `pnpm` checks and smoke tests, then adds acceptance criteria for `/wt-review` to use later (only in `full` mode). It then merges, writes back to the contract, and marks the task as "pending acceptance."
4. After the N child sessions finish, I can group the work by module and run `/wt-review` in the main session for acceptance and cross-feature integration checks. Tasks that fail acceptance can be sent back for rework, with the child session continuing development.

The workflow is built around several design choices:

* Two modes, lightweight by default: most changes do not deserve a full acceptance workflow. Lightweight mode keeps only machine checks, usually taking tens of seconds, plus untracked-file checks to prevent lost work. Speed is the lifeline of this workflow. The mode is inferred from the existence of the contract file, so there is nothing to remember or pass manually.
* Separate implementation from acceptance: the person or agent writing code only runs smoke tests and writes down "how to validate this." Item-by-item acceptance and cross-feature integration checks belong to the main session, because integration issues structurally cannot be validated inside an unmerged worktree.
* Externalize state, make sessions disposable: acceptance criteria and rejection reasons all live in contract files. With startup summaries injected by hooks, any new session can cold-start and take over. Closing a tab is no longer painful.

## References

* [Run parallel sessions with worktrees](https://code.claude.com/docs/en/worktrees)
