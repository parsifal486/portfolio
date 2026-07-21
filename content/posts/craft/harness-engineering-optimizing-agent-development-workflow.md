---
title: 'Behind the Concept: Optimizing Agent Development Workflow with Harness Engineering'
description: 'A close read of the OpenAI and Anthropic articles on the harness concept, what harness engineering actually means, and why it is largely the everyday routine of developers building with AI.'
keywords: harness engineering, agent development, OpenAI, Anthropic
author: ryuteakwoo
date: 2026-07-21
---

# The Concept

Unlike "agent," "harness" doesn't have a clear-cut academic definition. The concept was put forward mainly by two companies, OpenAI and Anthropic; the two key articles are:

https://openai.com/index/harness-engineering

https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents

Feed both articles to an AI at once, and the general definition it gives is:

>A harness is an executable control system that sits outside the model and directly mediates the model's interaction with its environment. It governs what the model sees, what it can do, how actions are executed, how results are fed back, and how the whole multi-step loop continues, is constrained, or terminates.

But the two companies' articles do define harness differently:
OpenAI means:

>harness = the entire engineered environment

Anthropic, by contrast, gives a clearer definition: harness = the agent runtime / framework (the SDK itself)

>The Claude Agent SDK is a powerful, general-purpose agent harness adept at coding, as well as other tasks that require the model to use tools to gather context, plan, and execute.

# Details & Interpretation

Let me walk through the two articles separately.

## OpenAI

