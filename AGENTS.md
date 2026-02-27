# AIntegrator Frontend Agent Guide

## Core Principles
- Prefer Tailwind utility classes over custom component CSS whenever practical.
- Reuse existing design tokens/utilities already present in the project (colors, spacing, typography).
- Keep changes minimal and local to the feature being edited.

## Tailwind-First Styling
- Implement layout, spacing, typography, colors, and transitions in Tailwind classes first.
- Add custom CSS only when Tailwind cannot express the behavior cleanly (complex keyframes, very specific selectors, third-party overrides).
- Avoid adding one-off custom classes when equivalent Tailwind utilities exist.

## Responsive Rules
- Prefer native Tailwind breakpoints (`sm`, `md`, `lg`, `xl`, `2xl`) over custom arbitrary breakpoints.
- Only use custom breakpoint values when there is a clear product/design requirement that cannot be met with native breakpoints.
- Keep responsive behavior consistent across similar components.

## Links and CTA Behavior
- Use semantic anchors for navigation-style CTAs.
- For external links, use `target="_blank"` with `rel="noopener noreferrer"`.
- Ensure interactive elements have visible hover affordance and `cursor-pointer` when appropriate.

## Accessibility and UX
- Preserve accessible labels (`aria-label`, meaningful alt text where required).
- Keep tap targets usable on mobile and avoid regressions in keyboard/focus behavior.

## Quality Checks
- After edits, run lint diagnostics and resolve newly introduced issues.
- Do not refactor unrelated code while implementing a focused request.
