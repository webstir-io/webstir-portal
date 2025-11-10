# Watch

Run an initial build and tests, start dev servers, and react to changes with targeted rebuilds and live reload.

## Purpose
- Fast feedback loop during development.
- Keep dev server and API in sync with file changes.

## When To Use
- Default local workflow while editing.

## CLI
- `webstir watch` (also the default when no command is provided)

## Steps
1. Run `build`.
2. Run `test`.
3. Start the dev web server (serves `build/frontend/**`, SSE reload, clean URLs).
4. Start the Node API server from `build/backend/index.js` and configure the proxy at `/api/*`.
5. Start watching `src/**`; ignore `build/**` and `dist/**`.
6. Route changes:
   - Frontend change → frontend pipelines → write to `build/frontend/**` → broadcast SSE reload.
   - Backend change → backend compile → restart Node process.
   - Shared change → rebuild affected frontend and backend targets.

## Readiness & Health
- The Node API server prints `API server running` on successful bind. The orchestrator waits for this readiness line and then probes `/api/health` before declaring the backend ready.

Toggles (environment variables):
- `WEBSTIR_BACKEND_WAIT_FOR_READY=skip` — skip waiting for the log‑based ready signal.
- `WEBSTIR_BACKEND_READY_TIMEOUT_SECONDS` — readiness wait timeout (default 30).
- `WEBSTIR_BACKEND_HEALTHCHECK=skip` — skip the health probe.
- `WEBSTIR_BACKEND_HEALTH_TIMEOUT_SECONDS` — per‑attempt probe timeout (default 5).
- `WEBSTIR_BACKEND_HEALTH_ATTEMPTS` — number of retries before failing (default 5).
- `WEBSTIR_BACKEND_HEALTH_DELAY_MILLISECONDS` — delay between retries (default 250).
- `WEBSTIR_BACKEND_HEALTH_PATH` — override the probe path (default `/api/health`).
- `WEBSTIR_BACKEND_TERMINATION` — Node shutdown method during watch (`ctrlc` or `kill`; default `kill`).

Examples:
- Skip both waits in a pinch:
  - `WEBSTIR_BACKEND_WAIT_FOR_READY=skip WEBSTIR_BACKEND_HEALTHCHECK=skip webstir watch`
- Increase readiness timeout and health attempts:
  - `WEBSTIR_BACKEND_READY_TIMEOUT_SECONDS=60 WEBSTIR_BACKEND_HEALTH_ATTEMPTS=10 webstir watch`

## Outputs
- Live dev server URL printed on startup.
- Incremental updates to `build/**` as files change.

## Stop & Recovery
- Stop with Ctrl+C; services shut down gracefully.
- Persistent backend errors are throttled to avoid restart loops; errors are logged.

## Errors & Exit Codes
- Startup failures return non-zero (build/test/backend bind errors). Runtime errors are logged.

## Related Docs
- Workflows — [workflows](../reference/workflows.md)
- Services — [services](../explanations/services.md)
- Servers — [servers](../explanations/servers.md)
- Engine — [engine](../explanations/engine.md)
- Workspace — [workspace](../explanations/workspace.md)
