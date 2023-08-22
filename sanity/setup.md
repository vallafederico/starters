# Sanity Setup

#### Install

##### Basics

```console
pnpm install
```

##### All

```console
pnpm install
```

#### Config

```js
// sanity.config.js

import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { colorInput } from "@sanity/color-input";
import { vercelDeployTool } from "sanity-plugin-vercel-deploy";

import { schemaTypes } from "./schemas";

import { structure } from "./schemas/structure";

export default defineConfig({
  //   name: 'default',
  //   title: 'ProjectTitle',

  projectId: "ko9iwne7",
  dataset: "production",

  plugins: [
    colorInput(),
    deskTool({
      structure,
    }),
    visionTool(),
    vercelDeployTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
```
