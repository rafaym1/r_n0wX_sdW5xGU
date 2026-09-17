import { pricingPlans } from "@/lib/data";

export function PricingSnapshot() {
  const copilotPlans = pricingPlans.filter((p) => p.product === "copilot");

  return (
    <section id="pricing" className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
          Pricing, at a glance
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          GitHub Copilot publishes flat per-seat pricing. LightSprint is
          workspace billing plus, optionally, the model account you already
          pay for — so the two aren&apos;t apples-to-apples, but here&apos;s
          what&apos;s public.
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-accent/25 bg-accent-soft p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-accent-strong">
              LightSprint
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Workspace-level plan and credits, plus optional bring-your-own
              model billing: connect your own Claude subscription, ChatGPT
              (Codex), or OpenRouter (Auto) account and pay that provider
              directly for the tokens an agent uses. Current workspace plans
              and limits live in Settings → Billing.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              GitHub Copilot
            </p>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              {copilotPlans.map((plan) => (
                <li
                  key={plan.name}
                  className="flex items-baseline justify-between gap-4 border-b border-border pb-2 last:border-b-0 last:pb-0"
                >
                  <span>
                    <span className="font-medium text-foreground">
                      {plan.name}
                    </span>{" "}
                    <span className="text-muted-foreground">— {plan.note}</span>
                  </span>
                  <span className="shrink-0 font-mono text-foreground">
                    {plan.price}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-muted-foreground">
              Every paid plan above is unlimited on code completions; chat,
              the coding agent, and code review draw from a monthly AI-credit
              allotment tied to the seat price. See the live pricing page for
              current credit amounts — they change with GitHub&apos;s
              usage-based billing rollout.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
