# Sanity Setup

##### Astro

```console
pnpm install @sanity/client concurrently dotenv walkjs --save-dev
```

```console
pnpm install @sanity/astro @sanity/image-url
```

```json
"cms": "cd cms && pnpm dev",
"all": "concurrently \"pnpm cms\" \"pnpm dev\"",
"sd": "cd cms && pnpm sanity deploy"
```

#### astro.config.mjs

```js
import { sanityIntegration as sanity } from "@sanity/astro"
import dotenv from "dotenv"

dotenv.config()
const { SANITY_STUDIO_PROJECT_ID } = process.env

const integrations:[
      sanity({
      projectId: SANITY_STUDIO_PROJECT_ID,
      dataset: "production",
      apiVersion: "2023-11-11",
      useCdn: true,
    }),
]
```
