import { writeFileSync } from "node:fs";
import { mkdir } from "node:fs/promises";

const siteUrl = process.env.SITE_URL || "https://example.com";

const routes = ["/", "/about", "/contact", "/blog", "/resources/checklist"];
const urls = routes.map((path) => new URL(path, siteUrl).toString());

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${url}</loc></url>`).join("\n")}
</urlset>
`;

await mkdir("public", { recursive: true });
writeFileSync("public/sitemap.xml", xml);
console.log(`Generated public/sitemap.xml with ${urls.length} URL(s).`);
