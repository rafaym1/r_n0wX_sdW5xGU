import { deepDives } from "@/lib/data";

export function DeepDive() {
  return (
    <section id="deep-dive" className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
          Four differences worth understanding
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          The table tells you what. This is the why — how each product
          actually behaves once you&apos;re using it.
        </p>
        <div className="mt-10 space-y-8">
          {deepDives.map((item, i) => (
            <div
              key={item.title}
              className="grid gap-6 rounded-2xl border border-border bg-surface p-6 sm:grid-cols-[auto_1fr] sm:p-8"
            >
              <span className="text-sm font-mono text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <div className="mt-4 grid gap-6 sm:grid-cols-2">
                  <div className="rounded-xl border border-accent/20 bg-accent-soft p-4">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-accent-strong">
                      LightSprint
                    </p>
                    <p className="text-sm leading-relaxed text-neutral-700">
                      {item.lightsprint}
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-surface-muted p-4">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-500">
                      GitHub Copilot
                    </p>
                    <p className="text-sm leading-relaxed text-neutral-700">
                      {item.copilot}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
