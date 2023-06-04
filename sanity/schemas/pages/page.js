export default {
  name: 'page',
  title: 'Pages',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'head',
      title: 'Head',
      type: 'head',
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'head.image',
      subtitle: 'head.description',
    },
  },
}
