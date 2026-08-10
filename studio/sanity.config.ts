import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {presentationTool} from 'sanity/presentation'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'
import {resolve} from './presentation/resolve'

// Le Studio tourne soit dans son propre bundle Vite (tipaix.sanity.studio),
// soit dans le bundle client Next.js (/studio) : on détecte l'origine du
// site au runtime plutôt que via des variables d'environnement, qui ne
// s'injectent pas de la même façon dans ces deux contextes.
function getPreviewOrigin() {
  if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
    return 'http://localhost:3000'
  }
  return 'https://www.tipaix.fr'
}

export default defineConfig({
  name: 'default',
  title: 'Tipaix',

  projectId: 'r40iuo36',
  dataset: 'production',

  plugins: [
    structureTool({structure}),
    presentationTool({
      resolve,
      previewUrl: {
        origin: getPreviewOrigin(),
        previewMode: {
          enable: '/api/draft-mode/enable',
        },
      },
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
