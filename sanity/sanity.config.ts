import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {structure} from './desk/structure'
import {schemaTypes} from './schemas'
import {vercelDeployTool} from 'sanity-plugin-vercel-deploy'

export default defineConfig({
  name: 'default',
  title: '👀',
  projectId: process.env.SANITY_STUDIO_ID,
  dataset: 'production',

  plugins: [deskTool({structure}), visionTool(), vercelDeployTool()],

  schema: {
    types: schemaTypes,
  },
})
