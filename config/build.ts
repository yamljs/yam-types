import { defineConfig } from 'tsup'

const debug_build = process.env.YAML_JS_MODE === "DEBUG"
if (debug_build) {
  console.log("Building in DEBUG mode")
}

export default defineConfig({
  name: "@yaml-js/typescript",
  entry: ['src/yaml-js.typescript.ts'],
  format: ['esm', 'cjs'],
  target: 'node22',
  dts: true,
  bundle: !debug_build,
  minify: !debug_build,
  sourcemap: true,
  clean: true,
  outDir: 'lib',
  skipNodeModulesBundle: true,
  platform: 'node',
});
