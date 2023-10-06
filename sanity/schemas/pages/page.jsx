import {pageDefaultsSeo, pageDefaultsGroup} from '../_defaults.js'
import {HiOutlineDocument} from 'react-icons/hi'

export default {
  name: 'page',
  title: 'Pages',
  groups: [...pageDefaultsGroup],
  icon: HiOutlineDocument,

  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      description: 'The slug for this page. Used in the URL.',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [
        // ...
      ],
    },
    ...pageDefaultsSeo,
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'meta.description',
      media: 'meta.image',
      // icon: someReactIcon
    },
    prepare({title, media, subtitle}) {
      return {
        title: title,
        subtitle: subtitle,
        media: media,
        // icon: someReactIcon
      }
    },
  },
}
