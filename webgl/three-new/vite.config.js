import { defineConfig } from "vite";
import { fileURLToPath, URL } from "url";
import glsl from "vite-plugin-glsl";

const alias = {
  "@src": fileURLToPath(new URL("./src", import.meta.url)),
  "@utils": fileURLToPath(new URL("./src/utils", import.meta.url)),
  "#gl": fileURLToPath(new URL("./src/gl", import.meta.url)),
};

// plugins
const plugins = [glsl()];

export default defineConfig({
  assetsInclude: ["**/*.gltf"],
  plugins,
  resolve: {
    alias,
  },
});
