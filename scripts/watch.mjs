await import("./build.mjs");

const css = Bun.spawn(["bun", "run", "build:css"], {
  stdout: "inherit",
  stderr: "inherit"
});

process.exitCode = await css.exited;
