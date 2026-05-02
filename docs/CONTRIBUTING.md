# Contributing

## Adding a new component

Every component lives in its own folder under `src/components/<Name>/` and consists of exactly **five files**:

1. `<Name>.tsx` — the component. Must export the component as `default` and a `<Name>Props` interface as a named export.
2. `<Name>.module.css` — styles. **Must use CSS variables from `src/styles/tokens.css` only.** Hardcoded colors, spacings, font sizes, and border radii are not allowed.
3. `<Name>.test.tsx` — tests. **Must use the `renderWithProviders` helper from `src/test/renderWithProviders.tsx`.** Plain `render` from `@testing-library/react` is not allowed.
4. `<Name>.stories.tsx` — a gallery story. Default-exports an object of shape `{ title: string, render: () => ReactNode }`.
5. `index.ts` — barrel file. Must re-export the component as `default` and re-export the `<Name>Props` type as a named export.

## Required side-effects

When adding a component, you must also:

- Add an entry to `src/components/registry.ts` using a category from `docs/component-categories.md`.
- Add a row to the table in `docs/components.md`.
- Add a bullet to `src/components/CHANGELOG.md` under the current `Unreleased` section.

The Component Gallery (`src/App.tsx`) reads from `registry.ts` — components missing from the registry will not render in the gallery, even if every file exists.

## Why these rules exist

- **Tokens-only CSS** keeps theming and dark-mode work in a single place.
- **`renderWithProviders`** is where context providers (theme, i18n, router) get wired in. Tests that bypass it pass today and break the day a provider is added.
- **The registry** is the source of truth for the gallery, the docs, and (eventually) the public package exports. Drift between files and registry is the most common bug we see in PRs.
