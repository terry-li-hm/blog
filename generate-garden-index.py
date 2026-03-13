#!/usr/bin/env python3
"""
Generate ~/notes/terryli.hm.md — a navigable vault index of all garden posts.
Wikilinks to ~/notes/Writing/Blog/Published/*.md so they're clickable in Obsidian.
Run standalone or called from sync-from-vault.sh.
"""

import os
import re
from datetime import datetime
from pathlib import Path

PUBLISHED_DIR = Path.home() / "notes/Writing/Blog/Published"
OUTPUT_NOTE = Path.home() / "notes/terryli.hm.md"
BASE_URL = "https://terryli.hm/posts"


def parse_frontmatter(content: str) -> dict:
    match = re.match(r"^---\n(.*?)\n---", content, re.DOTALL)
    if not match:
        return {}
    fm = {}
    for line in match.group(1).splitlines():
        if ": " in line and not line.startswith(" "):
            key, _, val = line.partition(": ")
            fm[key.strip()] = val.strip().strip('"')
        elif line.startswith("  - ") and "tags" in fm and isinstance(fm.get("tags"), list):
            fm["tags"].append(line.strip().lstrip("- "))
        elif line.strip() == "tags:":
            fm["tags"] = []
    return fm


def collect_posts() -> list[dict]:
    posts = []
    for path in sorted(PUBLISHED_DIR.glob("*.md")):
        content = path.read_text()
        fm = parse_frontmatter(content)
        if fm.get("draft") == "true":
            continue
        slug = path.stem
        title = fm.get("title", slug)
        date_str = fm.get("pubDatetime", "")
        try:
            dt = datetime.fromisoformat(date_str.replace("Z", "+00:00"))
            date = dt.replace(tzinfo=None) if dt.tzinfo else dt
        except Exception:
            date = datetime.min
        tags = fm.get("tags", []) if isinstance(fm.get("tags"), list) else []
        posts.append({
            "slug": slug,
            "title": title,
            "date": date,
            "tags": tags,
            "url": f"{BASE_URL}/{slug}/",
        })
    return sorted(posts, key=lambda p: p["date"], reverse=True)


def group_by_tag(posts: list[dict]) -> dict[str, list[dict]]:
    groups: dict[str, list[dict]] = {}
    for post in posts:
        for tag in post["tags"]:
            groups.setdefault(tag, []).append(post)
    return dict(sorted(groups.items()))


def render(posts: list[dict]) -> str:
    now = datetime.now().strftime("%Y-%m-%d %H:%M")
    lines = [
        "---",
        "title: terryli.hm garden index",
        f"updated: {now}",
        "---",
        "",
        "# terryli.hm",
        "",
        f"Personal garden at [terryli.hm](https://terryli.hm). {len(posts)} posts.",
        f"*Auto-generated {now} — do not edit manually.*",
        "",
        "## All posts (recent first)",
        "",
    ]

    for post in posts:
        date_fmt = post["date"].strftime("%Y-%m-%d") if post["date"] != datetime.min else "—"
        tag_str = ", ".join(f"`{t}`" for t in post["tags"][:3]) if post["tags"] else ""
        wikilink = f"[[Writing/Blog/Published/{post['slug']}|{post['title']}]]"
        lines.append(f"- {date_fmt} — {wikilink}  {tag_str}")

    lines += ["", "## By topic", ""]
    groups = group_by_tag(posts)
    for tag, tag_posts in groups.items():
        lines.append(f"### {tag}")
        for post in sorted(tag_posts, key=lambda p: p["date"], reverse=True):
            wikilink = f"[[Writing/Blog/Published/{post['slug']}|{post['title']}]]"
            lines.append(f"- {wikilink}")
        lines.append("")

    return "\n".join(lines)


if __name__ == "__main__":
    posts = collect_posts()
    content = render(posts)
    OUTPUT_NOTE.write_text(content)
    print(f"Generated {OUTPUT_NOTE} — {len(posts)} posts indexed")
