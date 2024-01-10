export default {
  name: 'projectsList',
  icon: null,
  type: 'object',
  fields: [
    {
      name: 'memes',
      type: 'string',
      initialValue: 'fuck me',
      hidden: true,
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Projects List',
        icon: null,
      }
    },
  },
}
