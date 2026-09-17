"use client";

import { useMemo, useState } from "react";
import {
  categories,
  comparisonRows,
  slugify,
  type Category,
  type Support,
} from "@/lib/data";

const FILTERS: Array<Category | "All"> = ["All", ...categories];

const SUPPORT_STYLES: Record<
  Support,
  { label: string; className: string }
> = {
  yes: { label: "Yes", className: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  partial: { label: "Partial", className: "bg-amber-50 text-amber-700 border-amber-200" },
  no: { label: "No", className: "bg-neutral-100 text-neutral-500 border-neutral-200" },
};

function SupportBadge({ value }: { value: Support }) {
  const style = SUPPORT_STYLES[value];
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${style.className}`}
    >
      {style.label}
    </span>
  );
}

export function ComparisonTable() {
  const [filter, setFilter] = useState<Category | "All">("All");
  const [expanded, setExpanded] = useState<string | null>(null);

  const rows = useMemo(
    () =>
      filter === "All"
        ? comparisonRows
        : comparisonRows.filter((row) => row.category === filter),
    [filter]
  );

  return (
    <section id="comparison" className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
              Feature-by-feature
            </h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Click a row for the reasoning behind the verdict. Filter by
              category to focus on what you actually care about.
            </p>
          </div>
          <span className="text-sm text-muted-foreground">
            Showing {rows.length} of {comparisonRows.length}
          </span>
        </div>

        <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Filter by category">
          {FILTERS.map((f) => {
            const active = f === filter;
            return (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={active}
                data-testid={`category-filter-${slugify(f)}`}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition ${
                  active
                    ? "border-accent/40 bg-accent-soft text-accent-strong"
                    : "border-border text-muted-foreground hover:border-neutral-300 hover:text-foreground"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface">
          <div className="grid grid-cols-[1fr_auto_auto] items-center gap-4 border-b border-border bg-surface-muted px-5 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            <span>Feature</span>
            <span className="w-24 text-center">LightSprint</span>
            <span className="w-24 text-center">Copilot</span>
          </div>
          <ul>
            {rows.map((row) => {
              const isOpen = expanded === row.feature;
              return (
                <li key={row.feature} className="border-b border-border last:border-b-0">
                  <button
                    type="button"
                    onClick={() => setExpanded(isOpen ? null : row.feature)}
                    aria-expanded={isOpen}
                    data-testid={`row-toggle-${slugify(row.feature)}`}
                    className="grid w-full grid-cols-[1fr_auto_auto] items-center gap-4 px-5 py-4 text-left transition hover:bg-surface-muted"
                  >
                    <span className="text-sm font-medium text-foreground">
                      {row.feature}
                    </span>
                    <span className="w-24 text-center">
                      <SupportBadge value={row.lightsprint} />
                    </span>
                    <span className="w-24 text-center">
                      <SupportBadge value={row.copilot} />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="grid gap-4 border-t border-border bg-surface-muted px-5 py-4 text-sm sm:grid-cols-2">
                      <p className="text-muted-foreground sm:col-span-2">{row.detail}</p>
                      <div>
                        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-accent-strong">
                          LightSprint
                        </p>
                        <p className="text-neutral-700">{row.lightsprintNote}</p>
                      </div>
                      <div>
                        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-neutral-500">
                          Copilot
                        </p>
                        <p className="text-neutral-700">{row.copilotNote}</p>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
