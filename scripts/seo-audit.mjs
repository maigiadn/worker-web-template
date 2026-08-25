import { readFileSync } from "node:fs";

const siteSource = readFileSync("src/content/site.ts", "utf8");
const postsSource = readFileSync("src/content/blog/posts.ts", "utf8");

const hasPlaceholders = siteSource.includes("Project Name") || siteSource.includes("example.com");

if (hasPlaceholders) {
  console.warn("SEO audit warning: replace placeholder values in src/content/site.ts before deploy.");
}

for (const field of ["slug", "title", "description", "date"]) {
  if (!postsSource.includes(`${field}:`)) {
    throw new Error(`SEO audit failed: src/content/blog/posts.ts is missing ${field} fields.`);
  }
}

console.log("SEO audit checked site placeholders and blog post fields.");
