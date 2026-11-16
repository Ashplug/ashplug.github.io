(() => {
  const root = document.documentElement;
  const themeButtons = document.querySelectorAll("[data-theme-toggle]");
  const menuButton = document.querySelector("[data-menu-toggle]");
  const menu = document.querySelector("[data-mobile-menu]");
  const copyButtons = document.querySelectorAll("[data-copy-command]");
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)");

  // A tiny compositor supplies the parts of a CRT that CSS cannot make truly
  // live: changing grain, phosphor persistence, and rare sync disturbances.
  const backgroundCanvas = document.createElement("canvas");
  backgroundCanvas.className = "crt-background-layer";
  backgroundCanvas.setAttribute("aria-hidden", "true");
  document.body.prepend(backgroundCanvas);
  const crtCanvas = document.createElement("canvas");
  crtCanvas.className = "crt-live-layer";
  crtCanvas.setAttribute("aria-hidden", "true");
  document.body.append(crtCanvas);
  const backgroundContext = backgroundCanvas.getContext("2d", { alpha: false });
  const crtContext = crtCanvas.getContext("2d", { alpha: true });
  let crtWidth = 0;
  let crtHeight = 0;
  let nextSync = performance.now() + 4200;

  const resizeCrt = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
    crtWidth = window.innerWidth;
    crtHeight = window.innerHeight;
    crtCanvas.width = Math.floor(crtWidth * ratio);
    crtCanvas.height = Math.floor(crtHeight * ratio);
    crtContext?.setTransform(ratio, 0, 0, ratio, 0, 0);
    backgroundCanvas.width = Math.floor(crtWidth * ratio);
    backgroundCanvas.height = Math.floor(crtHeight * ratio);
    backgroundContext?.setTransform(ratio, 0, 0, ratio, 0, 0);
  };

  const drawCrt = (now) => {
    if (!crtContext) return;
    const flicker = 0.985 + Math.random() * 0.015;
    backgroundContext?.clearRect(0, 0, crtWidth, crtHeight);
    if (backgroundContext) {
      const base = backgroundContext.createRadialGradient(crtWidth * 0.5, crtHeight * 0.42, 0, crtWidth * 0.5, crtHeight * 0.5, crtWidth * 0.82);
      base.addColorStop(0, `rgb(${Math.floor(7 * flicker)} ${Math.floor(26 * flicker)} ${Math.floor(38 * flicker)})`);
      base.addColorStop(0.58, "rgb(5 13 20)");
      base.addColorStop(1, "rgb(2 4 7)");
      backgroundContext.fillStyle = base;
      backgroundContext.fillRect(0, 0, crtWidth, crtHeight);

      // The canvas owns the scanline field rather than a static CSS texture.
      backgroundContext.fillStyle = "rgba(0, 0, 0, 0.075)";
      const scanlineOffset = (now * 0.01) % 4;
      for (let y = scanlineOffset; y < crtHeight; y += 4) backgroundContext.fillRect(0, y, crtWidth, 1);

      const vignette = backgroundContext.createRadialGradient(crtWidth / 2, crtHeight / 2, crtWidth * 0.22, crtWidth / 2, crtHeight / 2, crtWidth * 0.76);
      vignette.addColorStop(0, "rgba(0, 0, 0, 0)");
      vignette.addColorStop(0.72, "rgba(0, 0, 0, 0.1)");
      vignette.addColorStop(1, "rgba(0, 0, 0, 0.68)");
      backgroundContext.fillStyle = vignette;
      backgroundContext.fillRect(0, 0, crtWidth, crtHeight);
    }
    crtContext.clearRect(0, 0, crtWidth, crtHeight);

    // Film grain: sparse pixels are cheaper and less distracting than a
    // full-resolution noise image while still reading as analog interference.
    const grain = Math.floor((crtWidth * crtHeight) / 1500);
    for (let index = 0; index < grain; index += 1) {
      const shade = Math.floor(Math.random() * 90) + 120;
      crtContext.fillStyle = `rgba(${shade}, ${shade + 4}, ${shade + 10}, ${Math.random() * 0.055})`;
      crtContext.fillRect(Math.random() * crtWidth, Math.random() * crtHeight, 1, 1);
    }

    // Warm ambient phosphor haze and a very faint glass reflection.
    const glow = crtContext.createRadialGradient(crtWidth * 0.5, crtHeight * 0.45, 0, crtWidth * 0.5, crtHeight * 0.45, crtWidth * 0.7);
    glow.addColorStop(0, "rgba(255, 175, 0, 0.018)");
    glow.addColorStop(0.65, "rgba(255, 120, 0, 0.006)");
    glow.addColorStop(1, "rgba(0, 0, 0, 0)");
    crtContext.fillStyle = glow;
    crtContext.fillRect(0, 0, crtWidth, crtHeight);
    const reflection = crtContext.createLinearGradient(0, 0, crtWidth, crtHeight);
    reflection.addColorStop(0, "rgba(255, 255, 255, 0.025)");
    reflection.addColorStop(0.18, "rgba(255, 255, 255, 0)");
    crtContext.fillStyle = reflection;
    crtContext.fillRect(0, 0, crtWidth, crtHeight);

    // Moving horizontal interference and a tiny glass bow at the edges.
    crtContext.fillStyle = "rgba(0, 210, 255, 0.025)";
    const syncBand = (now * 0.035) % crtHeight;
    crtContext.fillRect(0, syncBand, crtWidth, 2);
    crtContext.strokeStyle = "rgba(0, 0, 0, 0.34)";
    crtContext.lineWidth = Math.max(8, crtWidth * 0.012);
    crtContext.strokeRect(crtContext.lineWidth / 2, crtContext.lineWidth / 2, crtWidth - crtContext.lineWidth, crtHeight - crtContext.lineWidth);


    if (now > nextSync) {
      crtContext.fillStyle = "rgba(0, 255, 255, 0.035)";
      crtContext.fillRect(0, Math.random() * crtHeight, crtWidth, 1);
      nextSync = now + 3500 + Math.random() * 9000;
    }

    const jitterX = Math.random() > 0.985 ? Math.round(Math.random() * 4 - 2) : 0;
    const jitterY = Math.random() > 0.985 ? Math.round(Math.random() * 2 - 1) : 0;
    document.documentElement.style.setProperty("--crt-jitter-x", `${jitterX}px`);
    document.documentElement.style.setProperty("--crt-jitter-y", `${jitterY}px`);
    document.documentElement.style.setProperty("--crt-flicker", String(flicker));
    if (!reduceMotion.matches) requestAnimationFrame(drawCrt);
  };

  window.addEventListener("resize", resizeCrt, { passive: true });
  resizeCrt();
  requestAnimationFrame(drawCrt);

  const setTheme = (theme) => {
    root.dataset.theme = theme;
    localStorage.setItem("ashplug-theme", theme);
    themeButtons.forEach((button) => {
      button.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} theme`);
      button.setAttribute("aria-pressed", String(theme === "light"));
      button.querySelector("[data-theme-label]").textContent = theme === "dark" ? "light" : "dark";
    });
  };

  themeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setTheme(root.dataset.theme === "dark" ? "light" : "dark");
    });
  });

  menuButton?.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menu?.toggleAttribute("hidden", isOpen);
  });

  menu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton?.setAttribute("aria-expanded", "false");
      menu?.setAttribute("hidden", "");
    });
  });

  document.querySelector("[data-docs-toggle]")?.addEventListener("click", (event) => {
    const button = event.currentTarget;
    const sidebar = document.querySelector("[data-docs-sidebar]");
    const isOpen = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isOpen));
    sidebar?.toggleAttribute("data-open", !isOpen);
  });

  copyButtons.forEach((copyButton) => {
    copyButton.addEventListener("click", async () => {
      const command = copyButton.dataset.copyCommand;
      if (!command) return;
      try {
        await navigator.clipboard.writeText(command);
        const label = copyButton.querySelector("[data-copy-label]");
        label.textContent = "copied";
        copyButton.setAttribute("aria-label", "Installation command copied");
        window.setTimeout(() => {
          label.textContent = "copy";
          copyButton.setAttribute("aria-label", "Copy installation command");
        }, 1800);
      } catch {
        copyButton.querySelector("[data-copy-label]").textContent = "copy failed";
      }
    });
  });

})();
