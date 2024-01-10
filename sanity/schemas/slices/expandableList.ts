import {BsReverseListColumnsReverse} from 'react-icons/bs'
import {useClient} from 'sanity'

export default {
  name: 'expandableList',
  icon: BsReverseListColumnsReverse,
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'object',
      fields: [
        {
          name: 'text',
          type: 'text',
          rows: 3,
        },
        {
          name: 'image',
          title: 'Image (Optional)',
          type: 'imageAlt',
        },
      ],
    },
    {
      name: 'subhead',
      type: 'object',
      fields: [
        {
          name: 'text',
          type: 'array',
          of: [{type: 'text', rows: 3}],
        },
        {
          name: 'image',
          title: 'Image (Optional)',
          type: 'imageAlt',
        },
      ],
    },
    {
      name: 'list',
      type: 'reference',
      to: [{type: 'settings.lists'}],
      title: 'Reference to List',
      description:
        "Create a list in the 'Lists' panel on the left side of the screen and use it here to automatically fill its contents into this section on the site.",
    },
  ],
  preview: {
    select: {
      title: 'heading.text',
      subtitle: 'subhead.text',
      media: 'heading.image.image',
    },
    prepare({subtitle, title, media}) {
      console.log(subtitle)
      return {
        title: `${title || ''} (Expandable List)`,
        media,
        subtitle: subtitle?.length ? subtitle[0] : '',
        icon: null,
      }
    },
  },
}
