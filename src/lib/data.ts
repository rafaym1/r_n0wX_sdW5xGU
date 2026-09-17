export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

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
    copilotNote: "Unlimited completions and next-edit suggestions on every paid plan; completions never consume AI credits, even on the free tier.",
    category: "Editor experience",
  },
  {
    feature: "Depth of editor integration",
    detail: "How embedded the tool is in the moment-to-moment act of writing code.",
    lightsprint: "partial",
    lightsprintNote: "Browser-based Terminal, file browser and preview — not a keystroke-level IDE plugin.",
    copilot: "yes",
    copilotNote: "First-party extensions for VS Code, Visual Studio, the JetBrains suite, Neovim, Xcode and Eclipse, plus chat in Windows Terminal and GitHub Mobile.",
    category: "Editor experience",
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
  {
    feature: "Autonomous PRs from a task description",
    detail: "Hand over a task in plain language and get back a real pull request.",
    lightsprint: "yes",
    lightsprintNote: "Every task: Launch Agent → sandboxed VM → commits → an open PR, with no fixed run-length limit.",
    copilot: "yes",
    copilotNote: "The cloud coding agent runs in an ephemeral GitHub Actions sandbox and opens a draft PR — capped at one branch and one PR per task, with a hard 59-minute execution limit.",
    category: "Autonomy",
  },
  {
    feature: "Multi-repo tasks in a single run",
    detail: "One change that spans several services, committed and opened together.",
    lightsprint: "yes",
    lightsprintNote: "Stacks boot one VM with up to 50 repos side by side; one PR per repo touched.",
    copilot: "no",
    copilotNote: "GitHub's own docs are explicit here: the cloud agent \"can only make changes in the repository specified when you start a task\" and cannot span repos in one run.",
    category: "Autonomy",
  },
  {
    feature: "Live, clickable preview per task",
    detail: "A running instance of the app you can click through before you review code.",
    lightsprint: "yes",
    lightsprintNote: "Every task gets a preview URL, plus auto-captured screenshots and video evidence.",
    copilot: "no",
    copilotNote: "No built-in preview environment in any GitHub Copilot documentation — you pull the branch, or the app's local worktree, to see it run.",
    category: "Autonomy",
  },
  {
    feature: "Event-driven & scheduled automations",
    detail: "Unattended agent runs triggered by an app event or a schedule, with no one watching.",
    lightsprint: "yes",
    lightsprintNote: "Automations page: QA every PR, review merges, triage Slack, daily digests — triggered by GitHub, Slack, Linear, Jira, a schedule, or a custom webhook.",
    copilot: "partial",
    copilotNote: "The Copilot desktop app can save a recurring agent task and run it on a schedule or on demand, and @copilot in an issue/PR comment triggers a run — but there's no general event bus across GitHub, Slack, Linear and Jira with conditions.",
    category: "Autonomy",
  },
  {
    feature: "Choice of underlying model & engine",
    detail: "Point the agent at the model or account you already pay for.",
    lightsprint: "yes",
    lightsprintNote: "Claude, Codex (your ChatGPT account), or Auto (your OpenRouter key) — pick per task, billed on your own account.",
    copilot: "partial",
    copilotNote: "Copilot's own model picker spans GPT, Claude and Gemini-family models, and Pro+/Max unlock premium models like Opus — all metered against one Copilot subscription, not a separate account you bring.",
    category: "Autonomy",
  },
  {
    feature: "AI-assisted pull request review",
    detail: "Automated, substantive feedback on a diff before a human reviews it.",
    lightsprint: "partial",
    lightsprintNote: "QA existing PRs and Review Merged PRs automations post findings — screenshots on the PR, or a Slack DM with the top issues — rather than inline, severity-labeled diff comments.",
    copilot: "yes",
    copilotNote: "Copilot code review leaves severity-labeled inline comments plus an overall approval assessment, customizable via .github/copilot-instructions.md — and can even run for org members with no Copilot seat if an admin enables it.",
    category: "Autonomy",
  },
  {
    feature: "Planning & spec review before code is written",
    detail: "A reviewable spec with team sign-off for work that isn't a quick, bounded fix.",
    lightsprint: "yes",
    lightsprintNote: "Plans: Explore → Approach → Decisions → Spec → Audit, with named reviewers, versions, and share links.",
    copilot: "partial",
    copilotNote: "The Copilot app's Plan mode has the agent propose a plan you approve before it executes — one agent's proposal in one session, not a multi-phase spec with reviewers and versions.",
    category: "Collaboration",
  },
  {
    feature: "Read-only Q&A across your whole codebase",
    detail: "Ask architecture or history questions without touching any code.",
    lightsprint: "yes",
    lightsprintNote: "Ask threads span every repo in a stack automatically; also reachable as @lightsprint in Slack.",
    copilot: "partial",
    copilotNote: "Copilot Chat is usually scoped to the open repo. Copilot Spaces can ground it in several repos, issues and docs at once and be shared with a team — but a Space is curated by hand, not indexed across a whole stack automatically.",
    category: "Collaboration",
  },
  {
    feature: "Reviewers, share links & threaded chat on a spec",
    detail: "Bring stakeholders into the decision before an agent starts building.",
    lightsprint: "yes",
    lightsprintNote: "Plans support named reviewers, external share links, and in-plan @-mention chat, with approve/deny-with-feedback on each version.",
    copilot: "no",
    copilotNote: "Copilot Spaces can be shared for context, but there's no approve-or-deny-with-feedback review workflow on a spec.",
    category: "Collaboration",
  },
  {
    feature: "Spend controls & tool-access policy",
    detail: "Bound what one run can cost and which tools an agent may call.",
    lightsprint: "yes",
    lightsprintNote: "Guardrails tab: a per-task spend cap, plus a runtime-enforced tool allowlist for read-only agents.",
    copilot: "partial",
    copilotNote: "Usage-based AI credits give every plan a monthly ceiling, and enterprise/org policies gate which features, agents and models are available — but that's seat- and org-level control, not a per-task dollar cap or a runtime tool allowlist.",
    category: "Governance",
  },
  {
    feature: "Auto-merge once CI is green and ready",
    detail: "Let a PR land itself instead of waiting for a human to click merge.",
    lightsprint: "yes",
    lightsprintNote: "Arms at launch or mid-run; merges only at 100/100 readiness with settled, green CI.",
    copilot: "no",
    copilotNote: "Copilot code review's approval assessment tells you whether it thinks a PR is ready — it doesn't merge anything itself.",
    category: "Governance",
  },
  {
    feature: "Content exclusion & audit logging",
    detail: "Keep specific files out of the model's context, and prove what changed and why.",
    lightsprint: "partial",
    lightsprintNote: "Guardrails restrict which tools a read-only agent may call, and Automations keeps an Activity log of every run — there's no dedicated file/repo content-exclusion feature.",
    copilot: "yes",
    copilotNote: "Enterprise/org admins can exclude specific files, directories or repos from Copilot's context at the repo, org or enterprise level, and policy changes land in an audit log retained for 180 days — though GitHub's own docs flag that agent mode in Copilot Chat doesn't honor content exclusion.",
    category: "Governance",
  },
  {
    feature: "Third-party tool connectors (Figma, Sentry, PostHog, Stripe…)",
    detail: "Give an agent live tools beyond the git repository itself.",
    lightsprint: "yes",
    lightsprintNote: "MCP tab: managed Composio apps, first-class Figma, plus custom HTTPS MCP servers — enabled per stack with no setup on the provider's side.",
    copilot: "partial",
    copilotNote: "Copilot supports MCP servers from other providers and third-party coding agents working alongside it, but there's no curated, one-click managed-app catalog the way LightSprint's MCP tab has.",
    category: "Integrations",
  },
  {
    feature: "Native Slack, Linear & Jira workflows",
    detail: "Triage, mirror issues, and trigger or reply to agent work from chat and trackers.",
    lightsprint: "yes",
    lightsprintNote: "Bidirectional Linear/Jira mirroring; @lightsprint in Slack triages and answers threads.",
    copilot: "no",
    copilotNote: "GitHub-centric; no native Slack bot or Linear/Jira issue mirroring in GitHub's own documentation.",
    category: "Integrations",
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
      "A task boots an isolated cloud sandbox with your repo (or up to 50 repos in a stack) checked out side by side, runs the agent end to end with no fixed time limit, and lands on a reviewable pull request plus a live preview URL — with screenshots or video captured automatically as evidence before you even open the diff.",
    copilot:
      "Assign Copilot's cloud coding agent a GitHub issue and it works in an ephemeral GitHub Actions environment against that one repository, pushing commits to a draft pull request. It's bounded by design: one branch, one PR, and a hard 59-minute execution limit per task.",
  },
  {
    title: "Coordinating change across services",
    lightsprint:
      "A Stack is a named, persistent group of repos — possibly across different GitHub organizations — that boots as one sandbox. A task that touches billing, the web app, and a worker service commits to each repo and opens one linked PR per repository, all sharing a task branch name.",
    copilot:
      "GitHub's own cloud-agent documentation is explicit that a task \"can only make changes in the repository specified when you start\" it. Spanning several services means running several separate sessions — in the browser, the desktop app, or the IDE — and reconciling their PRs by hand.",
  },
  {
    title: "Deciding what to build before writing code",
    lightsprint:
      "Plans run a five-phase wizard — Explore, Approach, Decisions, Spec, Audit — that interviews you, rates architecture confidence, and produces a spec reviewers can approve, deny with feedback, or version. Generate Tasks turns an approved plan straight into stack tasks.",
    copilot:
      "The GitHub Copilot desktop app added a middle ground: Plan mode, where the agent proposes a plan and you approve it before it executes. That's real, but it's one agent's proposal inside one session — there's no reviewer sign-off, versioning, or share-link workflow around it the way a LightSprint Plan has.",
  },
  {
    title: "Keeping unattended agents on a leash",
    lightsprint:
      "Guardrails cap what a single task may spend across every turn (admin-configurable, $100–$1000) and restrict exactly which tools a read-only agent can call — enforced at the runtime layer, not left to the model's judgment.",
    copilot:
      "Governance here is org- and seat-shaped rather than per-task: usage-based AI credits cap what a plan spends per month, and enterprise/organization policies gate which features, agents and models are available — plus file- and repo-level content exclusion, with changes recorded in an audit log. There's no equivalent of a single task's own dollar ceiling.",
  },
];

