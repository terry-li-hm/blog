# Tailwind CSS v4 @theme Configuration

## What We've Implemented

We've expanded the `@theme` directive in `global.css` to fully leverage Tailwind CSS 4.0's CSS-first configuration. This creates a complete Chiri design system accessible through Tailwind utilities.

## New Utilities Available

### Colors
```html
<!-- Custom text colors -->
<p class="text-text-primary">Primary text</p>
<p class="text-text-secondary">Secondary text</p>
<p class="text-text-tertiary">Tertiary text</p>
<div class="bg-code-bg">Code background</div>
<mark class="bg-mark">Highlighted text</mark>
```

### Typography
```html
<!-- Font families -->
<h1 class="font-serif">Serif heading (Besley)</h1>
<p class="font-sans">Sans text (Inter)</p>
<code class="font-mono">Monospace code</code>

<!-- Custom font sizes -->
<p class="text-sm">Small text (0.8125rem)</p>
<p class="text-base">Base text (0.9375rem)</p>
<p class="text-lg">Large text (1.0625rem)</p>

<!-- Letter spacing -->
<h2 class="tracking-tight">Tight spacing (-0.08em)</h2>
<p class="tracking-normal">Normal spacing (-0.02em)</p>
```

### Spacing & Layout
```html
<!-- Using our spacing scale -->
<div class="p-4 mt-8 mb-16">Content</div>

<!-- Max widths -->
<article class="max-w-prose">35rem container</article>
```

### Transitions
```html
<!-- Custom transition speeds -->
<button class="transition-fast hover:opacity-80">Fast (150ms)</button>
<a class="transition-base hover:text-accent">Base (200ms)</a>
<div class="transition-slow">Slow (300ms)</div>
```

## Benefits of Tailwind CSS 4.0

1. **Performance**: 5x faster builds, 100x faster incremental builds
2. **CSS-first**: Design tokens defined in CSS, not JavaScript
3. **Zero config**: Automatic content detection
4. **Modern CSS**: Uses cascade layers, @property, color-mix()
5. **Type safety**: Design tokens are now part of Tailwind's utility system

## How It Works

The `@theme` directive automatically generates Tailwind utilities from our CSS variables:
- `--color-*` → Color utilities (text-, bg-, border-)
- `--font-family-*` → Font family utilities
- `--font-size-*` → Text size utilities
- `--spacing-*` → Spacing utilities (p-, m-, gap-)
- `--radius-*` → Border radius utilities
- `--transition-*` → Transition duration utilities

This means our Chiri design system is now fully integrated with Tailwind's utility engine, providing autocomplete, purging, and all other Tailwind features.