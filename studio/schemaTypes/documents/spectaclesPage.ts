import { defineArrayMember, defineField, defineType } from 'sanity'
import { DocumentTextIcon } from '@sanity/icons/DocumentText'

export const spectaclesPage = defineType({
  name: 'spectaclesPage',
  title: 'Page Spectacles',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'introQuote',
      title: 'Citation en introduction',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'explanationHeading',
      title: 'Titre de la section explicative',
      type: 'string',
      initialValue: "Le Match d'Impro, c'est quoi ?",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'explanationText',
      title: 'Texte explicatif',
      type: 'array',
      of: [defineArrayMember({ type: 'block' })],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Page Spectacles' }),
  },
})
