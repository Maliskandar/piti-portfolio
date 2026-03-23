// src/sanity/schemaTypes/work.ts
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'work',
  title: 'Work & Campaigns',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Campaign Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'brandName',
      title: 'Brand Name',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Commercial', value: 'Commercial' },
          { title: 'Brand Strategy', value: 'Brand Strategy' },
          { title: 'UGC', value: 'UGC' },
          { title: 'Viral Skit', value: 'Viral Skit' },
        ],
      },
    }),
    defineField({
      name: 'objective',
      title: 'Objective / Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'metrics',
      title: 'Metrics (e.g., 2.5M Views)',
      type: 'string',
    }),
    defineField({
      name: 'tags',
      title: 'Tags (Tekan Enter setelah tiap tag)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
      options: { hotspot: true }, // Memungkinkan Piti mengatur fokus (crop) gambar
    }),
    defineField({
      name: 'projectUrl',
      title: 'Project/Video URL',
      type: 'url',
    }),
  ],
})