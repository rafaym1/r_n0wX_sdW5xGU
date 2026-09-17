export function CtaFooter() {
  return (
    <section
      className="border-t border-border"
      style={{
        background:
          "linear-gradient(180deg, var(--surface-muted) 0%, var(--accent-soft) 100%)",
      }}
    >
      <div className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
          See it on your own repo
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          This page is itself a LightSprint task: a real pull request, built
          in a real sandbox, reviewed like any other change. Point it at your
          codebase and judge the comparison yourself.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="https://app.lightsprint.ai"
            className="rounded-full px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/20 transition hover:opacity-90"
            style={{
              background: "linear-gradient(105deg, #fb773a 7.13%, #ff5619 56.12%)",
            }}
          >
            Start a LightSprint task
          </a>
          <a
            href="https://github.com/features/copilot"
            className="rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition hover:border-neutral-300 hover:bg-surface-muted"
          >
            Compare with GitHub Copilot ↗
          </a>
        </div>
      </div>
      <footer className="border-t border-border px-6 py-8 text-center text-xs text-muted-foreground">
        Independent comparison maintained as a live web page, not a static
        mockup — “LightSprint” and “GitHub Copilot” are trademarks of their
        respective owners.
      </footer>
    </section>
  );
}
