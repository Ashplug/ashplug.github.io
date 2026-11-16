const root = new URL("./docs/", import.meta.url).pathname.replace(/\/$/, "");
const port = Number(Bun.env.PORT || 3000);
const hostname = Bun.env.HOST || "0.0.0.0";
const mimeTypes: Record<string, string> = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".ttf": "font/ttf",
  ".woff2": "font/woff2"
};

const fileForPath = (pathname: string) => {
  let decodedPath: string;
  try {
    decodedPath = decodeURIComponent(pathname);
  } catch {
    return null;
  }

  const requested = new URL(`.${decodedPath}`, `file://${root}/`).pathname;
  if (requested !== root && !requested.startsWith(`${root}/`)) return null;
  return decodedPath.endsWith("/") ? `${requested}index.html` : requested;
};

const server = Bun.serve({
  hostname,
  port,
  async fetch(request) {
    const url = new URL(request.url);
    const requested = fileForPath(url.pathname);
    if (!requested) return new Response("Bad request", { status: 400 });

    let file = Bun.file(requested);
    if (!(await file.exists()) && !url.pathname.includes(".")) {
      file = Bun.file(`${root}/index.html`);
    }
    if (!(await file.exists())) return new Response("Not found", { status: 404 });

    const extension = requested.slice(requested.lastIndexOf(".")).toLowerCase();
    return new Response(file, {
      headers: {
        "cache-control": "no-cache",
        "content-type": mimeTypes[extension] || "application/octet-stream"
      }
    });
  }
});

console.log(`Ashplug development server: http://${hostname}:${server.port}/`);
