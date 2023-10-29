import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'personalInfo',
  title: 'My Personal Information',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'backgroundInformation',
      title: 'Background Information',
      type: 'text', // Use 'text' for multiline text
    }),
    defineField({
      name: 'profilePic',
      title: 'Profile Picture',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.email(), // Add email validation
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
    }), // Added the missing closing parentheses here
    defineField({
      name: 'socials',
      title: 'Social Links',
      type: 'array',
      of: [{type: 'reference', to: {type: 'link'}}],
    }),
  ],
})
