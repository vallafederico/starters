export default {
  name: 'logoRow',
  icon: null,
  type: 'object',
  fields: [
    {
      name: 'isInverted',
      type: 'boolean',
    },
    {
      name: 'logos',
      type: 'array',
      of: [{type: 'string', title: 'Company Name'}],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Logo Row',
        icon: null,
      }
    },
  },
}
