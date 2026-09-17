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
    <section className="relative overflow-hidden border-b border-white/10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-950 to-slate-950"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <p className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-sky-300">
          Live comparison &middot; built with LightSprint, reviewed by a human
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          LightSprint vs. GitHub Copilot
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl">
          One is the assistant already living in your editor. The other is a
          team of AI engineers that boots a sandbox, works a whole task
          across your repos, and hands back a real pull request. Here is how
          they actually compare — feature by feature, no marketing gloss.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="https://app.lightsprint.ai"
            className="rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/20 transition hover:bg-sky-400"
          >
            Start a LightSprint task
          </a>
          <a
            href="#comparison"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
          >
            Jump to the full table ↓
          </a>
        </div>
        <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
          <div>
            <dt className="text-xs uppercase tracking-wide text-slate-400">
              LightSprint-only
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-sky-300">
              {lightsprintWins}
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-slate-400">
              Both support
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-slate-200">
              {bothSupport}
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-slate-400">
              Copilot-only
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-slate-200">
              {copilotWins}
            </dd>
          </div>
        </dl>
        <p className="mt-3 max-w-2xl text-xs text-slate-500">
          Counted live from the {comparisonRows.length}-row table below — edit
          the data, the numbers above move with it.
        </p>
      </div>
    </section>
  );
}
