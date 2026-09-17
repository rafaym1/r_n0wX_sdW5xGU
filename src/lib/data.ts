export type Support = "yes" | "partial" | "no";

export interface ComparisonRow {
  feature: string;
  detail: string;
  lightsprint: Support;
  lightsprintNote: string;
  copilot: Support;
  copilotNote: string;
  category: Category;
}

export type Category =
  | "Autonomy"
  | "Editor experience"
  | "Collaboration"
  | "Governance"
  | "Integrations";

export const categories: Category[] = [
  "Autonomy",
  "Editor experience",
  "Collaboration",
  "Governance",
  "Integrations",
];

export const comparisonRows: ComparisonRow[] = [
  {
    feature: "Inline completions while you type",
    detail: "Ghost-text suggestions inside your editor as you write code.",
    lightsprint: "no",
    lightsprintNote: "Not the product — LightSprint works on whole tasks, not keystrokes.",
    copilot: "yes",
    copilotNote: "Copilot's original and still-core feature, in every supported IDE.",
    category: "Editor experience",
  },
  {
    feature: "Autonomous PRs from a task description",
    detail: "Hand over a task in plain language and get back a real pull request.",
    lightsprint: "yes",
    lightsprintNote: "Every task: Launch Agent → sandboxed VM → commits → an open PR.",
    copilot: "yes",
    copilotNote: "Copilot coding agent takes an assigned issue to a draft PR.",
    category: "Autonomy",
  },
  {
    feature: "Multi-repo tasks in a single run",
    detail: "One change that spans several services, committed and opened together.",
    lightsprint: "yes",
    lightsprintNote: "Stacks boot one VM with up to 50 repos side by side; one PR per repo touched.",
    copilot: "no",
    copilotNote: "One coding-agent session works one repository at a time.",
    category: "Autonomy",
  },
  {
    feature: "Live, clickable preview per task",
    detail: "A running instance of the app you can click through before you review code.",
    lightsprint: "yes",
    lightsprintNote: "Every task gets a preview URL, plus auto-captured screenshots and video evidence.",
    copilot: "no",
    copilotNote: "No built-in preview environment; you pull the branch to see it run.",
    category: "Autonomy",
  },
  {
    feature: "Planning & spec review before code is written",
    detail: "A reviewable spec with team sign-off for work that isn't a quick, bounded fix.",
    lightsprint: "yes",
    lightsprintNote: "Plans: Explore → Approach → Decisions → Spec → Audit, with reviewers and versions.",
    copilot: "no",
    copilotNote: "No dedicated planning workflow — you write the issue yourself.",
    category: "Collaboration",
  },
  {
    feature: "Read-only Q&A across your whole codebase",
    detail: "Ask architecture or history questions without touching any code.",
    lightsprint: "yes",
    lightsprintNote: "Ask threads span every repo in a stack; also reachable as @lightsprint in Slack.",
    copilot: "partial",
    copilotNote: "Copilot Chat answers questions, generally scoped to the open repo/workspace.",
    category: "Collaboration",
  },
  {
    feature: "Event-driven automations",
    detail: "Unattended agent runs triggered by GitHub, Slack, Linear, Jira, or a schedule.",
    lightsprint: "yes",
    lightsprintNote: "Automations page: QA every PR, review merges, triage Slack, daily digests, custom triggers.",
    copilot: "no",
    copilotNote: "No general-purpose automation builder for agent runs.",
    category: "Autonomy",
  },
  {
    feature: "Choice of underlying model & engine",
    detail: "Point the agent at the model or account you already pay for.",
    lightsprint: "yes",
    lightsprintNote: "Claude, Codex (your ChatGPT account), or Auto (your OpenRouter key) — pick per task.",
    copilot: "partial",
    copilotNote: "Copilot itself offers a model picker, but only within a single Copilot subscription.",
    category: "Autonomy",
  },
  {
    feature: "Per-task spend caps & tool allowlists",
    detail: "Bound what one run can cost and which tools a read-only agent may call.",
    lightsprint: "yes",
    lightsprintNote: "Guardrails tab: task spend cap plus a runtime-enforced tool allowlist.",
    copilot: "no",
    copilotNote: "Governed by your GitHub Copilot policy settings, not per-run spend controls.",
    category: "Governance",
  },
  {
    feature: "Auto-merge once CI is green and ready",
    detail: "Let a PR land itself instead of waiting for a human to click merge.",
    lightsprint: "yes",
    lightsprintNote: "Arms at launch or mid-run; merges only at 100/100 readiness with settled, green CI.",
    copilot: "no",
    copilotNote: "No built-in readiness score or auto-merge gate.",
    category: "Governance",
  },
  {
    feature: "Reviewers, share links & threaded chat on a spec",
    detail: "Bring stakeholders into the decision before an agent starts building.",
    lightsprint: "yes",
    lightsprintNote: "Plans support named reviewers, external share links, and in-plan @-mention chat.",
    copilot: "no",
    copilotNote: "Review happens on the resulting pull request, not on a pre-code spec.",
    category: "Collaboration",
  },
  {
    feature: "Depth of editor integration",
    detail: "How embedded the tool is in the moment-to-moment act of writing code.",
    lightsprint: "partial",
    lightsprintNote: "Browser-based Terminal, file browser and preview — not a keystroke-level IDE plugin.",
    copilot: "yes",
    copilotNote: "First-class extensions for VS Code, JetBrains, Visual Studio, Neovim and Xcode.",
    category: "Editor experience",
  },
  {
    feature: "Third-party tool connectors (Figma, Sentry, PostHog, Stripe…)",
    detail: "Give an agent live tools beyond the git repository itself.",
    lightsprint: "yes",
    lightsprintNote: "MCP tab: managed Composio apps, first-class Figma, plus custom HTTPS MCP servers.",
    copilot: "partial",
    copilotNote: "Extensible via GitHub Apps and MCP support in supported clients.",
    category: "Integrations",
  },
  {
    feature: "Native Slack, Linear & Jira workflows",
    detail: "Triage, mirror issues, and trigger or reply to agent work from chat and trackers.",
    lightsprint: "yes",
    lightsprintNote: "Bidirectional Linear/Jira mirroring; @lightsprint in Slack triages and answers threads.",
    copilot: "no",
    copilotNote: "GitHub-centric; no native Slack bot or Linear/Jira issue mirroring.",
    category: "Integrations",
  },
  {
    feature: "Install base & IDE market reach",
    detail: "How many developers already have it open right now.",
    lightsprint: "no",
    lightsprintNote: "A newer, web-first platform — not a keystroke-count competitor by design.",
    copilot: "yes",
    copilotNote: "The default assistant for millions of GitHub users across every major editor.",
    category: "Editor experience",
  },
];

