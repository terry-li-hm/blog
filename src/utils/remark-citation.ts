/**
 * remark-citation
 *
 * Transforms Markdown links with a title attribute into citation links
 * that Tippy.js will pick up as tooltips on desktop.
 *
 * Markdown syntax:
 *   [Link text](https://url.com "Institution § Summary of the paper.")
 *
 * Convention: use " § " to separate institution from summary in the title.
 * If no § is present, the whole title is used as the summary.
 *
 * Output HTML:
 *   <a href="..." class="citation-link"
 *      data-institution="Institution"
 *      data-summary="Summary"
 *      data-footnote-index="1"
 *      target="_blank" rel="noopener noreferrer">Link text</a>
 */

import { visit } from "unist-util-visit";
import type { Root, Link } from "mdast";

const remarkCitation = () => {
  return (tree: Root) => {
    let index = 0;

    visit(tree, "link", (node: Link) => {
      if (!node.title) return;

      index++;
      const [institution, ...rest] = node.title.split(" § ");
      const summary = rest.length > 0 ? rest.join(" § ") : institution;
      const institutionName = rest.length > 0 ? institution : "";

      // Inject data attributes via hProperties (used by rehype)
      node.data = node.data ?? {};
      node.data.hProperties = {
        ...(node.data.hProperties as Record<string, string> ?? {}),
        class: "citation-link",
        "data-institution": institutionName,
        "data-summary": summary,
        "data-footnote-index": String(index),
        target: "_blank",
        rel: "noopener noreferrer",
      };
    });
  };
};

export default remarkCitation;
