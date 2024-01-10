import {MdViewCarousel} from 'react-icons/md'

export default {
  name: 'mediaCarousel',
  icon: MdViewCarousel,
  type: 'object',
  fields: [
    {
      name: 'media',
      type: 'array',
      of: [
        {
          name: 'media',
          type: 'media',
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Media Carousel',
        icon: MdViewCarousel,
      }
    },
  },
}
