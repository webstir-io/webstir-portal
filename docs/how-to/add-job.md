# Add a Backend Job

Scaffold a job stub and record it in the module manifest.

## Prerequisites
- A Webstir workspace initialized via `webstir init ...`.
- Backend source at `src/backend/`.

## Steps
- Create a job named `cleanup`:
  - `webstir add-job cleanup`
  - Creates `src/backend/jobs/cleanup/index.ts` with a `run()` function.
  - Adds `{ name: "cleanup" }` to `webstir.module.jobs` in `package.json`.
- Optionally include a schedule:
  - `webstir add-job nightly --schedule "0 0 * * *"`
  - Stores the schedule as-is under the job entry.

## Notes
- The schedule string is not parsed by the CLI; it’s a free-form value your scheduler can interpret.
- Jobs are directly executable during development: `node build/backend/jobs/<name>/index.js`.

## See Also
- CLI reference: `../reference/cli.md#add-job`
- Backend provider: `../explanations/solution.md` (manifest ingestion)
