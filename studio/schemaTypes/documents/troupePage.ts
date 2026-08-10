import { defineArrayMember, defineField, defineType } from 'sanity'
import { UsersIcon } from '@sanity/icons/Users'

export const troupePage = defineType({
  name: 'troupePage',
  title: 'Page La Tipaix',
  type: 'document',
  icon: UsersIcon,
  groups: [
    { name: 'intro', title: 'Introduction' },
    { name: 'genesis', title: 'Notre Genèse' },
    { name: 'philosophy', title: 'Notre Philosophie' },
  ],
  fields: [
    defineField({
      name: 'introQuote',
      title: 'Citation en introduction',
      type: 'text',
      rows: 3,
      group: 'intro',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'genesisImage',
      title: 'Photo',
      type: 'image',
      group: 'genesis',
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'genesisText',
      title: 'Texte',
      type: 'array',
      of: [defineArrayMember({ type: 'block' })],
      group: 'genesis',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'philosophyText',
      title: 'Texte',
      type: 'array',
      of: [defineArrayMember({ type: 'block' })],
      group: 'philosophy',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Page La Tipaix' }),
  },
})
