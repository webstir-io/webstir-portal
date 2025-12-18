# CSS Playbook (Minimal Webstir CSS)

Conventions for writing CSS in Webstir templates and SSG sites. The goal is to keep styling predictable and reduce "naming entropy" (lots of one-off classes and tokens).

## Principles
- Tokens-first: use CSS custom properties instead of ad-hoc `#hex`/`px` values.
- Tiny surface area: prefer a few primitives + a few components over "utility everything".
- Deterministic cascade: use cascade layers so "where do I put this?" is obvious.
- Accessible defaults: focus rings, readable type, and sensible spacing are part of the system.

## The Contract (v0)

### Layout primitives (classes)
Use a small fixed set of primitives:
- `.ws-container` — centered max-width container
- `.ws-stack` — vertical layout with gap
- `.ws-cluster` — inline row with wrap + gap
- `.ws-grid` — responsive grid
- `.ws-sidebar` — content + sidebar layout

Tune primitives with CSS variables instead of creating more classes:

```html
<div class="ws-stack" style="--ws-gap: var(--ws-space-4)">
  ...
</div>
```

### Components (`data-ui`)
Target components by `data-ui` and use a small set of variant attributes:
- `data-ui="btn"` (and other component ids)
- `data-variant="solid|ghost|outline|soft"`
- `data-size="sm|md|lg"`
- `data-tone="neutral|accent|danger|success|warning"`

Example:

```html
<a data-ui="btn" data-variant="solid" data-tone="accent" href="/about">About</a>
```

Prefer `aria-*` and native attributes for state:
- `aria-current="page"`, `aria-expanded="true|false"`, `disabled`, etc.

### Tokens
Define and customize design values via CSS variables (custom properties).

Common token categories:
- Color: `--ws-bg`, `--ws-fg`, `--ws-muted`, `--ws-border`, `--ws-accent`
- Space: `--ws-space-1..8`
- Radius: `--ws-radius-1..3`
- Type: `--ws-font-sans`, `--ws-font-mono`

Layout sizing tokens (use tokens instead of hardcoded `px` in templates):
- `--ws-container` — default content container max width
- `--ws-shell-container` — wider “chrome” container (header + docs layout)
- `--ws-article` — prose width target (typically `ch`-based)
- `--ws-docs-sidebar`, `--ws-docs-toc` — docs shell column widths

### Scoping
Docs-only rules must be scoped under a stable attribute:
- `[data-scope="docs"] { ... }`

This keeps "docs chrome" styles from leaking into app pages.

### Search UI styling
The `search.js` helper can style its UI in one of two ways:
- Default: injects an inline `<style>` tag (works even if your template doesn’t ship search CSS).
- Preferred for SSG templates: styles live in CSS (`app/styles/features/search.css`) and JS is behavior-only.

When you run `webstir enable search`, Webstir opts you into CSS-based styling by:
- Adding `src/frontend/app/styles/features/search.css` to your app
- Adding `@import "./styles/features/search.css";` to `src/frontend/app/app.css`
- Setting `data-webstir-search-styles="css"` on the `<html>` element in `src/frontend/app/app.html`

To opt in manually, set:
```html
<html lang="en" data-webstir-search-styles="css">
```

## How To Make Changes (fast rules)

### I need a new spacing/color/etc.
Add or adjust a token, then use it everywhere. Don’t introduce raw values in page CSS unless it’s truly page-specific.

### I need a new reusable UI piece
Add a `data-ui` id and style it once in the component layer, then reuse it. Update the registry (keep the list of allowed ids short).

### I need a one-off tweak for a single page
Keep it in that page’s `index.css`. If it repeats, promote it into a primitive/component.

## Related
- Static Sites (SSG Preview) — [static-sites](./static-sites.md)
