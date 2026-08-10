import { defineField, defineType } from 'sanity'
import { CalendarIcon } from '@sanity/icons/Calendar'

export const show = defineType({
  name: 'show',
  title: 'Spectacle',
  type: 'document',
  icon: CalendarIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: "Utilisé dans l'URL de la page du spectacle",
      options: { source: 'title' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'time',
      title: 'Heure',
      type: 'string',
      description: 'Ex : 19h00',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'venue',
      title: 'Lieu',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'address',
      title: 'Adresse',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
  ],
  orderings: [
    {
      title: 'Date du spectacle',
      name: 'dateAsc',
      by: [{ field: 'date', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'date', media: 'image' },
  },
})
