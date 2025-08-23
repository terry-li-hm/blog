# Blog Writing Style Guide

## Context
- Current year: 2025
- When searching for latest trends, designs, or information, use 2025 as the reference year

## Core Philosophy
This blog bridges technical and philosophical thinking. Articles should feel like conversations with a thoughtful colleague, not documentation or tutorials.

## Privacy and Security Principles

**Never reveal internal information:**
- No real names of colleagues or supervisors
- No specific project names or codenames
- No exact financial figures or metrics
- No organizational hierarchies or reporting structures

**Keep examples powerful but generic:**
- Use role descriptions, not titles (e.g., "technical audience" not "my manager")
- Use ranges, not specifics (e.g., "multi-million" not "$3.2M")
- Use categories, not counts (e.g., "thousands of notes" not "1,847")
- Focus on patterns, not identifying details

**Protect workplace dynamics:**
- No mentions of specific companies or clients
- No revealing team structures or relationships
- No details that could identify workplace or location
- Keep cultural references universal, not organization-specific

**Maintain authenticity without exposure:**
- Real insights, generic framing
- True patterns, sanitized examples
- Genuine experiences, protected identities

## Writing Style

### Prose Structure
**Default to pure narrative prose.** Every idea should flow into the next through logical or poetic connection. Think of articles as continuous thought streams, not outlined presentations.

**Lists are rare exceptions**, used only when:
- The list structure itself makes an argument (e.g., showing parallel compilation targets)
- Breaking prose would create genuine clarity, not just convenience
- The visual rhythm serves a specific rhetorical purpose

**Before any list, ask:** Could this be woven into the narrative? Usually, yes. The constraint of prose forces deeper thinking about connections between ideas. A paragraph explaining why three things matter often teaches more than three bullet points listing what they are.

**The test:** If you can read the article aloud and it sounds like natural speech, you've succeeded. Lists break that flow - use them like you'd use silence in conversation: rarely, but powerfully.

### Voice & Tone
Write like you're explaining something fascinating to a smart friend over coffee. The precision of technical writing but the warmth of conversation. When technical depth is needed, anchor it with accessible metaphors. Personal experiences should illuminate principles, not dominate the narrative. Contrarian positions are valuable when they're earned through reasoning, not just for effect.

### Article Structure
Open with cognitive dissonance - something that makes readers pause and reconsider. Develop ideas through narrative flow rather than sectioned arguments. Evidence should emerge naturally: a personal experience leading to a technical insight, which reveals a philosophical principle. Conclusions synthesize rather than summarize - they ask "where does this lead?" not "what did I just say?"

### Technical Details
Code blocks should capture actual dialogue or interaction, not demonstrate programming. Include code only when it advances the narrative, never for its own sake. Technical terms gain meaning through context and usage rather than explicit definitions.

### Signature Elements
The blog has evolved certain recurring patterns. "Ultrathink" captures thoughts that continue beyond message boundaries. Meta-commentary on the writing process itself creates additional layers of meaning. P.S. sections subvert or extend arguments, preventing neat closure. Chinese philosophical frameworks appear where they add genuine depth, not exotic decoration.

## Content Themes
The recurring exploration is technology as cognitive partner rather than replacement. Claude Code as cognitive compiler, not coding tool. Workflows that emerge from constraints rather than features. The hidden capabilities in familiar tools that only appear through creative misuse.

## Quality Checks
Before publishing, ask:
1. Read it aloud - does it flow like natural speech or feel choppy?
2. For any list - could this be a paragraph instead? (Usually yes)
3. Do ideas connect through logic or just proximity?
4. Is there a moment where the reader's perspective shifts?
5. Does it sound like thinking-in-progress, not conclusions?

## Technical Setup
- Platform: Astro with Chiri design
- Deployment: Vercel via GitHub
- Content: Markdown in `/src/content/blog/`
- Images: Rarely used, text-focused

## Commands
```bash
# Local development
pnpm run dev

# Build and test
pnpm run build

# Deploy (auto-deploys on push to main)
git push origin main
```

## Note
This is a living document. The style evolves through writing, not rules.