import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experiences',
  type: 'document',
  fields: [
    defineField({
      name: 'jobTitle',
      type: 'string',
      title: 'Job Title',
      description: 'eg. Frontend Developer',
    }),
    defineField({
      name: 'companyImage',
      title: 'Company Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'companyTitle',
      title: 'Company Name',
      type: 'text',
      rows: 1,
    }),
    defineField({
      name: 'companyLocation',
      title: 'Company Location',
      type: 'text',
      rows: 1,
    }),
    defineField({
      name: 'dateStarted',
      title: 'DateStarted',
      type: 'date',
    }),
    defineField({
      name: 'dateEnded',
      title: 'DateEnded',
      type: 'date',
    }),
    defineField({
      name: 'isCurrentlyWorkingHere',
      title: 'IsCurrentlyWorkingHere',
      type: 'boolean',
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skill'}}],
    }),
    defineField({
      name: 'experienceDetails',
      title: 'Experience Details',
      type: 'object',
      fields: [
        {
          name: 'point',
          type: 'array',
          of: [{type: 'text', rows: 1}],
          title: 'Point',
        },
        {
          name: 'projects',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'projectName',
                  type: 'text',
                  title: 'Project Name',
                  rows: 1,
                },
                {
                  name: 'projectDescription',
                  type: 'text',
                  title: 'Project Description',
                },
                // Add more fields here
              ],
            },
          ],
          title: 'Projects',
        },
      ],
    }),
  ],
})
