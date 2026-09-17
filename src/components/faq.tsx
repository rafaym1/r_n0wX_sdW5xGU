"use client";

import { useState } from "react";
import { slugify } from "@/lib/data";

const FAQ_ITEMS = [
  {
    q: "Is this page comparing a plugin to a whole platform?",
    a: "Yes, deliberately. GitHub Copilot is primarily an in-editor assistant (with a coding-agent mode); LightSprint is a cloud platform for autonomous, multi-repo agent work. They overlap on \"AI writes a PR for me\" and diverge everywhere else — that overlap and divergence is exactly what the table above maps.",
  },
  {
    q: "Can I use LightSprint and Copilot on the same repo?",
    a: "Yes. Nothing about LightSprint requires uninstalling Copilot, and nothing about Copilot blocks LightSprint from opening PRs on the same repository. Some teams keep Copilot for in-editor completions and route larger, multi-repo, or spec-first work to LightSprint tasks.",
  },
  {
    q: "Does LightSprint replace my IDE workflow?",
    a: "No — it complements it. LightSprint agents run in cloud sandboxes and hand back pull requests and live previews; you still review, comment, and merge from GitHub (or ask for follow-ups in the task) like any other change.",
  },
  {
    q: "Where do these numbers come from?",
    a: "The comparison table is driven by a single data file in this page's source, not a spreadsheet screenshot. LightSprint's side comes from LightSprint's own product documentation; GitHub Copilot's side was fetched live from docs.github.com and github.blog while writing this page — quoting GitHub's own wording in several rows rather than paraphrasing from memory. See the Sources section below for the exact pages. See something stale? It's one PR away from being fixed.",
  },
  {
    q: "Why does LightSprint mark itself \"No\" on some rows?",
    a: "Because a fair comparison says where a product loses, not just where it wins. LightSprint isn't trying to be the assistant living in your keystrokes — Copilot already does that well, and the table says so.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-slate-950">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">
          Frequently asked
        </h2>
        <div className="mt-8 divide-y divide-white/10 border-t border-b border-white/10">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  data-testid={`faq-toggle-${slugify(item.q)}`}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-sm font-medium text-slate-100 sm:text-base">
                    {item.q}
                  </span>
                  <span
                    aria-hidden
                    className={`shrink-0 text-xl text-slate-500 transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-5 text-sm leading-relaxed text-slate-400">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
