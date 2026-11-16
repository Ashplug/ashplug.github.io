---
id: agi001-phase-1-ashplug-website-repository-investigation-and-archite
title: >-
  # PHASE 1 — Ashplug Website: Repository Investigation and Architecture


  You are the senior frontend architect responsible for building the official
  Ashplug website.


  The existing project is located at:


  `~/projects/ashplug/`


  The branding assets are located at:


  `~/projects/ashplug/branding`


  The website will be hosted on GitHub Pages at:


  `https://ashplug.com`


  Your task in this phase is to thoroughly investigate the existing repository
  and establish the technical foundation for the website.


  **Do not implement the homepage or start building the visual design in this
  phase.**


  ## 1. Investigate the existing project


  Inspect the entire project and understand:


  - Project architecture.

  - Source code.

  - README files.

  - Installation scripts.

  - Existing documentation.

  - Package manifests.

  - Configuration files.

  - Tests.

  - Supported operating systems.

  - Supported shells.

  - AI integrations.

  - Actual product commands and workflows.

  - Existing GitHub configuration.

  - Git remotes.

  - Existing deployment configuration.


  Determine how Ashplug actually works.


  Identify the simplest and most representative real-world workflow that could
  later be demonstrated in an animated terminal.


  Never invent functionality or technical claims.


  ## 2. Inspect branding assets


  Thoroughly inspect:


  `~/projects/ashplug/branding`


  Identify:


  - Wordmark logos.

  - Logo variations.

  - Light and dark logo versions.

  - SVG assets.

  - PNG assets.

  - Font files.

  - Other brand assets.


  Typography requirements:


  - **Space Grotesk:** Use for the Ashplug wordmark.

  - **JetBrains Mono:** Use as the default font throughout the entire website.


  Use the actual font files provided in the branding directory.


  Do not substitute Google Fonts or other external fonts if the supplied font
  files are usable.


  Determine the correct font weights and formats.


  Plan how to serve the fonts locally and efficiently.


  Do not modify or overwrite original branding assets.


  ## 3. Required technology architecture


  The website must use:


  - Eta.js for build-time HTML templating.

  - HTML5.

  - Vanilla JavaScript.

  - Tailwind CSS.

  - Tailwind CSS CLI.

  - Bun scripts.

  - Static HTML generation.

  - GitHub Actions.

  - GitHub Pages.


  Strictly prohibit:


  - Astro.

  - React.

  - Vue.

  - Next.js.

  - Svelte.

  - Angular.

  - Vite-based frontend frameworks.

  - Other frontend frameworks.

  - Backend servers.

  - Runtime SSR.

  - Databases.


  Eta.js must generate static HTML during the build.


  The production website is static and must not require Bun or any server runtime.


  Use the Tailwind CLI for CSS compilation.


  Use Bun to orchestrate the build process.


  ## 4. Plan the project structure


  Inspect the existing directory before choosing where to place the website.


  A dedicated `website/` directory is preferred if appropriate.


  Plan a clean architecture for:


  - Eta layouts.

  - Eta partials.

  - Static pages.

  - Documentation content.

  - JavaScript.

  - Tailwind CSS.

  - Branding assets.

  - Fonts.

  - Images.

  - Generated output.


  Avoid unnecessary abstractions.


  ## 5. Deployment investigation


  Inspect:


  - GitHub repository URL.

  - Existing GitHub Actions workflows.

  - Existing Pages configuration.

  - Existing CNAME configuration.

  - Existing custom-domain setup.


  The domain is:


  `ashplug.com`


  Preserve existing configuration wherever possible.


  Do not make deployment changes that could disrupt the existing project.


  ## 6. Deliverables for this phase


  Produce:


  1. A concise explanation of the existing Ashplug architecture.

  2. A verified list of actual product capabilities.

  3. The verified installation command, if available.

  4. A recommended real-world workflow for the future terminal demonstration.

  5. An inventory of branding assets.

  6. Confirmation of available Space Grotesk and JetBrains Mono font files.

  7. The discovered GitHub repository URL.

  8. The recommended website directory structure.

  9. The proposed Eta.js and Tailwind CLI build architecture.

  10. A list of potential conflicts with the existing project.


  You may create the initial website directory and minimal build configuration
  if necessary, but do not build any website pages yet.


  Do not modify existing Ashplug application functionality.


  Do not commit or push changes.


  ## 7. Completion checkpoint


  Stop after completing the investigation and architecture foundation.


  Report what you discovered, what you created, and any unresolved questions.


  Wait for explicit approval before proceeding to Phase 2.


  Do not automatically start the next phase.
