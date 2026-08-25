import { createFileRoute } from "@tanstack/react-router";
import { siteConfig } from "@/content/site";
import { createSeo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => createSeo({ title: "Contact", path: "/contact" }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-semibold">Contact</h1>
      <p className="mt-4 leading-7 text-neutral-700">
        Email <a className="font-medium text-neutral-950" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>
    </section>
  );
}
