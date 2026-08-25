import { createFileRoute, notFound } from "@tanstack/react-router";
import { getBlogPost } from "@/content/blog/posts";
import { createSeo } from "@/lib/seo";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getBlogPost(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) =>
    createSeo({
      title: loaderData.title,
      description: loaderData.description,
      path: `/blog/${loaderData.slug}`,
    }),
  component: BlogPostPage,
});

function BlogPostPage() {
  const post = Route.useLoaderData();

  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <p className="text-sm text-neutral-500">{post.date}</p>
      <h1 className="mt-3 text-4xl font-semibold">{post.title}</h1>
      <p className="mt-5 text-lg leading-8 text-neutral-700">{post.description}</p>
    </article>
  );
}
