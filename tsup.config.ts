import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["components/index.ts"],
  sourcemap: true,
  clean: true,
  dts: true,
  format: ["esm"],
});
