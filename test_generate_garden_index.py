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


def test_flush_left_block_tags():
    # YAML allows a block sequence flush with the key (zero extra indent).
    # Astro parses this as a list; the index generator must too, or the post
    # silently drops out of the "By topic" grouping.
    fm = _fm("title: X\ntags:\n- agents\n- design\n- vivesca")
    assert fm["tags"] == ["agents", "design", "vivesca"], fm["tags"]


def test_quoted_scalar_not_treated_as_list():
    fm = _fm('title: X\ndescription: "hello world"')
    assert fm["description"] == "hello world", fm["description"]


def test_single_quoted_scalar_is_unquoted():
    fm = _fm("title: X\ndescription: 'hello world'")
    assert fm["description"] == "hello world", repr(fm["description"])


def test_single_quoted_pubdatetime_parses_as_date():
    # A single-quoted pubDatetime must round-trip through date parsing rather
    # than retaining literal quotes and silently sorting to datetime.min.
    from datetime import datetime

    fm = _fm("title: X\npubDatetime: '2026-03-31T22:32:18.000Z'")
    ds = fm["pubDatetime"]
    dt = datetime.fromisoformat(ds.replace("Z", "+00:00"))
    assert dt.year == 2026 and dt.month == 3 and dt.day == 31, ds


def test_mismatched_quotes_left_intact():
    fm = _fm("title: X\ndescription: \"it's fine\"")
    assert fm["description"] == "it's fine", repr(fm["description"])


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
