import {MdImage} from 'react-icons/md'

export default {
  name: 'imageAlt',
  title: 'Image',
  icon: MdImage,
  type: 'object',
  fields: [
    {
      name: 'image',
      type: 'image',
      options: {
        metadata: ['lqip'],
        hotspot: true,
      },
    },
    {
      name: 'alt',
      title: 'Alternative Text',
      type: 'string',
      description: 'Users with visual impairments will read this description instead of the image.',
      validation: (Rule) => Rule.required().error('Alternative text is required'),
    },
  ],
}
