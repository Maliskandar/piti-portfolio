// src/sanity/schemaTypes/spill.ts
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'spill',
  title: 'The Spill (Curated Picks)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Apparel', value: 'Apparel' },
          { title: 'Gear', value: 'Gear' },
          { title: 'Setup', value: 'Setup' },
        ],
      },
    }),
    defineField({
      name: 'image',
      title: 'Product Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'link',
      title: 'Shopee / Milkshake Link',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
  ],
})