import {BiLinkExternal} from 'react-icons/bi'

export default {
  name: 'externalLink',
  type: 'object',
  icon: BiLinkExternal,
  preview: {
    select: {
      title: 'label',
      subtitle: 'url',
    },
    prepare(selection) {
      const {title, subtitle} = selection
      return {
        title,
        subtitle,
      }
    },
  },
  fields: [
    {
      name: 'label',
      type: 'string',
    },
    {
      name: 'url',
      type: 'url',
      title: 'URL',
      validation: (Rule) => Rule.required(),
      description: 'Must begin with https://',
    },
  ],
}
