import { copilotSources, lastVerified } from "@/lib/data";

export function Sources() {
  return (
    <section id="sources" className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-xl font-semibold text-white">
          Where the Copilot facts come from
        </h2>
        <p className="mt-2 text-sm text-slate-400">
          Every GitHub Copilot claim on this page was fetched live from
          GitHub&apos;s own documentation on {lastVerified} — not recalled
          from memory. LightSprint&apos;s side comes from LightSprint&apos;s
          own product documentation. If either product has shipped something
          new since, this page is one PR away from being updated.
        </p>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {copilotSources.map((source) => (
            <li key={source.url}>
              <a
                href={source.url}
                className="text-sm text-sky-300 underline decoration-sky-300/30 underline-offset-4 transition hover:text-sky-200 hover:decoration-sky-200"
              >
                {source.label} ↗
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
