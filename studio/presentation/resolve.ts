import { defineLocations, PresentationPluginOptions } from 'sanity/presentation'

export const resolve: PresentationPluginOptions['resolve'] = {
  locations: {
    homePage: defineLocations({
      locations: [{ title: "Page d'accueil", href: '/' }],
    }),
    spectaclesPage: defineLocations({
      locations: [{ title: 'Page Spectacles', href: '/spectacles' }],
    }),
    troupePage: defineLocations({
      locations: [{ title: 'Page La Tipaix', href: '/troupe' }],
    }),
    siteSettings: defineLocations({
      locations: [{ title: 'Réglages du site', href: '/' }],
    }),
    show: defineLocations({
      select: { title: 'title', slug: 'slug.current' },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || 'Spectacle sans titre',
            href: `/spectacles/${doc?.slug}`,
          },
          { title: 'Liste des spectacles', href: '/spectacles' },
        ],
      }),
    }),
  },
}
