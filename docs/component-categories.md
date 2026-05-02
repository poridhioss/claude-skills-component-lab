# Component Categories

Every component registered in `src/components/registry.ts` must use one of the category strings below. Adding a new category is a separate decision and requires its own change.

| Category   | Description                                       |
|------------|---------------------------------------------------|
| `display`  | Pure presentational components (Badge, Avatar, Card) |
| `input`    | User input components (Button, TextField, Checkbox)  |
| `feedback` | Status, toast, alert, banner components              |
| `layout`   | Spacing and structural components (Stack, Grid, Divider) |

If a component does not obviously fit one of these, pick the closest match and note the choice in `src/components/CHANGELOG.md`. Do not invent a new category in the registry — TypeScript will accept a typo as a string-literal narrowing failure only at the call site, and the gallery will silently misbehave.
