#!/usr/bin/env python3
"""Focused tests for generate-garden-index.py frontmatter parsing.

Run: python3 test_generate_garden_index.py
"""

import importlib.util
from pathlib import Path

spec = importlib.util.spec_from_file_location(
    "garden_index", Path(__file__).parent / "generate-garden-index.py"
)
gi = importlib.util.module_from_spec(spec)
spec.loader.exec_module(gi)


def _fm(body: str) -> dict:
    return gi.parse_frontmatter(f"---\n{body}\n---\n")


def test_inline_tags():
    fm = _fm("title: X\ntags: [ai, engineering, automation]")
    assert fm["tags"] == ["ai", "engineering", "automation"], fm["tags"]


def test_inline_tags_empty():
    fm = _fm("title: X\ntags: []")
    assert fm["tags"] == [], fm["tags"]


def test_block_tags():
    fm = _fm("title: X\ntags:\n  - governance\n  - banking")
    assert fm["tags"] == ["governance", "banking"], fm["tags"]


def test_quoted_scalar_not_treated_as_list():
    fm = _fm('title: X\ndescription: "hello world"')
    assert fm["description"] == "hello world", fm["description"]


def test_group_by_tag_picks_up_inline_tags():
    fm = _fm("title: X\ntags: [a, b]")
    tags = fm.get("tags", []) if isinstance(fm.get("tags"), list) else []
    groups = gi.group_by_tag([{"tags": tags}])
    assert set(groups) == {"a", "b"}, groups


if __name__ == "__main__":
    tests = [v for k, v in sorted(globals().items()) if k.startswith("test_")]
    for t in tests:
        t()
        print(f"ok  {t.__name__}")
    print(f"\n{len(tests)} passed")
