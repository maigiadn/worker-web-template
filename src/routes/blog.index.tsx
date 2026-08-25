import { createFileRoute, Link } from "@tanstack/react-router";
import { blogPosts } from "@/content/blog/posts";
import { createSeo } from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
  head: () => createSeo({ title: "Blog", path: "/blog" }),
  component: BlogIndexPage,
});

function BlogIndexPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-4xl font-semibold">Blog</h1>
      <div className="mt-8 grid gap-4">
        {blogPosts.map((post) => (
          <article key={post.slug} className="rounded-md border border-neutral-200 p-5">
            <p className="text-sm text-neutral-500">{post.date}</p>
            <h2 className="mt-2 text-xl font-semibold">
              <Link to="/blog/$slug" params={{ slug: post.slug }}>{post.title}</Link>
            </h2>
            <p className="mt-2 text-neutral-700">{post.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
