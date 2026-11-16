const processes = [
  Bun.spawn(["bun", "run", "dev:watch"], { stdout: "inherit", stderr: "inherit" }),
  Bun.spawn(["bun", "run", "dev:server"], { stdout: "inherit", stderr: "inherit" })
];

const stop = () => {
  processes.forEach((child) => child.kill());
};

process.on("SIGINT", stop);
process.on("SIGTERM", stop);

await Promise.race(processes.map((child) => child.exited));
stop();
