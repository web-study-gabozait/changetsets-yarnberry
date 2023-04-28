const { build } = require("esbuild");

build({
  entryPoints: ["./src/index.js"],
  outdir: "./dist",
  format: "cjs",
  platform: "node",
  sourcemap: true,
  bundle: true,
}).catch(() => process.exit(1));
