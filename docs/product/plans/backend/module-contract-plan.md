# Module Contract Plan

### Validation & Errors
- Select validation library and patterns (zod or valibot) and error mapping strategy
- Normalize error types: domain errors, validation errors, unauthorized/forbidden, not-found; standard error response shape

### Context & Providers
- Define Context interfaces: RequestContext and SSRContext (request, reply, auth, db, env, logger)
- Define Provider interfaces: BackendProvider, TestingProvider, AuthProvider, DatabaseProvider (optionals: CacheProvider, QueueProvider)

### Auth, Config & Logging
- Define auth/session contract: getSession, createSession, invalidateSession, csrf token hooks, permission checks
- Define configuration contract: env access and secret retrieval interface
- Define logging contract: logger interface with requestId/correlation support

### Manifest & Capabilities
- Define ModuleManifest shape: name, version, routes?, views?, jobs?, events?, services?, init?, dispose?
- Establish contract versioning and compatibility policy (semantic fields and feature flags)

### Routes & Views
- Specify RouteSpec: method, path, input schema, output schema, handler(ctx) signature
- Specify ViewSpec (optional): path, params schema, load(ctx) signature
- Integrate ts-rest contracts for routes and typed client generation hooks

### Discovery & Helpers
- Design module discovery: package.json fields ("webstir.module"), workspace scopes, and validation
- Create helper creators: createModule(), defineRoute(), defineView() with strong TS inference

### Types, Examples & Tests
- Provide TypeScript types and zod schemas in packages/module-contract
- Author minimal example module (accounts) using only the contract APIs
- Document conventions: route naming, status codes, pagination/filtering patterns, error codes
- Add contract unit tests and compile-time checks for example usage
