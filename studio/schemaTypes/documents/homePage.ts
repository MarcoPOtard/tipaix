import { defineField, defineType } from 'sanity'
import { HomeIcon } from '@sanity/icons/Home'

export const homePage = defineType({
  name: 'homePage',
  title: "Page d'accueil",
  type: 'document',
  icon: HomeIcon,
  groups: [
    { name: 'hero', title: 'Bloc 1 — Hero' },
    { name: 'art', title: "Bloc 3 — L'art de l'improvisation" },
    { name: 'quote', title: 'Bloc 4 — Citation' },
  ],
  fields: [
    defineField({
      name: 'heroImage',
      title: 'Photo de fond',
      type: 'image',
      group: 'hero',
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Sous-titre',
      type: 'string',
      group: 'hero',
      initialValue: "Troupe de Théâtre d'Improvisation",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroQuote',
      title: 'Citation',
      type: 'text',
      rows: 2,
      group: 'hero',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'artImage',
      title: 'Photo',
      type: 'image',
      group: 'art',
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'artText',
      title: 'Texte',
      type: 'text',
      rows: 6,
      group: 'art',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'quoteText',
      title: 'Citation',
      type: 'text',
      rows: 3,
      group: 'quote',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    prepare: () => ({ title: "Page d'accueil" }),
  },
})
