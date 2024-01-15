import {MdPermMedia} from 'react-icons/md'

export default {
  name: 'media',
  icon: MdPermMedia,
  type: 'object',
  fields: [
    {
      name: 'media',
      validation: (Rule) => Rule.max(3),
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              type: 'imageAlt',
              // hidden: ({parent, value}) => parent.mediaType === 'video',
              options: {
                collapsed: false,
              },
            },
            {
              name: 'video',
              title: 'Video (optional)',
              type: 'url',
              options: {
                collapsed: false,
              },
              // hidden: ({parent, value}) => parent.mediaType === 'image',
            },
          ],
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Media',
        icon: MdPermMedia,
      }
    },
  },
}
