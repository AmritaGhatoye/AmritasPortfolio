---
description: 'Use when creating or updating portfolio UI sections/components in this project, especially dark-themed sections like Achievements, Experience, Skills, and Hero. Enforces premium visual hierarchy, responsive layouts, subtle motion, and reusable React + Tailwind patterns.'
name: 'Dark Portfolio UI Guidelines'
applyTo: 'src/components/**, src/containers/**'
---

# Dark Portfolio UI Guidelines

## Visual Style

- Keep all UI consistent with the existing dark theme and spacing rhythm.
- Prefer premium but minimal composition: strong hierarchy, no overcrowding.
- Use subtle gradient accents, glass-like surfaces, and soft glow only where it improves focus.

## Section Design

- For impact sections (such as Achievements), prefer clean cards-first layouts unless an existing timeline pattern is already established nearby.
- Emphasize metrics and outcomes (`4th place`, `200+`) using clear typographic hierarchy and contrast.
- Use icons/emojis/badges sparingly to aid scanning.

## Interaction & Motion

- Add lightweight hover/focus states to interactive cards and links.
- Keep animations subtle (fade/slide/soft glow) and avoid distracting motion.
- Ensure motion does not reduce readability or accessibility.

## Responsiveness

- Design mobile-first; verify spacing, wrapping, and card stacking on small screens.
- Preserve visual rhythm and readable line lengths across breakpoints.

## Code Quality

- Reuse existing project components and utilities before introducing new abstractions.
- Keep components small, reusable, and focused.
- Avoid introducing unrelated style systems or hardcoded one-off patterns that conflict with current conventions.
