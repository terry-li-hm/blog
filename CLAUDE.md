# Blog Writing Style Guide

## Core Philosophy
This blog bridges technical and philosophical thinking. Articles should feel like conversations with a thoughtful colleague, not documentation or tutorials.

## Writing Style

### Prose Structure
- **Primary mode**: Continuous intellectual prose that develops ideas narratively
- **Strategic lists**: Use bullets/numbers only when they serve the rhythm or argument
  - Process breakdowns (e.g., "The Oracle Pattern")
  - Concrete examples that benefit from parallel structure
  - Punchline delivery that needs emphasis
- **Never use lists for**:
  - Lazy organization of unrelated points
  - Content that could flow as natural paragraphs
  - Padding or making articles look longer

### Voice & Tone
- Conversational but precise - like explaining to a smart friend
- Mix technical depth with accessible metaphors
- Personal experiences as evidence, not autobiography
- Contrarian positions welcomed when supported

### Article Structure
- **Opening**: Hook with unexpected angle or cognitive dissonance
- **Development**: Build argument through narrative, not sections
- **Evidence**: Blend personal experience, technical details, philosophical frameworks
- **Conclusion**: Synthesis, not summary - where does this lead?

### Technical Details
- Code blocks for actual dialogue/interaction examples
- Avoid code for code's sake - only when it advances the narrative
- Technical terms explained through context, not definitions

### Signature Elements
- "ultrathink" - thoughts that continue beyond message boundaries
- Meta-commentary on the writing process itself
- P.S. sections that subvert or extend the main argument
- Chinese philosophical frameworks where they add depth

## Content Themes
- Claude Code as cognitive compiler, not coding tool
- Technology as thought partner, not replacement
- Workflows that emerge from constraints
- Hidden capabilities in familiar tools

## Quality Checks
Before publishing, ask:
1. Could this be written as bullet points? If yes, rewrite as prose
2. Do lists (if any) create rhythm or just organize?
3. Is there a surprising insight that changes perspective?
4. Does it sound like me thinking out loud, not presenting?

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