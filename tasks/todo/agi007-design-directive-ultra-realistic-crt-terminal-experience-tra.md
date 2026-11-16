---
id: agi007-design-directive-ultra-realistic-crt-terminal-experience-tra
title: >-
  # DESIGN DIRECTIVE: ULTRA-REALISTIC CRT TERMINAL EXPERIENCE


  Transform the entire website's visual identity into an ultra-realistic vintage
  CRT computer terminal interface, inspired by the attached reference
  screenshot.


  The website should feel like looking directly into an old-school computer
  monitor from the 1980s or 1990s, with authentic phosphor display
  characteristics, analog imperfections, glowing terminal typography, and a rich
  retro-computing aesthetic.


  This is not a conventional dark-mode website with retro styling. The goal is
  to recreate the actual visual experience of an operating CRT monitor.


  ## 1. GLOBAL BACKGROUND — FIXED FULL-SCREEN CRT


  Create a fixed, full-viewport background layer that covers the entire browser
  window.


  Requirements:


  - Background must remain fixed while website content scrolls.
      
  - Use a very dark navy/black base (#05090D or #080C10).
      
  - Add a subtle blue phosphor tint throughout the screen.
      
  - Use extremely subtle radial gradients to create uneven CRT illumination.
      
  - Add a slight dark vignette around the edges and corners.
      
  - The center of the display should have a subtle blue/cyan illumination.
      
  - The background must extend across the entire viewport, including when
  scrolling.
      
  - Avoid conventional gradients that make the site look like a modern SaaS
  landing page.
      

  The background should resemble a real powered-on CRT monitor in a dark room.


  ## 2. CRT DISPLAY EFFECTS — HIGH PRIORITY


  Implement a convincing combination of the following effects. They should work
  together to create a realistic analog display.


  ### A. Scanlines


  - Add horizontal scanlines across the entire viewport.
      
  - Use repeating linear gradients or an equivalent CSS technique.
      
  - Alternate very subtle dark and transparent horizontal lines.
      
  - Scanlines should be visible but should never interfere with text
  readability.
      
  - Approximate scanline spacing: 2–4 pixels.
      
  - Add a subtle variation in intensity across the screen.
      

  ### B. Phosphor Glow and Bloom


  - Bright text should produce a soft colored glow.
      
  - Apply layered text-shadow effects to simulate phosphor light bleeding into
  surrounding pixels.
      
  - Cyan and blue text should produce blue/cyan halos.
      
  - Magenta text should produce a pink glow.
      
  - Green text should produce a green phosphor glow.
      
  - Bright white text should have a subtle cool-white glow.
      
  - Use multiple shadow layers with different blur radii and opacity.
      

  The glow should feel like light emitted by physical phosphor pixels, not an
  exaggerated neon sign.


  ### C. Chromatic Aberration


  - Introduce extremely subtle RGB channel separation around selected bright
  text and interface elements.
      
  - Simulate slight red/blue color fringing.
      
  - Keep the effect subtle enough that text remains crisp and readable.
      

  ### D. Static Noise and Film Grain


  - Add a very subtle animated noise texture over the entire screen.
      
  - Noise should resemble analog CRT electrical interference.
      
  - Use CSS-generated noise, a lightweight texture, or a performant canvas
  implementation.
      
  - Keep opacity low, approximately 2–5%.
      
  - Noise should continuously and subtly change.
      
  - Avoid large distracting static artifacts.
      

  ### E. CRT Flickering


  - Introduce very subtle global brightness fluctuations.
      
  - Use irregular, slow, low-intensity variations.
      
  - The screen should occasionally fluctuate in brightness, like an actual CRT
  monitor.
      
  - Avoid obvious blinking or distracting flashing.
      

  ### F. Horizontal Sync Distortion


  - Occasionally introduce very subtle horizontal displacement or distortion.
      
  - Simulate the effect of imperfect horizontal synchronization.
      
  - Use extremely short and infrequent distortion events.
      
  - Some horizontal scanlines may briefly shift a few pixels.
      
  - Keep this effect atmospheric rather than disruptive.
      

  ### G. Screen Curvature and Edge Characteristics


  - Simulate a very subtle CRT curvature effect.
      
  - Slightly darken the extreme edges.
      
  - Introduce a subtle brightness falloff toward the corners.
      
  - Do not apply excessive distortion that makes the website content difficult
  to use.
      

  ## 3. COLOR SYSTEM — TERMINAL 256-COLOR PALETTE


  Use the attached screenshot as the primary color reference.


  The screenshot uses the classic terminal 256-color palette. Recreate this
  visual language throughout the website.


  Primary text colors:


  - Phosphor Cyan: #00FFFF
      
  - Electric Blue: #0099FF
      
  - Terminal Blue: #0087FF
      
  - Ice Blue: #D6FAFF
      
  - Bright White: #F2F7FF
      
  - Phosphor Green: #00FF66
      
  - Terminal Green: #00D787
      
  - Neon Yellow: #FFFF00
      
  - Warm Yellow: #FFD75F
      
  - Orange: #FFAF00
      
  - Terminal Red: #FF5555
      
  - Hot Pink: #FF5FFF
      
  - Magenta: #FF00FF
      
  - Lavender: #D7AFFF
      

  These colors should be used as a flexible terminal color palette.


  Color usage guidelines:


  - Cyan and blue: primary interface text, navigation, links, headings and
  interactive elements.
      
  - Ice blue and white: primary readable body text.
      
  - Green: success states, system status, positive indicators and terminal
  prompts.
      
  - Yellow: highlights, warnings and important information.
      
  - Orange and red: alerts, important actions and occasional visual accents.
      
  - Pink and magenta: secondary highlights and decorative accents.
      

  You may introduce additional colors from the standard xterm 256-color palette
  when appropriate.


  Do not force every section to use every color. Maintain a coherent color
  hierarchy.


  ## 4. TYPOGRAPHY — AUTHENTIC COMPUTER TERMINAL


  The typography should reinforce the vintage computing atmosphere.


  Requirements:


  - Use a monospaced font throughout the interface.
      
  - Preferred fonts: JetBrainsMono, IBM Plex Mono, VT323, Share Tech Mono, or a
  similar terminal-inspired font.
      
  - Use a readable monospaced font for paragraphs and longer content.
      
  - Use slightly brighter colors for headings.
      
  - Apply subtle phosphor glow to headings and important text.
      
  - Use uppercase typography selectively.
      
  - Preserve excellent readability.
      

  Text should resemble information displayed by a real computer terminal.


  ## 5. INTERFACE AND COMPONENT STYLING


  Apply the CRT visual language consistently to all website components.


  ### Navigation


  - Terminal-style navigation.
      
  - Cyan or ice-blue text.
      
  - Subtle separators.
      
  - Hover effects that increase phosphor brightness.
      
  - Active navigation elements can use a terminal cursor or bracket notation.
      

  ### Buttons


  - Terminal-inspired rectangular buttons.
      
  - Thin cyan or blue borders.
      
  - Transparent or very dark backgrounds.
      
  - Bright glowing text on hover.
      
  - Subtle phosphor illumination when activated.
      
  - Avoid rounded modern SaaS-style buttons.
      

  ### Cards and Containers


  - Dark transparent backgrounds.
      
  - Thin, subtle blue/cyan borders.
      
  - Minimal corner rounding or square corners.
      
  - Slight internal phosphor illumination.
      
  - Avoid white backgrounds, large shadows and conventional modern card styling.
      

  ### Links


  - Cyan or electric blue.
      
  - Subtle glow on hover.
      
  - Optional terminal-style underline or cursor indicator.
      

  ### Forms and Inputs


  - Dark terminal backgrounds.
      
  - Cyan borders.
      
  - Monospaced text.
      
  - Bright blue/cyan focus states.
      
  - Terminal-style placeholders and labels.
      

  ## 6. ANIMATION AND INTERACTION


  The website should feel like an operating computer system.


  Consider adding:


  - A subtle blinking terminal cursor.
      
  - Text appearing with a terminal typing effect where appropriate.
      
  - Brief phosphor brightness changes on interaction.
      
  - Subtle color transitions when hovering over links.
      
  - Occasional, very subtle horizontal interference.
      
  - Animated system status indicators.
      
  - Terminal-inspired loading animations.
      

  Animations should be restrained, intentional and atmospheric.


  Do not make the entire website continuously type or animate. Use these effects
  selectively.


  ## 7. VISUAL HIERARCHY


  The website must balance two objectives:


  1. Authentic vintage CRT terminal aesthetics.
      
  2. Professional, polished and highly readable website design.
      

  The CRT effects should create the atmosphere, while the actual content remains
  easy to navigate and understand.


  Avoid:


  - Generic futuristic cyberpunk aesthetics.
      
  - Excessive neon gradients.
      
  - Purple/pink AI-generated website styling.
      
  - Excessive glowing borders.
      
  - Cartoon-style retro graphics.
      
  - Heavy glitch effects.
      
  - Excessive animation.
      
  - Modern glassmorphism.
      

  The desired aesthetic is closer to an authentic UNIX terminal running on a
  vintage CRT display than a futuristic sci-fi dashboard.


  ## 8. TECHNICAL IMPLEMENTATION


  Implement the visual effects using performant CSS wherever possible.


  Suggested implementation:


  - A fixed full-screen background layer.
      
  - Separate CSS pseudo-elements for scanlines and vignette.
      
  - A lightweight noise overlay.
      
  - Reusable phosphor text-shadow classes.
      
  - CSS keyframe animations for subtle flickering.
      
  - Optional minimal JavaScript for occasional sync distortion.
      
  - CSS variables for the complete terminal color palette.
      

  Use layered effects with appropriate z-index values so that:


  - The CRT background stays behind all content.
      
  - Scanlines and noise overlay the display.
      
  - Website content remains interactive.
      
  - Buttons, links and forms remain fully functional.
      

  Performance requirements:


  - Avoid expensive continuous JavaScript animations.
      
  - Avoid unnecessary canvas rendering.
      
  - Keep GPU-intensive filters and blur effects limited.
      
  - Support desktop, tablet and mobile.
      
  - Respect prefers-reduced-motion.
      
  - Provide a way to disable or reduce intense CRT effects if necessary.
      
  - Maintain text contrast and accessibility.
      

  ## 9. FINAL VISUAL TARGET


  Imagine an authentic old-school computer terminal displayed on a high-quality
  CRT monitor.


  The screen is almost black, with a subtle blue tint. Cyan and ice-blue text
  illuminate the display. Green, yellow, red and magenta terminal colors appear
  throughout the interface. Every bright character has a delicate phosphor glow.
  Fine horizontal scanlines are visible. The screen has subtle static, slight
  flicker, and occasional horizontal interference.


  The entire website should feel like a living computer terminal.


  **IMPORTANT: Apply this visual system globally across the entire existing
  website. Do not redesign or remove existing content, sections, functionality,
  routing, or business logic. This is a visual identity and presentation
  transformation.**


  Use the attached screenshot as the primary visual reference and prioritize
  authenticity over exaggerated effects.
status: todo
priority: medium
created: '2026-11-16T18:07:32.739Z'
updated: '2026-11-16T18:07:32.739Z'
branch: ''
commit: ''
pr: ''
---
# # DESIGN DIRECTIVE: ULTRA-REALISTIC CRT TERMINAL EXPERIENCE

Transform the entire website's visual identity into an ultra-realistic vintage CRT computer terminal interface, inspired by the attached reference screenshot.

The website should feel like looking directly into an old-school computer monitor from the 1980s or 1990s, with authentic phosphor display characteristics, analog imperfections, glowing terminal typography, and a rich retro-computing aesthetic.

This is not a conventional dark-mode website with retro styling. The goal is to recreate the actual visual experience of an operating CRT monitor.

## 1. GLOBAL BACKGROUND — FIXED FULL-SCREEN CRT

Create a fixed, full-viewport background layer that covers the entire browser window.

Requirements:

- Background must remain fixed while website content scrolls.
    
- Use a very dark navy/black base (#05090D or #080C10).
    
- Add a subtle blue phosphor tint throughout the screen.
    
- Use extremely subtle radial gradients to create uneven CRT illumination.
    
- Add a slight dark vignette around the edges and corners.
    
- The center of the display should have a subtle blue/cyan illumination.
    
- The background must extend across the entire viewport, including when scrolling.
    
- Avoid conventional gradients that make the site look like a modern SaaS landing page.
    

The background should resemble a real powered-on CRT monitor in a dark room.

## 2. CRT DISPLAY EFFECTS — HIGH PRIORITY

Implement a convincing combination of the following effects. They should work together to create a realistic analog display.

### A. Scanlines

- Add horizontal scanlines across the entire viewport.
    
- Use repeating linear gradients or an equivalent CSS technique.
    
- Alternate very subtle dark and transparent horizontal lines.
    
- Scanlines should be visible but should never interfere with text readability.
    
- Approximate scanline spacing: 2–4 pixels.
    
- Add a subtle variation in intensity across the screen.
    

### B. Phosphor Glow and Bloom

- Bright text should produce a soft colored glow.
    
- Apply layered text-shadow effects to simulate phosphor light bleeding into surrounding pixels.
    
- Cyan and blue text should produce blue/cyan halos.
    
- Magenta text should produce a pink glow.
    
- Green text should produce a green phosphor glow.
    
- Bright white text should have a subtle cool-white glow.
    
- Use multiple shadow layers with different blur radii and opacity.
    

The glow should feel like light emitted by physical phosphor pixels, not an exaggerated neon sign.

### C. Chromatic Aberration

- Introduce extremely subtle RGB channel separation around selected bright text and interface elements.
    
- Simulate slight red/blue color fringing.
    
- Keep the effect subtle enough that text remains crisp and readable.
    

### D. Static Noise and Film Grain

- Add a very subtle animated noise texture over the entire screen.
    
- Noise should resemble analog CRT electrical interference.
    
- Use CSS-generated noise, a lightweight texture, or a performant canvas implementation.
    
- Keep opacity low, approximately 2–5%.
    
- Noise should continuously and subtly change.
    
- Avoid large distracting static artifacts.
    

### E. CRT Flickering

- Introduce very subtle global brightness fluctuations.
    
- Use irregular, slow, low-intensity variations.
    
- The screen should occasionally fluctuate in brightness, like an actual CRT monitor.
    
- Avoid obvious blinking or distracting flashing.
    

### F. Horizontal Sync Distortion

- Occasionally introduce very subtle horizontal displacement or distortion.
    
- Simulate the effect of imperfect horizontal synchronization.
    
- Use extremely short and infrequent distortion events.
    
- Some horizontal scanlines may briefly shift a few pixels.
    
- Keep this effect atmospheric rather than disruptive.
    

### G. Screen Curvature and Edge Characteristics

- Simulate a very subtle CRT curvature effect.
    
- Slightly darken the extreme edges.
    
- Introduce a subtle brightness falloff toward the corners.
    
- Do not apply excessive distortion that makes the website content difficult to use.
    

## 3. COLOR SYSTEM — TERMINAL 256-COLOR PALETTE

Use the attached screenshot as the primary color reference.

The screenshot uses the classic terminal 256-color palette. Recreate this visual language throughout the website.

Primary text colors:

- Phosphor Cyan: #00FFFF
    
- Electric Blue: #0099FF
    
- Terminal Blue: #0087FF
    
- Ice Blue: #D6FAFF
    
- Bright White: #F2F7FF
    
- Phosphor Green: #00FF66
    
- Terminal Green: #00D787
    
- Neon Yellow: #FFFF00
    
- Warm Yellow: #FFD75F
    
- Orange: #FFAF00
    
- Terminal Red: #FF5555
    
- Hot Pink: #FF5FFF
    
- Magenta: #FF00FF
    
- Lavender: #D7AFFF
    

These colors should be used as a flexible terminal color palette.

Color usage guidelines:

- Cyan and blue: primary interface text, navigation, links, headings and interactive elements.
    
- Ice blue and white: primary readable body text.
    
- Green: success states, system status, positive indicators and terminal prompts.
    
- Yellow: highlights, warnings and important information.
    
- Orange and red: alerts, important actions and occasional visual accents.
    
- Pink and magenta: secondary highlights and decorative accents.
    

You may introduce additional colors from the standard xterm 256-color palette when appropriate.

Do not force every section to use every color. Maintain a coherent color hierarchy.

## 4. TYPOGRAPHY — AUTHENTIC COMPUTER TERMINAL

The typography should reinforce the vintage computing atmosphere.

Requirements:

- Use a monospaced font throughout the interface.
    
- Preferred fonts: JetBrainsMono, IBM Plex Mono, VT323, Share Tech Mono, or a similar terminal-inspired font.
    
- Use a readable monospaced font for paragraphs and longer content.
    
- Use slightly brighter colors for headings.
    
- Apply subtle phosphor glow to headings and important text.
    
- Use uppercase typography selectively.
    
- Preserve excellent readability.
    

Text should resemble information displayed by a real computer terminal.

## 5. INTERFACE AND COMPONENT STYLING

Apply the CRT visual language consistently to all website components.

### Navigation

- Terminal-style navigation.
    
- Cyan or ice-blue text.
    
- Subtle separators.
    
- Hover effects that increase phosphor brightness.
    
- Active navigation elements can use a terminal cursor or bracket notation.
    

### Buttons

- Terminal-inspired rectangular buttons.
    
- Thin cyan or blue borders.
    
- Transparent or very dark backgrounds.
    
- Bright glowing text on hover.
    
- Subtle phosphor illumination when activated.
    
- Avoid rounded modern SaaS-style buttons.
    

### Cards and Containers

- Dark transparent backgrounds.
    
- Thin, subtle blue/cyan borders.
    
- Minimal corner rounding or square corners.
    
- Slight internal phosphor illumination.
    
- Avoid white backgrounds, large shadows and conventional modern card styling.
    

### Links

- Cyan or electric blue.
    
- Subtle glow on hover.
    
- Optional terminal-style underline or cursor indicator.
    

### Forms and Inputs

- Dark terminal backgrounds.
    
- Cyan borders.
    
- Monospaced text.
    
- Bright blue/cyan focus states.
    
- Terminal-style placeholders and labels.
    

## 6. ANIMATION AND INTERACTION

The website should feel like an operating computer system.

Consider adding:

- A subtle blinking terminal cursor.
    
- Text appearing with a terminal typing effect where appropriate.
    
- Brief phosphor brightness changes on interaction.
    
- Subtle color transitions when hovering over links.
    
- Occasional, very subtle horizontal interference.
    
- Animated system status indicators.
    
- Terminal-inspired loading animations.
    

Animations should be restrained, intentional and atmospheric.

Do not make the entire website continuously type or animate. Use these effects selectively.

## 7. VISUAL HIERARCHY

The website must balance two objectives:

1. Authentic vintage CRT terminal aesthetics.
    
2. Professional, polished and highly readable website design.
    

The CRT effects should create the atmosphere, while the actual content remains easy to navigate and understand.

Avoid:

- Generic futuristic cyberpunk aesthetics.
    
- Excessive neon gradients.
    
- Purple/pink AI-generated website styling.
    
- Excessive glowing borders.
    
- Cartoon-style retro graphics.
    
- Heavy glitch effects.
    
- Excessive animation.
    
- Modern glassmorphism.
    

The desired aesthetic is closer to an authentic UNIX terminal running on a vintage CRT display than a futuristic sci-fi dashboard.

## 8. TECHNICAL IMPLEMENTATION

Implement the visual effects using performant CSS wherever possible.

Suggested implementation:

- A fixed full-screen background layer.
    
- Separate CSS pseudo-elements for scanlines and vignette.
    
- A lightweight noise overlay.
    
- Reusable phosphor text-shadow classes.
    
- CSS keyframe animations for subtle flickering.
    
- Optional minimal JavaScript for occasional sync distortion.
    
- CSS variables for the complete terminal color palette.
    

Use layered effects with appropriate z-index values so that:

- The CRT background stays behind all content.
    
- Scanlines and noise overlay the display.
    
- Website content remains interactive.
    
- Buttons, links and forms remain fully functional.
    

Performance requirements:

- Avoid expensive continuous JavaScript animations.
    
- Avoid unnecessary canvas rendering.
    
- Keep GPU-intensive filters and blur effects limited.
    
- Support desktop, tablet and mobile.
    
- Respect prefers-reduced-motion.
    
- Provide a way to disable or reduce intense CRT effects if necessary.
    
- Maintain text contrast and accessibility.
    

## 9. FINAL VISUAL TARGET

Imagine an authentic old-school computer terminal displayed on a high-quality CRT monitor.

The screen is almost black, with a subtle blue tint. Cyan and ice-blue text illuminate the display. Green, yellow, red and magenta terminal colors appear throughout the interface. Every bright character has a delicate phosphor glow. Fine horizontal scanlines are visible. The screen has subtle static, slight flicker, and occasional horizontal interference.

The entire website should feel like a living computer terminal.

**IMPORTANT: Apply this visual system globally across the entire existing website. Do not redesign or remove existing content, sections, functionality, routing, or business logic. This is a visual identity and presentation transformation.**

Use the attached screenshot as the primary visual reference and prioritize authenticity over exaggerated effects.

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
