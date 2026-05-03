# claude-subagents-lab starter

Tiny project used by Lab X2 to demonstrate Claude Code subagents.

## Layout

- `src/auth.js`, a small in-memory auth module with registration, login, password verification, and token issuance. Has deliberate gaps: weak hashing (`sha1`), non-constant-time password comparison, no input length validation, no tests.
- `src/inventory.js`, a small in-memory inventory module. Used as a secondary surface for subagents to explore.
- `tests/`, empty. The `test-writer` subagent will populate this in the lab.
- `package.json`, no production dependencies. Tests run with Node's built-in `node:test` runner.

## Running tests

```bash
npm test
```

Tests live under `tests/`. Until the `test-writer` subagent runs, this will report "no tests found".
