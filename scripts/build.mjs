import { Eta } from "eta";

const root = new URL("../", import.meta.url).pathname.replace(/\/$/, "");
const output = `${root}/docs`;
const branding = new URL("../../branding/", import.meta.url).pathname.replace(/\/$/, "");
const read = (path) => Bun.file(path).text();
const write = (path, contents) => Bun.write(path, contents);
const copy = (source, destination) => Bun.write(destination, Bun.file(source));

const eta = new Eta({ views: `${root}/src/pages` });
const html = await eta.renderAsync("index", {});
await write(`${output}/index.html`, html);

const header = await read(`${root}/src/partials/header.eta`);
const footer = await read(`${root}/src/partials/footer.eta`);
const docsStart = await read(`${root}/src/partials/docs-start.eta`);
const docsEnd = await read(`${root}/src/partials/docs-end.eta`);
const renderDocument = async (page, data) => {
  const content = await read(`${root}/src/pages/${page}.eta`);
  const pageContent = content
    .replace('<%~ includeFile("../partials/header", it) %>', "")
    .replace('<%~ includeFile("../partials/footer", it) %>', "");
  return `${await eta.renderStringAsync(header, data)}${await eta.renderStringAsync(pageContent, data)}${await eta.renderStringAsync(footer, data)}`;
};

await write(`${output}/installation/index.html`, await renderDocument("installation", {
  pageTitle: "Installation",
  description: "Install and configure the Ashplug AI-powered shell assistant."
}));

const documentation = [
  ["introduction", "Introduction", "Introduction", null, ["Installation", "/docs/installation/"]],
  ["installation", "Installation", "Installation", ["Introduction", "/docs/"], ["Configuration", "/docs/configuration/"]],
  ["configuration", "Configuration", "Configuration", ["Installation", "/docs/installation/"], ["Commands", "/docs/commands/"]],
  ["commands", "Commands", "Commands", ["Configuration", "/docs/configuration/"], ["AI providers", "/docs/providers/"]],
  ["providers", "AI providers", "AI providers", ["Commands", "/docs/commands/"], ["Architecture", "/docs/architecture/"]],
  ["architecture", "Architecture", "Architecture", ["AI providers", "/docs/providers/"], ["Security model", "/docs/security/"]],
  ["security", "Security model", "Security model", ["Architecture", "/docs/architecture/"], ["Troubleshooting", "/docs/troubleshooting/"]],
  ["troubleshooting", "Troubleshooting", "Troubleshooting", ["Security model", "/docs/security/"], null]
];

for (const [name, label, pageTitle, previous, next] of documentation) {
  const pageData = {
    pageTitle,
    description: `${label} for the Ashplug AI-powered shell assistant.`,
    current: name,
    label,
    previous: previous && { label: previous[0], href: previous[1] },
    next: next && { label: next[0], href: next[1] }
  };
  const content = await read(`${root}/src/docs/${name}.eta`);
  const rendered = `${await eta.renderStringAsync(header, pageData)}${await eta.renderStringAsync(docsStart, pageData)}${await eta.renderStringAsync(content, pageData)}${await eta.renderStringAsync(docsEnd, pageData)}${await eta.renderStringAsync(footer, pageData)}`;
  const directory = name === "introduction" ? `${output}/docs` : `${output}/docs/${name}`;
  await write(`${directory}/index.html`, rendered);
}

await copy(`${root}/CNAME`, `${output}/CNAME`);
await copy(`${root}/src/scripts/site.js`, `${output}/assets/site.js`);
await copy(`${branding}/logos/website-navbar-logo/ashplug-website-navbar-logo.svg`, `${output}/assets/ashplug-navbar.svg`);
await copy(`${branding}/favicon/favicon.svg`, `${output}/assets/favicon.svg`);
await copy(`${branding}/fonts/JetBrainsMono/fonts/webfonts/JetBrainsMono-Regular.woff2`, `${output}/assets/JetBrainsMono-Regular.woff2`);
await copy(`${branding}/fonts/JetBrainsMono/fonts/webfonts/JetBrainsMono-SemiBold.woff2`, `${output}/assets/JetBrainsMono-SemiBold.woff2`);
await copy(`${branding}/fonts/Space_Grotesk/static/SpaceGrotesk-SemiBold.ttf`, `${output}/assets/SpaceGrotesk-SemiBold.ttf`);

console.log("Rendered docs/index.html");
