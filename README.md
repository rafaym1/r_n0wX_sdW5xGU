# LightSprint vs. GitHub Copilot

A live, interactive comparison page between [LightSprint](https://app.lightsprint.ai)
and GitHub Copilot — a feature-by-feature table, deep dives on the biggest
differences, and an FAQ, all driven by a single data source in
[`src/lib/data.ts`](./src/lib/data.ts).

This page is itself the product of a LightSprint task: built end to end in a
sandboxed agent run and shipped as a real pull request, not a static mockup.

## Development

```bash
bun install
bun run dev
```

## Checks

```bash
bun run check   # TypeScript + ESLint
bun run build   # production build
```
