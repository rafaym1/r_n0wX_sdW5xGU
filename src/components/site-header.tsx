const NAV_LINKS = [
  { href: "#comparison", label: "Comparison" },
  { href: "#deep-dive", label: "Deep dive" },
  { href: "#faq", label: "FAQ" },
  { href: "#sources", label: "Sources" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2 text-sm font-semibold tracking-tight text-white">
          <span
            aria-hidden
            className="inline-block h-2.5 w-2.5 rounded-full bg-gradient-to-br from-sky-400 to-blue-600"
          />
          LightSprint
          <span className="text-slate-500">vs</span>
          <span className="text-slate-300">GitHub Copilot</span>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="https://app.lightsprint.ai"
          className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-200"
        >
          Try LightSprint
        </a>
      </div>
    </header>
  );
}
