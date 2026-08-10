import type { StructureResolver } from 'sanity/structure'
import { HomeIcon } from '@sanity/icons/Home'
import { DocumentTextIcon } from '@sanity/icons/DocumentText'
import { UsersIcon } from '@sanity/icons/Users'
import { CogIcon } from '@sanity/icons/Cog'
import { CalendarIcon } from '@sanity/icons/Calendar'

const SINGLETONS = ['homePage', 'spectaclesPage', 'troupePage', 'siteSettings']

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Contenu du site')
    .items([
      S.listItem()
        .title("Page d'accueil")
        .icon(HomeIcon)
        .child(S.document().schemaType('homePage').documentId('homePage')),
      S.listItem()
        .title('Page Spectacles')
        .icon(DocumentTextIcon)
        .child(S.document().schemaType('spectaclesPage').documentId('spectaclesPage')),
      S.listItem()
        .title('Page La Tipaix')
        .icon(UsersIcon)
        .child(S.document().schemaType('troupePage').documentId('troupePage')),
      S.listItem()
        .title('Réglages du site')
        .icon(CogIcon)
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),

      S.divider(),

      S.listItem()
        .title('Spectacles')
        .icon(CalendarIcon)
        .child(S.documentTypeList('show').title('Spectacles')),

      S.divider(),

      ...S.documentTypeListItems().filter(
        (listItem) => !SINGLETONS.includes(listItem.getId() as string) && listItem.getId() !== 'show'
      ),
    ])