export interface Source {
  label: string;
  url: string;
}

/**
 * Every GitHub Copilot claim on this page traces to one of these pages,
 * fetched live rather than recalled from training data. Re-fetch and
 * update this list (and the rows above) if Copilot ships something new.
 */
export const copilotSources: Source[] = [
  {
    label: "GitHub Copilot features",
    url: "https://docs.github.com/en/copilot/about-github-copilot/github-copilot-features",
  },
  {
    label: "About GitHub Copilot cloud agent",
    url: "https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent",
  },
  {
    label: "About the GitHub Copilot app",
    url: "https://docs.github.com/en/copilot/concepts/agents/github-copilot-app",
  },
  {
    label: "Using GitHub Copilot code review",
    url: "https://docs.github.com/copilot/using-github-copilot/code-review/using-copilot-code-review",
  },
  {
    label: "About GitHub Copilot Spaces",
    url: "https://docs.github.com/en/copilot/concepts/context/spaces",
  },
  {
    label: "GitHub Copilot policies for enterprises and organizations",
    url: "https://docs.github.com/en/copilot/concepts/policies",
  },
  {
    label: "Excluding content from GitHub Copilot",
    url: "https://docs.github.com/en/copilot/how-tos/configure-content-exclusion/exclude-content-from-copilot",
  },
  {
    label: "Copilot feature matrix (IDE support)",
    url: "https://docs.github.com/en/copilot/reference/copilot-feature-matrix",
  },
  {
    label: "GitHub Copilot · Plans & pricing",
    url: "https://github.com/features/copilot/plans",
  },
  {
    label: "GitHub Copilot is moving to usage-based billing",
    url: "https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/",
  },
];

export const lastVerified = "September 17, 2026";

export interface PricingPlan {
  product: "lightsprint" | "copilot";
  name: string;
  price: string;
  note: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    product: "copilot",
    name: "Free",
    price: "$0/mo",
    note: "Completions and chat included; capped usage.",
  },
  {
    product: "copilot",
    name: "Pro",
    price: "$10/mo",
    note: "Unlimited completions, cloud agent, code review.",
  },
  {
    product: "copilot",
    name: "Pro+",
    price: "$39/mo",
    note: "Premium models (incl. Opus), larger AI-credit budget.",
  },
  {
    product: "copilot",
    name: "Business",
    price: "$19/user/mo",
    note: "Org policies, seat management.",
  },
  {
    product: "copilot",
    name: "Enterprise",
    price: "$39/user/mo",
    note: "Content exclusion, audit logs, custom models.",
  },
];
