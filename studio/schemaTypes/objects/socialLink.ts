import { defineField, defineType } from 'sanity'
import { ShareIcon } from '@sanity/icons/Share'

export const socialLink = defineType({
  name: 'socialLink',
  title: 'Réseau social',
  type: 'object',
  icon: ShareIcon,
  fields: [
    defineField({
      name: 'platform',
      title: 'Plateforme',
      type: 'string',
      options: {
        list: [
          { title: 'Instagram', value: 'instagram' },
          { title: 'Facebook', value: 'facebook' },
          { title: 'TikTok', value: 'tiktok' },
          { title: 'YouTube', value: 'youtube' },
          { title: 'Autre', value: 'other' },
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (rule) => rule.required().uri({ scheme: ['http', 'https'] }),
    }),
  ],
  preview: {
    select: { title: 'platform', subtitle: 'url' },
  },
})
