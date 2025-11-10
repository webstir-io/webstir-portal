# Add a Backend Route

This guide shows how to add a backend route to your module manifest and optionally scaffold a Fastify handler.

## Prerequisites
- A Webstir workspace initialized via `webstir init ...`.
- Backend source at `src/backend/`.

## Steps
- Add a route with defaults:
  - `webstir add-route users`
  - Writes `GET /api/users` to `webstir.module.routes` in `package.json`.
- Specify method and path explicitly:
  - `webstir add-route users --method POST --path /api/users`
- Scaffold a Fastify handler (optional):
  - `webstir add-route accounts --fastify`
  - Creates `src/backend/server/routes/accounts.ts`.
  - If `src/backend/server/fastify.ts` exists, imports and registers `registerAccounts(app)` automatically.

## Notes
- The CLI prevents duplicate entries for the same method+path.
- The backend provider also validates the manifest and emits diagnostics on duplicates.
- Route handler scaffolding is optional and intended as a starting point; adapt it to your server style.

## See Also
- CLI reference: `../reference/cli.md#add-route`
- Backend provider: `../explanations/solution.md` (manifest ingestion)
