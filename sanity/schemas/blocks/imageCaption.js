export default {
  type: 'object',
  name: 'imageCaption',
  title: 'Image with Caption',
  fields: [
    {
      name: 'image',
      type: 'imageAlt',
    },
    {
      name: 'caption',
      type: 'string',
      description: 'Captions are only visible inside galleries',
    },
  ],
  preview: {
    select: {
      alt: 'image.alt',
      caption: 'caption',
      media: 'image.image',
    },
    prepare(selection) {
      const {media, alt, caption} = selection
      return {
        media: media,
        title: caption ? caption : 'No caption provided',
      }
    },
  },
}
