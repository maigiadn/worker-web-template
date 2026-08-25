import { createFileRoute } from "@tanstack/react-router";
import { createSeo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => createSeo({ title: "About", path: "/about" }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-semibold">About</h1>
      <p className="mt-4 leading-7 text-neutral-700">
        Replace this page with the brand story, audience, proof, and contact path for the project.
      </p>
    </section>
  );
}
