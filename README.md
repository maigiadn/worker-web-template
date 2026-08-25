# Worker Web Template

Fast starter for SEO sites, content hubs, affiliate pages, landing pages, and simple lead capture flows on Cloudflare Workers.

## Use It In 5 Minutes

```bash
git clone https://github.com/maigiadn/worker-web-template.git my-site
cd my-site
npm install
npm run sitemap
npm run dev
```

If you are on PowerShell and want a real sitemap URL:

```powershell
$env:SITE_URL = "https://your-domain.com"
npm run sitemap
Remove-Item Env:SITE_URL
```

## Replace These First

1. `src/content/site.ts`
2. `public/robots.txt`
3. `wrangler.jsonc`
4. `schema.sql` if you need more lead fields

## What This Template Gives You

- React + TypeScript
- TanStack Start + TanStack Router
- Vite + Tailwind
- Cloudflare Workers SSR
- Optional Cloudflare D1 lead capture
- Starter routes for home, about, contact, blog, and checklist

## Main Files

- `AGENT_CONTEXT.md`: context for agents using this template
- `src/content`: brand, navigation, and blog data
- `src/components/site`: header, footer, layout, lead form
- `src/routes`: starter pages
- `src/server.ts`: Worker entry and `/api/leads`
- `schema.sql`: D1 schema
- `wrangler.jsonc`: deploy config

## Before Deploy

```bash
npm run build
```

Then apply the D1 schema if needed and deploy:

```bash
wrangler d1 execute project-name-db --file=schema.sql --remote
npm run deploy
```
