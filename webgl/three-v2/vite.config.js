import { defineConfig } from "vite";
import { fileURLToPath, URL } from "url";
import glsl from "vite-plugin-glsl";

// folder struct
const folders = {};

// config
const config = {};

// plugins
const plugins = [glsl()];

export default defineConfig({
  assetsInclude: ["**/*.gltf"],
  plugins,
  resolve: {
    alias: {
      "@m": fileURLToPath(new URL("./src/modules", import.meta.url)),
      "@u": fileURLToPath(new URL("./src/util", import.meta.url)),
      "@a": fileURLToPath(new URL("./src/assets", import.meta.url)),
    },
  },
});

/* -------------------------------------------- */
/*
import { fileURLToPath, URL } from 'url'
import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'

import Eslint from 'vite-plugin-eslint'
import GLSL from 'vite-plugin-glsl'
import Handlebars from 'vite-plugin-handlebars'

export default async ({ mode }) => {
  process.env = {
    ...process.env,
    ...loadEnv(mode, process.cwd())
  }

  // Static Pages
  const input = {
    main: resolve('src/pages/index.html'),
    about: resolve('src/pages/about/index.html'),
    'museum/gallery': resolve('src/pages/museum/gallery/index.html'),
    'museum/list': resolve('src/pages/museum/list/index.html')
  }

  return defineConfig({
    root: 'src/pages',
    build: {
      outDir: '../../dist',
      rollupOptions: {
        input
      }
    },
    plugins: [
      Eslint(),

      GLSL(),

      Handlebars({
        partialDirectory: resolve('src/views')
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src/app', import.meta.url))
      }
    }
  })
}
Footer


*/
