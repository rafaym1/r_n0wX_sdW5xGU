const NAV_LINKS = [
  { href: "#comparison", label: "Comparison" },
  { href: "#deep-dive", label: "Deep dive" },
  { href: "#faq", label: "FAQ" },
  { href: "#sources", label: "Sources" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2 text-sm font-semibold tracking-tight text-foreground">
          <span
            aria-hidden
            className="inline-block h-2.5 w-2.5 rounded-full"
            style={{
              background: "linear-gradient(105deg, #fb773a 7.13%, #ff5619 56.12%)",
            }}
          />
          LightSprint
          <span className="text-muted-foreground">vs</span>
          <span className="text-neutral-500">GitHub Copilot</span>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="https://app.lightsprint.ai"
          className="rounded-full px-4 py-2 text-sm font-semibold text-accent-foreground shadow-sm transition hover:opacity-90"
          style={{
            background: "linear-gradient(105deg, #fb773a 7.13%, #ff5619 56.12%)",
          }}
        >
          Try LightSprint
        </a>
      </div>
    </header>
  );
}
