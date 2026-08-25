# Agent Context: Worker Web Template

This repository is a reusable starter for fast website projects deployed on Cloudflare Workers.
Use it for SEO websites, content hubs, affiliate review sites, service landing pages, resource pages,
and simple lead capture flows.

## Core Stack

- TypeScript
- React 19
- TanStack Start
- TanStack React Router
- TanStack React Query
- Vite
- Tailwind CSS v4
- shadcn-style component structure
- Cloudflare Workers for SSR and API routes
- Cloudflare D1 for optional lead storage

## Project Shape

- `src/routes`: file-based website routes.
- `src/components/site`: project-specific layout and marketing/content components.
- `src/components/ui`: reusable UI primitives.
- `src/content`: editable content and site configuration.
- `src/lib`: shared helpers for SEO, analytics, errors, and utilities.
- `src/server.ts`: Cloudflare Worker entry point and server/API interception.
- `schema.sql`: D1 table schema for lead capture.
- `wrangler.jsonc`: Cloudflare Worker, assets, route, and D1 binding config.
- `scripts`: local utility scripts for SEO checks and sitemap generation.

## Important Files

- `src/content/site.ts`: replace brand name, domain, URL, description, email, and social links.
- `src/content/navigation.ts`: edit top-level navigation.
- `src/content/blog/posts.ts`: starter structured blog data.
- `src/lib/seo.ts`: central SEO helper for route metadata and canonical links.
- `src/components/site/LeadForm.tsx`: client lead form that posts to `/api/leads`.
- `src/server.ts`: handles `POST /api/leads`, then delegates all other requests to TanStack Start SSR.
- `public/robots.txt`: replace `example.com` before production.
- `public/sitemap.xml`: generated output from `npm run sitemap`.

## Working Rules For Agents

1. Preserve the stack unless the user explicitly asks for a different one.
2. Keep project-specific copy/data in `src/content` where practical.
3. Keep reusable rendering/UI code in `src/components`.
4. Keep SEO metadata route-local by calling `createSeo()` from each route.
5. Do not hard-code production domains in multiple places; prefer `src/content/site.ts` and script env vars.
6. Treat `src/routeTree.gen.ts` as generated. TanStack Router should regenerate it during dev/build.
7. For Cloudflare deploy work, verify `wrangler.jsonc`, D1 bindings, and domain route before claiming production readiness.
8. Do not commit secrets. Use `.dev.vars` locally and Wrangler secrets or Cloudflare dashboard for production secrets.
9. Keep edits narrow and template-friendly. Avoid adding app-specific services unless the current project needs them.

## New Project Checklist

1. Replace project name in `package.json`.
2. Replace placeholders in `src/content/site.ts`.
3. Replace `example.com` in `public/robots.txt`.
4. Replace Worker name, route pattern, database name, and database ID in `wrangler.jsonc`.
5. Run `npm install`.
6. Generate the sitemap:

```bash
npm run sitemap
```

PowerShell with a real domain:

```powershell
$env:SITE_URL = "https://your-domain.com"
npm run sitemap
Remove-Item Env:SITE_URL
```

7. Run local development:

```bash
npm run dev
```

8. Run a production build:

```bash
npm run build
```

9. If using D1, create/apply the schema before testing `/api/leads` in production:

```bash
wrangler d1 execute project-name-db --file=schema.sql --remote
```

10. Deploy:

```bash
npm run deploy
```

## Current Template Behavior

- Home page includes a starter hero, links to blog/resource pages, and a lead form.
- Blog routes read from `src/content/blog/posts.ts`.
- Checklist route reuses the lead form.
- Lead form posts JSON to `/api/leads`.
- The Worker inserts leads into D1 binding `DB` when configured.
- If D1 is missing, `/api/leads` returns `missing_db` instead of silently succeeding.

## Verification Expectations

Before reporting success, run the smallest real check that proves the claim:

- Template script check: `node scripts/seo-audit.mjs`
- Sitemap generation: `node scripts/generate-sitemap.mjs`
- Full app check after dependencies are installed: `npm run build`
- Cloudflare config/deploy check: `wrangler deploy --dry-run` or `npm run deploy` when deployment is intended

If a command cannot run because dependencies, credentials, or Cloudflare resources are missing, state that plainly and list the missing item.
