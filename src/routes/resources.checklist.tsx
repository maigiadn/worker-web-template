import { createFileRoute } from "@tanstack/react-router";
import { LeadForm } from "@/components/site/LeadForm";
import { createSeo } from "@/lib/seo";

export const Route = createFileRoute("/resources/checklist")({
  head: () => createSeo({ title: "Checklist", path: "/resources/checklist" }),
  component: ChecklistPage,
});

function ChecklistPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-semibold">Launch checklist</h1>
      <p className="mt-4 leading-7 text-neutral-700">
        Capture leads with a simple form, then replace this page with the actual downloadable resource.
      </p>
      <LeadForm />
    </section>
  );
}
