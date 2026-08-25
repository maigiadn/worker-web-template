import { siteConfig } from "@/content/site";

type SeoInput = {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  noindex?: boolean;
};

export function createSeo({
  title,
  description = siteConfig.description,
  path = "/",
  image = "/images/og-default.jpg",
  noindex = false,
}: SeoInput) {
  const url = new URL(path, siteConfig.url).toString();
  const fullTitle = `${title} | ${siteConfig.name}`;

  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: description },
      { name: "robots", content: noindex ? "noindex,nofollow" : "index,follow" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: fullTitle },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
