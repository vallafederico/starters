import { defineConfig } from "vite";
import glsl from "vite-plugin-glsl";

export default defineConfig({
  assetsInclude: ["**/*.glb"],
  plugins: [
    glsl({
      include: [
        // Glob pattern, or array of glob patterns to import
        "**/*.glsl",
        // "**/*.wgsl",
        "**/*.vert",
        "**/*.frag",
        // "**/*.vs",
        // "**/*.fs",
      ],
      exclude: undefined, // Glob pattern, or array of glob patterns to ignore
      warnDuplicatedImports: true, // Warn if the same chunk was imported multiple times
      defaultExtension: "glsl", // Shader suffix when no extension is specified
      compress: true, // Compress output shader code
      watch: false, // Recompile shader on change
      root: "/", // Directory for root imports
    }),
  ],
  // ...
});
