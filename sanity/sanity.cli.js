import {defineCliConfig} from 'sanity/cli'

// console.log(process.env)
export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: 'production',
  },
})
