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

  const postLines = sorted
    .map(post => {
      const slug = post.id.replace(/\.md$/, "");
      const url = new URL(`/posts/${slug}/`, site).href;
      return `- [${post.data.title}](${url}): ${post.data.description}`;
    })
    .join("\n");

  const content = `# ${SITE.title}

> ${SITE.desc}

Terry Li is a data scientist and AI practitioner based in Hong Kong. Former AGM & Head of Data Science at CITIC Bank International — built the bank's first ML model in production, first GenAI deployment, and was selected for the HKMA GenAI Sandbox (1 of 10 banks). Now Principal Consultant and AI Solution Lead at Capco.

This site publishes thinking-in-progress across AI in financial services, agentic systems design, responsible AI governance, and the cognitive implications of intelligence-as-infrastructure.

## Posts

${postLines}

## Contact

terryli.hm@gmail.com | LinkedIn: linkedin.com/in/terrylihm
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
