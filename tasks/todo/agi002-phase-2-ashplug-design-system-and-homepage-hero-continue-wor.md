---
id: agi002-phase-2-ashplug-design-system-and-homepage-hero-continue-wor
title: >-
  # PHASE 2 — Ashplug Design System and Homepage Hero


  Continue working in the existing Ashplug repository:


  `~/projects/ashplug/`


  Use the architecture and findings established in Phase 1.


  Your task is to implement the visual foundation and the complete homepage
  hero.


  Do not build the remaining homepage sections or secondary pages yet.


  ## 1. Brand typography


  Use the original assets from:


  `~/projects/ashplug/branding`


  Typography is mandatory:


  - Space Grotesk for the Ashplug wordmark.

  - JetBrains Mono as the default font for the entire website.


  JetBrains Mono must be used for:


  - Body text.

  - Navigation.

  - Headings.

  - Buttons.

  - Labels.

  - Terminal content.

  - Code blocks.


  Use appropriate font weights and avoid loading unnecessary font variants.


  Load font files locally.


  Use the supplied logo assets where appropriate.


  Do not create substitute logos or replace the supplied branding.


  ## 2. Visual identity


  Create a terminal-focused developer-tool aesthetic.


  The design should feel:


  - Minimal.

  - Refined.

  - Technical.

  - Modern.

  - Confident.

  - Open-source oriented.


  Use a carefully balanced palette inspired by:


  - Terminal charcoal.

  - Deep black.

  - Muted green.

  - Ubuntu-inspired orange.

  - Neutral gray.

  - Restrained blue accents.


  Avoid excessive gradients, glows, generic AI illustrations, and unnecessary
  decorative effects.


  ## 3. Design system


  Establish reusable design tokens for:


  - Backgrounds.

  - Text.

  - Borders.

  - Accent colors.

  - Typography.

  - Spacing.

  - Radius.

  - Shadows.

  - Transitions.

  - Responsive breakpoints.


  Use CSS variables or an appropriate Tailwind theme configuration.


  Create both dark and light theme palettes.


  Dark is the default.


  The light theme must be carefully designed, not simply inverted.


  ## 4. Navigation


  Build the complete responsive navigation:


  - Ashplug wordmark.

  - Features.

  - Installation.

  - Documentation.

  - GitHub.

  - Theme switcher.


  Keep the navigation understated.


  Use the actual discovered GitHub repository URL.


  Implement an accessible mobile menu.


  ## 5. Homepage hero


  Build a centered hero.


  Its content order must be:


  1. Ashplug wordmark.

  2. Tagline.

  3. Short product description.

  4. One-line installation command.

  5. Copy-to-clipboard interaction.


  Tagline:


  **Your AI-powered shell companion.**


  Write the product description based on the verified implementation.


  Avoid generic marketing language.


  ## 6. Installation command


  Display the verified one-line installation command directly in the hero.


  Requirements:


  - One line.

  - Prominent placement.

  - Easy to read.

  - Copy button.

  - Clipboard functionality.

  - Immediate success feedback.

  - Accessible interaction.


  The command must be discovered from the actual repository and verified.


  Do not invent or modify the installation procedure.


  Do not add multiple installation alternatives.


  Do not put prerequisites or lengthy explanations inside the hero.


  The desired experience is:


  **Copy. Run. Get started.**


  ## 7. Theme switcher


  Implement functional dark/light themes.


  Requirements:


  - Dark by default.

  - Respect system preference when no preference is saved.

  - Persist visitor preference using localStorage.

  - Prevent incorrect-theme flashes.

  - Work across all generated pages.

  - Support keyboard interaction.


  ## 8. Responsive design


  Implement desktop, tablet, and mobile layouts.


  Pay special attention to:


  - Centered typography.

  - Hero spacing.

  - Command display.

  - Navigation.

  - Mobile copy button.


  ## 9. Visual quality


  Do not settle for a generic template.


  Pay particular attention to:


  - Typography.

  - Vertical rhythm.

  - Alignment.

  - Proportions.

  - Contrast.

  - Whitespace.

  - Subtle borders.

  - Small interaction details.


  The hero should feel like a carefully designed developer product.


  ## 10. Completion checkpoint


  Build and verify the hero.


  Test:


  - Both themes.

  - Navigation.

  - Copy command.

  - Mobile responsiveness.

  - Font loading.

  - Generated static HTML.


  Do not build the terminal demonstration or additional homepage sections yet.


  Stop after completing Phase 2.


  Provide a screenshot or preview instructions if available.


  Wait for approval before proceeding to Phase 3.


  Do not automatically start the next phase.