Honestly, OpenAI's "harness" article isn't really about harness at all—the word "harness" shows up only once in the whole piece. The article is really a chronicle of how OpenAI's own engineers, developing with pure agents, kept optimizing this engineering environment to improve the efficiency and quality of the agent's coding. "a software engineering team's primary job is no longer to write code, but to design environments, specify intent, and build feedback loops that allow Codex agents to do reliable work." (This process *is* the harness. Dig into the concept and it turns out to be no different from what most developers building with AI tools already do—optimizing the structure of the dev environment to maximize the model's performance.)

What I find most outstanding in the OpenAI team's take:

### application legibility

* By building multiple independently runnable worktrees, Codex runs one instance per change; they wired the Chrome DevTools Protocol into the agent runtime and built skills for DOM snapshots / screenshots / navigation → the agent can reproduce bugs, verify fixes, and reason about UI behavior directly.
* Stand up a separate, throwaway-after-completion logging/tracing system per worktree. The agent queries logs with LogQL and metrics with PromQL (this way the data targets set within a single task are easier for the agent to perceive).

### Progressive disclosure documentation architecture

* Avoid one giant master AGENTS.md; use specific docs for specific tasks. If a single document tries to cover everything, it's as good as covering nothing.
* The master doc acts as an index (table of contents), pointing to deeper sources of truth.
* The real documentation lives in the docs/ directory.
* Dedicated linters + CI validate that the knowledge base is up to date, cross-linked, and structurally correct; a recurring "doc-gardening" agent scans for stale docs that no longer match the real code and opens fix-up PRs.

### Inverted merge philosophy

* The huge business-code throughput that agent coding brings makes the traditional PR + heavy-review merge collaboration model no longer efficient. Review shifts to agent-to-agent.
* Agent throughput far outstrips human attention: corrections are cheap, waiting is expensive. PR lifecycles are short, and flaky test failures are usually handled by re-running later rather than blocking the pipeline.
* Replace line-by-line human review with mechanized cleanup.

### Enforcing architecture and taste

* Agents are most effective in environments with strict boundaries and predictable structure. So they built the app around a rigid architectural model.
* Concrete layering rule: each business domain is cut into fixed layers, with strictly validated dependency directions and a limited set of permitted edges—Types → Config → Repo → Service → Runtime → UI (only "forward" dependencies allowed); cross-cutting concerns (auth, connectors, telemetry, feature flags) may only enter through a single explicit interface, Providers; everything else is disallowed and mechanically enforced by custom linters + structural tests.

### Entropy and garbage collection

* Full agent autonomy introduces drift—Codex replicates patterns already present in the repo, including the uneven / suboptimal ones, and over time it inevitably rots.
* Encode "golden principles" directly into the repo (opinionated, mechanical rules that keep the codebase legible and consistent for future agents). E.g.: ① prefer shared utility packages over hand-rolled helpers, to centralize invariants; ② don't probe data "YOLO-style"—validate at the boundary or rely on typed SDKs, so the agent can't keep building on guessed-at shapes.
* Execution mechanism: a set of background Codex tasks scan for deviations on a fixed cadence → update quality grades → open targeted refactoring PRs; most can be reviewed in under a minute and auto-merged.

Agent-based software development shifts humans to working at a higher level of abstraction. Optimizing the agent's software-building environment (harness engineering) still demands discipline, but the discipline shows up more in the scaffolding than in the code; the tools, abstractions, and feedback loops that keep the codebase coherent matter more and more. The hardest challenge has become: designing the environments, feedback loops, and control systems that let agents reach the goal.

## Anthropic

Anthropic's article optimizes the workflow from the angle of context management. The scenario it targets: when a large coding task spans multiple context windows, how do you let each "amnesiac" new session quickly pick up where the last one left off.
Actually, Claude Code's session-record feature plus session compact/resume can already do this. Collaborating with a colleague, I once tried building our own session-sync system to improve collaboration efficiency, but it didn't work as well as hoped and was fairly complicated to operate; in the end we went back to syncing via documents.

Back to Anthropic's sync methodology.
Anthropic's piece, "Effective harnesses for long-running agents," lives up to its title—it's about how to solve, by optimizing the harness, the problems agents run into during long-cycle development.
Specifically, it combines an Initializer Agent and a Coding Agent to track and follow project state in real time, avoiding the failures caused by the coding agent's cognition and behavior going off the rails.
The article raises four main failure cases: declaring the entire project done too early; leaving the environment in a buggy or undocumented state, so the next session inherits a mess it can't make sense of; marking a task complete without enough testing; and having to spend time figuring out how to run the project every single time.

**Initializer Agent** (the initialization agent, runs only on the first session) — its behavior:
It's responsible for setting up a whole "environment scaffold" at the very start of the project, doing four things: generating a structured feature list (JSON format, listing every end-to-end feature) from the user's requirements; creating the initial git repo and writing a progress notes file; this feature list also doubles as the later criterion for "does a feature count as done"; and finally writing an `init.sh` script so subsequent agents can start the dev server with it directly, instead of re-figuring it out each time.

**Coding Agent** (runs every subsequent session) — its behavior:
Each time, it starts in the posture of "a new hire taking over a shift," first doing a few "get the lay of the land, pick a task" things: read the feature list file and pick an unfinished feature to work on, rather than trying to knock out the whole project at once; read the progress notes and git commit log, and run a basic test against the dev server to confirm there are no leftover, undocumented bugs. After finishing the feature, it does two "wrap-up" things: carefully self-verify the feature (e.g., end-to-end testing), and only mark the corresponding item in the feature list as passing once it genuinely passes; before ending, commit to git and update the progress notes, leaving a clean handoff record for the next session.

# Interpretation

From my own experience, JSON format isn't strictly necessary—an md file works too, as long as you nail down the acceptance criteria and the field spec. And the `init.sh` the article mentions—in practice, more often you just write the relevant content into the project's master AGENTS.md or CLAUDE.md, and link out to a sub-doc if it gets complex. No need to be too rigid about the form.
Separately: my colleague and I once tried, during development, uploading our respective session logs to the company's cloud server to achieve session sync and collaboration, syncing work between team members (or rather, between sessions). Using documents really is much better than plainly reading session-log history, because a document gathers the human's decisions and the product thinking. But in practice the results weren't great—because a session contains not only the human's decisions but also a large volume of machine-derived decisions inferred from those human decisions, and these sometimes drift away from the product's original intent. And the sheer mass of session information is itself a heavy burden: when a "document" (or rather, the project-description text—here meaning the session log) tries to describe the project in exhaustive detail, stuffing the context too full actually crowds out the task itself and the relevant code; and "when everything is 'important,' nothing is." (OpenAI's article touches on this design too, "progressive disclosure": the agent first encounters only a small, stable entry point, and is then guided to look up the specific information it needs next, rather than being drowned in a mountain of docs up front.)

Overall, OpenAI's article is more comprehensive, while Anthropic's leans more toward sync between tasks. Harness engineering sounds impressive, but really it's just the daily routine of most developers who build with AI. The AI world is still too good at manufacturing concepts—this whole "concept engineering" thing.