status: review
priority: medium
created: '2026-11-16T11:49:14.011Z'
updated: '2026-11-16T18:45:21.769Z'
branch: ''
commit: ''
pr: ''
---
# # PHASE 1 — Ashplug Website: Repository Investigation and Architecture

You are the senior frontend architect responsible for building the official Ashplug website.

The existing project is located at:

`~/projects/ashplug/`

The branding assets are located at:

`~/projects/ashplug/branding`

The website will be hosted on GitHub Pages at:

`https://ashplug.com`

Your task in this phase is to thoroughly investigate the existing repository and establish the technical foundation for the website.

**Do not implement the homepage or start building the visual design in this phase.**

## 1. Investigate the existing project

Inspect the entire project and understand:

- Project architecture.
- Source code.
- README files.
- Installation scripts.
- Existing documentation.
- Package manifests.
- Configuration files.
- Tests.
- Supported operating systems.
- Supported shells.
- AI integrations.
- Actual product commands and workflows.
- Existing GitHub configuration.
- Git remotes.
- Existing deployment configuration.

Determine how Ashplug actually works.

Identify the simplest and most representative real-world workflow that could later be demonstrated in an animated terminal.

Never invent functionality or technical claims.

## 2. Inspect branding assets

Thoroughly inspect:

`~/projects/ashplug/branding`

Identify:

- Wordmark logos.
- Logo variations.
- Light and dark logo versions.
- SVG assets.
- PNG assets.
- Font files.
- Other brand assets.

Typography requirements:

- **Space Grotesk:** Use for the Ashplug wordmark.
- **JetBrains Mono:** Use as the default font throughout the entire website.

Use the actual font files provided in the branding directory.

Do not substitute Google Fonts or other external fonts if the supplied font files are usable.

Determine the correct font weights and formats.

Plan how to serve the fonts locally and efficiently.

Do not modify or overwrite original branding assets.

## 3. Required technology architecture

The website must use:

- Eta.js for build-time HTML templating.
- HTML5.
- Vanilla JavaScript.
- Tailwind CSS.
- Tailwind CSS CLI.
- Bun scripts.
- Static HTML generation.
- GitHub Actions.
- GitHub Pages.

Strictly prohibit:

- Astro.
- React.
- Vue.
- Next.js.
- Svelte.
- Angular.
- Vite-based frontend frameworks.
- Other frontend frameworks.
- Backend servers.
- Runtime SSR.
- Databases.

Eta.js must generate static HTML during the build.

The production website is static and must not require Bun or any server runtime.

Use the Tailwind CLI for CSS compilation.

Use Bun to orchestrate the build process.

## 4. Plan the project structure

Inspect the existing directory before choosing where to place the website.

A dedicated `website/` directory is preferred if appropriate.

Plan a clean architecture for:

- Eta layouts.
- Eta partials.
- Static pages.
- Documentation content.
- JavaScript.
- Tailwind CSS.
- Branding assets.
- Fonts.
- Images.
- Generated output.

Avoid unnecessary abstractions.

## 5. Deployment investigation

Inspect:

- GitHub repository URL.
- Existing GitHub Actions workflows.
- Existing Pages configuration.
- Existing CNAME configuration.
- Existing custom-domain setup.

The domain is:

`ashplug.com`

Preserve existing configuration wherever possible.

Do not make deployment changes that could disrupt the existing project.

## 6. Deliverables for this phase

Produce:

1. A concise explanation of the existing Ashplug architecture.
2. A verified list of actual product capabilities.
3. The verified installation command, if available.
4. A recommended real-world workflow for the future terminal demonstration.
5. An inventory of branding assets.
6. Confirmation of available Space Grotesk and JetBrains Mono font files.
7. The discovered GitHub repository URL.
8. The recommended website directory structure.
9. The proposed Eta.js and Tailwind CLI build architecture.
10. A list of potential conflicts with the existing project.

You may create the initial website directory and minimal build configuration if necessary, but do not build any website pages yet.

Do not modify existing Ashplug application functionality.

Do not commit or push changes.

## 7. Completion checkpoint

Stop after completing the investigation and architecture foundation.

Report what you discovered, what you created, and any unresolved questions.

Wait for explicit approval before proceeding to Phase 2.

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
