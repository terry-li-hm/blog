---
title: Testing the Deployment Pipeline
description: >-
  A test post to verify the end-to-end blog publishing workflow from vault to
  terryli.hm works correctly.
pubDatetime: 2025-08-28T00:00:00.000Z
tags:
  - Test
  - Infrastructure
  - Deployment
draft: false
---

This is a test post to verify the clio MCP server can successfully sync essays from the Obsidian vault to terryli.hm. If you're reading this on the website, it means the entire pipeline is working correctly.

The workflow being tested includes:
1. Creating a markdown file in the vault's Essays/Published folder
2. Using the clio MCP server to sync changes
3. Committing to the blog repository
4. Deploying to production

This test was conducted on August 28, 2025, to ensure the publishing infrastructure is operational.

If this appears on terryli.hm, we can confirm:
- The MCP server correctly identifies new essays
- The sync process successfully copies content
- Git operations execute properly
- The deployment pipeline triggers as expected

This post will be removed once testing is complete.

P.S. The simplicity of this test belies the complexity of the infrastructure it validates - multiple systems working in concert to transform thoughts into published words.
