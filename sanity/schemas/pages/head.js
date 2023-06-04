export default {
  name: 'head',
  title: 'Head',
  type: 'object',

  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: '1200 x 630 | 1.91:1 aspect ratio',
      validation: (Rule) => Rule.required(),
    },
  ],
}
