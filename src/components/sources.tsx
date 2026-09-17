import { copilotSources, lastVerified } from "@/lib/data";

export function Sources() {
  return (
    <section id="sources" className="border-t border-border bg-background">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-xl font-semibold text-foreground">
          Where the Copilot facts come from
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
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
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent-strong underline decoration-accent/30 underline-offset-4 transition hover:decoration-accent"
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
