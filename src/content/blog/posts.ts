export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "starter-content-workflow",
    title: "Starter Content Workflow",
    description: "A simple repeatable workflow for planning and publishing useful website content.",
    date: "2026-08-25",
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
