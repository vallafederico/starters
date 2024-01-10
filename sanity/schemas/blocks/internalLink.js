import {BiLink} from 'react-icons/bi'
import pages from '../pages'

const allPages = []

pages.forEach((page) => {
  if (page && page.name) {
    allPages.push({type: page.name})
  }
})

export default {
  name: 'internalLink',
  type: 'object',
  icon: BiLink,
  fields: [
    {
      name: 'label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'link',
      validation: (Rule) => Rule.required(),
      type: 'reference',
      options: {
        disableNew: true,
      },
      to: [...allPages],
    },
  ],
  preivew: {
    select: {
      link: 'link',
      title: 'label',
    },
    prepare(selection) {
      const {link, title} = selection
      return {
        subtitle: link.slug.current,
        title,
      }
    },
  },
}
