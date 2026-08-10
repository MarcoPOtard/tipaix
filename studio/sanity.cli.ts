import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'r40iuo36',
    dataset: 'production'
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
    appId: 'ezgws06k0uopckajqd1eg291',
  },
  typegen: {
    enabled: true,
    path: '../src/**/*.{ts,tsx}',
    schema: 'schema.json',
    generates: '../src/sanity.types.ts',
    overloadClientMethods: true,
  },
})
