import {TfiLayoutListLargeImage} from 'react-icons/tfi'

export default {
  name: 'imageWithText',
  icon: TfiLayoutListLargeImage,
  type: 'object',
  fields: [
    {
      name: 'isInverted',
      type: 'boolean',
    },
    {
      name: 'image',
      type: 'imageAlt',
    },
    {
      name: 'paragraph',
      type: 'normalText',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Image With Text',
        icon: TfiLayoutListLargeImage,
      }
    },
  },
}
