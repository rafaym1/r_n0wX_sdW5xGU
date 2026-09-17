export function CtaFooter() {
  return (
    <section className="border-t border-white/10 bg-gradient-to-b from-slate-950 to-blue-950/40">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          See it on your own repo
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-400">
          This page is itself a LightSprint task: a real pull request, built
          in a real sandbox, reviewed like any other change. Point it at your
          codebase and judge the comparison yourself.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="https://app.lightsprint.ai"
            className="rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/20 transition hover:bg-sky-400"
          >
            Start a LightSprint task
          </a>
          <a
            href="https://github.com/features/copilot"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
          >
            Compare with GitHub Copilot ↗
          </a>
        </div>
      </div>
      <footer className="border-t border-white/10 px-6 py-8 text-center text-xs text-slate-600">
        Independent comparison maintained as a live web page, not a static
        mockup — “LightSprint” and “GitHub Copilot” are trademarks of their
        respective owners.
      </footer>
    </section>
  );
}
