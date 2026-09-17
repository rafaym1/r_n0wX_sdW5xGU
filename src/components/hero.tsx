import { comparisonRows } from "@/lib/data";

export function Hero() {
  const lightsprintWins = comparisonRows.filter(
    (r) => r.lightsprint === "yes" && r.copilot !== "yes"
  ).length;
  const copilotWins = comparisonRows.filter(
    (r) => r.copilot === "yes" && r.lightsprint !== "yes"
  ).length;
  const bothSupport = comparisonRows.filter(
    (r) => r.lightsprint === "yes" && r.copilot === "yes"
  ).length;

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at top, var(--accent-soft) 0%, var(--background) 60%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <p className="mb-4 inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-accent-strong">
          Live comparison &middot; built with LightSprint, reviewed by a human
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
          LightSprint vs. GitHub Copilot
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          One is the assistant already living in your editor. The other is a
          team of AI engineers that boots a sandbox, works a whole task
          across your repos, and hands back a real pull request. Here is how
          they actually compare — feature by feature, no marketing gloss.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="https://lightsprint.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/20 transition hover:opacity-90"
            style={{
              background: "linear-gradient(105deg, #fb773a 7.13%, #ff5619 56.12%)",
            }}
          >
            Start a LightSprint task
          </a>
          <a
            href="#comparison"
            className="rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition hover:border-neutral-300 hover:bg-surface-muted"
          >
            Jump to the full table ↓
          </a>
        </div>
        <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-border pt-8">
          <div>
            <dt className="text-xs uppercase tracking-wide text-muted-foreground">
              LightSprint-only
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-accent-strong">
              {lightsprintWins}
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-muted-foreground">
              Both support
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-foreground">
              {bothSupport}
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-muted-foreground">
              Copilot-only
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-foreground">
              {copilotWins}
            </dd>
          </div>
        </dl>
        <p className="mt-3 max-w-2xl text-xs text-muted-foreground">
          Counted live from the {comparisonRows.length}-row table below — edit
          the data, the numbers above move with it.
        </p>
      </div>
    </section>
  );
}
