# TanStack Cloudflare Site Template

Reusable starter for SEO websites, affiliate pages, landing pages, content hubs, and simple lead capture projects.

## Stack

- React + TypeScript
- TanStack Start + TanStack Router
- Vite
- Tailwind CSS
- Cloudflare Workers
- Cloudflare D1 optional lead database

## First Setup

```bash
npm install
npm run sitemap
npm run dev
```

For a real domain sitemap:

```bash
SITE_URL=https://your-domain.com npm run sitemap
```

PowerShell:

```powershell
$env:SITE_URL = "https://your-domain.com"
npm run sitemap
Remove-Item Env:SITE_URL
```

## Before Launch

1. Replace placeholders in `src/content/site.ts`.
2. Replace `example.com` in `public/robots.txt` and `wrangler.jsonc`.
3. Create a D1 database and put the real database ID into `wrangler.jsonc`.
4. Apply `schema.sql` to D1.
5. Run `npm run build`.
6. Deploy with `npm run deploy`.

## Main Files

- `src/routes`: pages
- `src/components/site`: layout, header, footer, lead form
- `src/content`: brand, navigation, blog data
- `src/lib/seo.ts`: SEO helper
- `src/server.ts`: Cloudflare Worker entry and `/api/leads`
- `schema.sql`: D1 schema
- `wrangler.jsonc`: Cloudflare deployment config

## Notes

`src/routeTree.gen.ts` is a placeholder. TanStack Router regenerates it during dev/build after the template is copied into a real project.
