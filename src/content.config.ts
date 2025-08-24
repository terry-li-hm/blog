import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

export const BLOG_PATH = "./src/content/blog";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: BLOG_PATH, pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Transform string to Date object
      pubDatetime: z.coerce.date(),
      modDatetime: z.coerce.date().optional(),
      draft: z.boolean().optional().default(false),
      tags: z.array(z.string()).optional(),
      timezone: z.string().optional(),
      heroImage: image().optional(),
      author: z.string().optional(),
      canonicalURL: z.string().optional(),
      ogImage: z.string().optional(),
      featured: z.boolean().optional().default(false),
      hideEditPost: z.boolean().optional().default(false),
    }),
});

export const collections = { blog };
