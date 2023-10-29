import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'link',
  title: 'Social Links',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Platform for social media',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
      description: 'Upload or select an icon for this social link.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'isVisible',
      title: 'Is Visible',
      type: 'boolean',
      description: 'Set whether this social link is visible on your website.',
    }),
  ],
})
