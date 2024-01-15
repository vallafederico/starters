# Sanity Clean Content Studio

## Secrets

```js
export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_ID,
    dataset: 'production',
  },
})
```

### .env
```md
SANITY_STUDIO_ID="..."
```
