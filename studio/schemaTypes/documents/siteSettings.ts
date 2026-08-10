import { defineArrayMember, defineField, defineType } from 'sanity'
import { CogIcon } from '@sanity/icons/Cog'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Réglages du site',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'navigation',
      title: 'Menu de navigation',
      type: 'array',
      of: [defineArrayMember({ type: 'navItem' })],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'socialLinks',
      title: 'Réseaux sociaux',
      type: 'array',
      of: [defineArrayMember({ type: 'socialLink' })],
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Réglages du site' }),
  },
})
