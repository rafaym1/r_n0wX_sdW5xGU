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
  yes: { label: "Yes", className: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30" },
  partial: { label: "Partial", className: "bg-amber-500/15 text-amber-300 border-amber-500/30" },
  no: { label: "No", className: "bg-slate-500/15 text-slate-400 border-slate-500/30" },
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
    <section id="comparison" className="border-b border-white/10 bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Feature-by-feature
            </h2>
            <p className="mt-2 max-w-2xl text-slate-400">
              Click a row for the reasoning behind the verdict. Filter by
              category to focus on what you actually care about.
            </p>
          </div>
          <span className="text-sm text-slate-500">
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
                    ? "border-sky-400 bg-sky-500/20 text-sky-200"
                    : "border-white/10 text-slate-400 hover:border-white/25 hover:text-white"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
          <div className="grid grid-cols-[1fr_auto_auto] items-center gap-4 border-b border-white/10 bg-white/5 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
            <span>Feature</span>
            <span className="w-24 text-center">LightSprint</span>
            <span className="w-24 text-center">Copilot</span>
          </div>
          <ul>
            {rows.map((row) => {
              const isOpen = expanded === row.feature;
              return (
                <li key={row.feature} className="border-b border-white/5 last:border-b-0">
                  <button
                    type="button"
                    onClick={() => setExpanded(isOpen ? null : row.feature)}
                    aria-expanded={isOpen}
                    data-testid={`row-toggle-${slugify(row.feature)}`}
                    className="grid w-full grid-cols-[1fr_auto_auto] items-center gap-4 px-5 py-4 text-left transition hover:bg-white/[0.03]"
                  >
                    <span className="text-sm font-medium text-slate-100">
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
                    <div className="grid gap-4 border-t border-white/5 bg-white/[0.02] px-5 py-4 text-sm sm:grid-cols-2">
                      <p className="text-slate-500 sm:col-span-2">{row.detail}</p>
                      <div>
                        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-sky-300">
                          LightSprint
                        </p>
                        <p className="text-slate-300">{row.lightsprintNote}</p>
                      </div>
                      <div>
                        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-fuchsia-300">
                          Copilot
                        </p>
                        <p className="text-slate-300">{row.copilotNote}</p>
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
