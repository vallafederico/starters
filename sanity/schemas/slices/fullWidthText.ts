import {BsTextParagraph} from 'react-icons/bs'

export default {
  name: 'fullWidthText',
  icon: BsTextParagraph,
  type: 'object',
  fields: [
    {
      name: 'isInverted',
      type: 'boolean',
    },
    {
      name: 'paragraphs',
      type: 'array',
      of: [{type: 'text', rows: 4}],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Full Width Text',
        icon: null,
      }
    },
  },
}
