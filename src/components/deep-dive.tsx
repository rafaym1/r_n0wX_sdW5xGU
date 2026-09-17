import { deepDives } from "@/lib/data";

export function DeepDive() {
  return (
    <section id="deep-dive" className="border-b border-white/10 bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">
          Four differences worth understanding
        </h2>
        <p className="mt-2 max-w-2xl text-slate-400">
          The table tells you what. This is the why — how each product
          actually behaves once you&apos;re using it.
        </p>
        <div className="mt-10 space-y-8">
          {deepDives.map((item, i) => (
            <div
              key={item.title}
              className="grid gap-6 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:grid-cols-[auto_1fr] sm:p-8"
            >
              <span className="text-sm font-mono text-slate-600">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <div className="mt-4 grid gap-6 sm:grid-cols-2">
                  <div className="rounded-xl border border-sky-500/20 bg-sky-500/5 p-4">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-sky-300">
                      LightSprint
                    </p>
                    <p className="text-sm leading-relaxed text-slate-300">
                      {item.lightsprint}
                    </p>
                  </div>
                  <div className="rounded-xl border border-fuchsia-500/20 bg-fuchsia-500/5 p-4">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-fuchsia-300">
                      GitHub Copilot
                    </p>
                    <p className="text-sm leading-relaxed text-slate-300">
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