export interface DeepDive {
  title: string;
  lightsprint: string;
  copilot: string;
}

export const deepDives: DeepDive[] = [
  {
    title: "What a single run actually produces",
    lightsprint:
      "A task boots an isolated cloud sandbox with your repo (or up to 50 repos in a stack) checked out side by side, runs the agent end to end, and lands on a reviewable pull request plus a live preview URL — with screenshots or video captured automatically as evidence before you even open the diff.",
    copilot:
      "Assign Copilot's coding agent a GitHub issue and it works in a cloud dev environment against that one repository, pushing commits to a draft pull request you review and iterate on with normal PR comments.",
  },
  {
    title: "Coordinating change across services",
    lightsprint:
      "A Stack is a named, persistent group of repos — possibly across different GitHub organizations — that boots as one sandbox. A task that touches billing, the web app, and a worker service commits to each repo and opens one linked PR per repository, all sharing a task branch name.",
    copilot:
      "Each coding-agent session is scoped to the repository the issue lives in. Spanning several services means coordinating several separate sessions and PRs by hand.",
  },
  {
    title: "Deciding what to build before writing code",
    lightsprint:
      "Plans run a five-phase wizard — Explore, Approach, Decisions, Spec, Audit — that interviews you, rates architecture confidence, and produces a spec reviewers can approve, deny with feedback, or version. Generate Tasks turns an approved plan straight into stack tasks.",
    copilot:
      "There's no equivalent planning surface — the work an agent does is scoped by however much detail you put in the GitHub issue you assign it.",
  },
  {
    title: "Keeping unattended agents on a leash",
    lightsprint:
      "Guardrails cap what a single task may spend across every turn (admin-configurable, $100–$1000) and restrict exactly which tools a read-only agent can call — enforced at the runtime layer, not left to the model's judgment.",
    copilot:
      "Spend and access are governed by your organization's Copilot policy and license settings rather than a per-task budget or tool allowlist.",
  },
];
