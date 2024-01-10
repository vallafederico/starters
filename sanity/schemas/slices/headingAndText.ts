import {BiText} from 'react-icons/bi'

export default {
  name: 'headingAndText',
  icon: BiText,
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'emphasizedHeading',
    },
    {
      name: 'paragraph',
      type: 'text',
      rows: 4,
    },
    {
      name: 'cta',
      type: 'object',
      fields: [
        {
          name: 'label',
          type: 'string',
          title: 'Button text label',
        },
        {
          name: 'email',
          type: 'string',
          title: 'Button email link',
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Heading and Text',
        icon: BiText,
      }
    },
  },
}
