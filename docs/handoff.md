# Project Handoff

## Stack

- React + TypeScript
- TanStack Start + TanStack Router
- Vite
- Tailwind CSS
- Cloudflare Workers
- Cloudflare D1 for lead capture

## Replace Before Deploy

- `package.json`: project name
- `src/content/site.ts`: brand, domain, URL, description, email
- `public/robots.txt`: sitemap domain
- `wrangler.jsonc`: Worker name, route pattern, D1 database name and ID
- `schema.sql`: extend lead fields if needed

## Verify

```bash
npm install
npm run sitemap
npm run build
wrangler d1 execute project-name-db --file=schema.sql --remote
npm run deploy
```
