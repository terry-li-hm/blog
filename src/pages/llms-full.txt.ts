import { getCollection } from "astro:content";
import { SITE } from "@/config";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ site }) => {
  const posts = await getCollection("blog", ({ data }) => !data.draft);

  const sorted = posts.sort(
    (a, b) =>
      new Date(b.data.pubDatetime).getTime() -
      new Date(a.data.pubDatetime).getTime()
  );

  const postSections = sorted
    .map(post => {
      const slug = post.id.replace(/\.md$/, "");
      const url = new URL(`/posts/${slug}/`, site).href;
      const tags = post.data.tags?.join(", ") ?? "";
      return `# ${post.data.title}

URL: ${url}
Published: ${post.data.pubDatetime}${post.data.modDatetime ? `\nUpdated: ${post.data.modDatetime}` : ""}${tags ? `\nTags: ${tags}` : ""}

${post.data.description}

${post.body}`;
    })
    .join("\n\n---\n\n");

  const content = `# ${SITE.title} — Full Content

> ${SITE.desc}

Terry Li is a data scientist and AI practitioner based in Hong Kong. Former AGM & Head of Data Science at CITIC Bank International — built the bank's first ML model in production, first GenAI deployment, and was selected for the HKMA GenAI Sandbox (1 of 10 banks). Now Principal Consultant and AI Solution Lead at Capco.

For a post index only, see /llms.txt

---

${postSections}
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
