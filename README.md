# Component Gallery — Skills Lab Starter

A small Vite + React + TypeScript project used as the starter for the Claude Code Skills lab.

## Run

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`). You should see a Component Gallery with one component: `Badge`.

## Structure

- `src/components/` — one folder per component, plus `registry.ts` and `CHANGELOG.md`.
- `src/styles/tokens.css` — all design tokens. Components must use these and never hardcode values.
- `src/test/renderWithProviders.tsx` — the test helper components must use.
- `docs/CONTRIBUTING.md` — the full conventions for adding a component.
- `docs/component-categories.md` — the closed list of allowed categories.
- `docs/components.md` — the components table that must be kept in sync.

Read `docs/CONTRIBUTING.md` before adding any component.
