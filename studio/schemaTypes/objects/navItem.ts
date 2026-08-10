import { defineField, defineType } from 'sanity'
import { LinkIcon } from '@sanity/icons/Link'

export const navItem = defineType({
  name: 'navItem',
  title: 'Lien de menu',
  type: 'object',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'label',
      title: 'Libellé',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'href',
      title: 'Lien',
      description:
        'Chemin interne (ex: /spectacles) ou URL externe complète (ex: https://www.micim.fr)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: 'label', subtitle: 'href' },
  },
})
