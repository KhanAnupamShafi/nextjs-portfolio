import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Project Title',
    }),
    defineField({
      name: 'dateEnded',
      type: 'date',
      title: 'Date',
      description: 'Project Finished On',
    }),
    defineField({
      name: 'overview',
      type: 'text',
      title: 'Project Overview',
      rows: 5,
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'theme',
      title: 'Theme color',
      type: 'color',
    }),
    defineField({
      name: 'link',
      type: 'url',
      title: 'Live Link',
    }),
    defineField({
      name: 'frontend_link',
      type: 'url',
      title: 'Frontend Link',
    }),
    defineField({
      name: 'backend_link',
      type: 'url',
      title: 'Backend Link',
    }),
    defineField({
      name: 'video_link',
      type: 'url',
      title: 'Video Link',
    }),
    defineField({
      name: 'tagline',
      type: 'string',
      title: 'Tag Line',
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skill'}}],
    }),

    defineField({
      name: 'gallery',
      type: 'array',
      title: 'Gallery',
      of: [{type: 'image'}], // Use the 'image' type for the array items
      options: {
        layout: 'grid', // You can customize the layout if needed
      },
    }),
  ],
})