status: todo
priority: medium
created: '2026-11-16T12:14:14.694Z'
updated: '2026-11-16T12:14:14.694Z'
branch: ''
commit: ''
pr: ''
---
# # PHASE 2 — Ashplug Design System and Homepage Hero

Continue working in the existing Ashplug repository:

`~/projects/ashplug/`

Use the architecture and findings established in Phase 1.

Your task is to implement the visual foundation and the complete homepage hero.

Do not build the remaining homepage sections or secondary pages yet.

## 1. Brand typography

Use the original assets from:

`~/projects/ashplug/branding`

Typography is mandatory:

- Space Grotesk for the Ashplug wordmark.
- JetBrains Mono as the default font for the entire website.

JetBrains Mono must be used for:

- Body text.
- Navigation.
- Headings.
- Buttons.
- Labels.
- Terminal content.
- Code blocks.

Use appropriate font weights and avoid loading unnecessary font variants.

Load font files locally.

Use the supplied logo assets where appropriate.

Do not create substitute logos or replace the supplied branding.

## 2. Visual identity

Create a terminal-focused developer-tool aesthetic.

The design should feel:

- Minimal.
- Refined.
- Technical.
- Modern.
- Confident.
- Open-source oriented.

Use a carefully balanced palette inspired by:

- Terminal charcoal.
- Deep black.
- Muted green.
- Ubuntu-inspired orange.
- Neutral gray.
- Restrained blue accents.

Avoid excessive gradients, glows, generic AI illustrations, and unnecessary decorative effects.

## 3. Design system

Establish reusable design tokens for:

- Backgrounds.
- Text.
- Borders.
- Accent colors.
- Typography.
- Spacing.
- Radius.
- Shadows.
- Transitions.
- Responsive breakpoints.

Use CSS variables or an appropriate Tailwind theme configuration.

Create both dark and light theme palettes.

Dark is the default.

The light theme must be carefully designed, not simply inverted.

## 4. Navigation

Build the complete responsive navigation:

- Ashplug wordmark.
- Features.
- Installation.
- Documentation.
- GitHub.
- Theme switcher.

Keep the navigation understated.

Use the actual discovered GitHub repository URL.

Implement an accessible mobile menu.

## 5. Homepage hero

Build a centered hero.

Its content order must be:

1. Ashplug wordmark.
2. Tagline.
3. Short product description.
4. One-line installation command.
5. Copy-to-clipboard interaction.

Tagline:

**Your AI-powered shell companion.**

Write the product description based on the verified implementation.

Avoid generic marketing language.

## 6. Installation command

Display the verified one-line installation command directly in the hero.

Requirements:

- One line.
- Prominent placement.
- Easy to read.
- Copy button.
- Clipboard functionality.
- Immediate success feedback.
- Accessible interaction.

The command must be discovered from the actual repository and verified.

Do not invent or modify the installation procedure.

Do not add multiple installation alternatives.

Do not put prerequisites or lengthy explanations inside the hero.

The desired experience is:

**Copy. Run. Get started.**

## 7. Theme switcher

Implement functional dark/light themes.

Requirements:

- Dark by default.
- Respect system preference when no preference is saved.
- Persist visitor preference using localStorage.
- Prevent incorrect-theme flashes.
- Work across all generated pages.
- Support keyboard interaction.

## 8. Responsive design

Implement desktop, tablet, and mobile layouts.

Pay special attention to:

- Centered typography.
- Hero spacing.
- Command display.
- Navigation.
- Mobile copy button.

## 9. Visual quality

Do not settle for a generic template.

Pay particular attention to:

- Typography.
- Vertical rhythm.
- Alignment.
- Proportions.
- Contrast.
- Whitespace.
- Subtle borders.
- Small interaction details.

The hero should feel like a carefully designed developer product.

## 10. Completion checkpoint

Build and verify the hero.

Test:

- Both themes.
- Navigation.
- Copy command.
- Mobile responsiveness.
- Font loading.
- Generated static HTML.

Do not build the terminal demonstration or additional homepage sections yet.

Stop after completing Phase 2.

Provide a screenshot or preview instructions if available.

Wait for approval before proceeding to Phase 3.

Do not automatically start the next phase.

## Objective

Describe the expected outcome.

## Requirements

- [ ] Add requirements here.

## Acceptance criteria

- [ ] Define when this task is complete.

## Testing

- [ ] Unit tests pass.
- [ ] Integration tests pass.

## Execution notes

## Review notes
