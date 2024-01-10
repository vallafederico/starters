import {BiText} from 'react-icons/bi'

export default {
  name: 'textSection',
  icon: BiText,
  type: 'object',
  fields: [
    {
      name: 'buttons',
      title: 'Buttons (Optional)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {type: 'string', name: 'label'},
            {
              name: 'link',
              type: 'url',
            },
          ],
        },
      ],
    },
    {
      name: 'heading',
      type: 'string',
      title: 'Heading (Optional)',
    },
    {
      name: 'paragraph',
      type: 'normalText',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Text',
        icon: BiText,
      }
    },
  },
}
