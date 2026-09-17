const CARDS = [
  {
    title: "Reach for LightSprint when…",
    accent: "border-accent/30 bg-accent-soft",
    points: [
      "The change spans more than one repo or service and should land as one coordinated set of PRs.",
      "You want a clickable preview and screenshot evidence before you spend review time on the diff.",
      "The work needs a reviewed spec, not just an issue, before anyone writes code.",
      "You want agents running unattended — QA-ing every PR, reviewing merges, triaging Slack — on a budget you control.",
    ],
  },
  {
    title: "Reach for Copilot when…",
    accent: "border-neutral-300 bg-surface-muted",
    points: [
      "You want completions and chat without leaving the editor you already use all day.",
      "The task is a single-repo fix scoped tightly enough to hand off as one GitHub issue.",
      "Your whole org is already standardized on GitHub seats and IDE-native tooling.",
      "You want the assistant with the largest install base and the most third-party editor support.",
    ],
  },
  {
    title: "Reach for both when…",
    accent: "border-border bg-surface",
    points: [
      "Individual contributors want inline completions while they type.",
      "Bigger, multi-repo, or spec-first work goes to LightSprint instead of a lone coding-agent session.",
      "You want a second, independent set of eyes: LightSprint's QA automation reviewing PRs Copilot opened, or vice versa.",
      "You're not ready to standardize on one and want real signal on where each earns its seat.",
    ],
  },
];

export function Verdict() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
          The short version
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          These aren&apos;t mutually exclusive products. Most teams running
          both end up routing work by shape, not by preference.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className={`rounded-2xl border p-6 ${card.accent}`}
            >
              <h3 className="text-lg font-semibold text-foreground">
                {card.title}
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-neutral-700">
                {card.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span aria-hidden className="mt-1 text-muted-foreground">
                      &bull;
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
