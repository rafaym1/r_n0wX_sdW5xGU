# LightSprint vs. GitHub Copilot

**🔗 View the live page:** https://3000-iei9qt0bvjfshdqi4xh67.lightsprint.ai/

A live, interactive comparison page between [LightSprint](https://lightsprint.ai)
and GitHub Copilot — a feature-by-feature table, deep dives on the biggest
differences, and an FAQ, all driven by a single data source in
[`src/lib/data.ts`](./src/lib/data.ts).

This page is itself the product of a LightSprint task: built end to end in a
sandboxed agent run and shipped as a real pull request, not a static mockup.

> The live link above is this task's own preview and stays up for as long as
> the task/PR does. Once merged, it's replaced by the stack's regular preview
> for the `main` branch.

## For contributors

```bash
bun install
bun run dev
```

```bash
bun run check   # TypeScript + ESLint
bun run build   # production build
```
