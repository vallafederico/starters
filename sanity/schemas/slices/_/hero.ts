import {TbLayoutBottombar} from 'react-icons/tb'

export default {
  name: 'hero',
  type: 'object',
  icon: TbLayoutBottombar,
  fields: [
    {
      name: 'swappyWords',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Hero',
        icon: null,
      }
    },
  },
}
