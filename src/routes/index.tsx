import { createFileRoute, Link } from "@tanstack/react-router";
import { LeadForm } from "@/components/site/LeadForm";
import { createSeo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    createSeo({
      title: "Home",
      description: "A reusable website starter for content, landing pages, and lead capture.",
      path: "/",
    }),
  component: HomePage,
});

function HomePage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-normal md:text-6xl">
          A practical website starter for fast launches.
        </h1>
        <p className="mt-5 text-lg leading-8 text-neutral-700">
          Use this template for SEO pages, content hubs, affiliate reviews, service pages,
          and simple lead capture workflows on Cloudflare Workers.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/resources/checklist" className="rounded-md bg-neutral-950 px-5 py-3 text-sm font-medium text-white">
            Get checklist
          </Link>
          <Link to="/blog" className="rounded-md border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-950">
            Read blog
          </Link>
        </div>
        <LeadForm />
      </div>
    </section>
  );
}
