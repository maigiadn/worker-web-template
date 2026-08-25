import { siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-neutral-600 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <a href={`mailto:${siteConfig.email}`} className="hover:text-neutral-950">
          {siteConfig.email}
        </a>
      </div>
    </footer>
  );
}
