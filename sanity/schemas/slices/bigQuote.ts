import {MdFormatQuote} from 'react-icons/md'

export default {
  name: 'bigQuote',
  icon: MdFormatQuote,
  type: 'object',
  fields: [
    {
      name: 'isInverted',
      title: 'Does this section have an inverted background?',
      type: 'boolean',
    },
    {
      name: 'quote',
      type: 'emphasizedHeading',
    },
    {
      name: 'credit',
      type: 'string',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Big Quote',
        icon: null,
      }
    },
  },
}
