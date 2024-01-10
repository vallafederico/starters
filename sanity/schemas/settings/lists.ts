import {BsFillCircleFill, BsReverseListColumnsReverse} from 'react-icons/bs'

export default {
  name: 'settings.lists',
  icon: BsReverseListColumnsReverse,
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      description:
        'Purely descriptive list title, used only to help you find which list you are referring to on the homepage. Never visible on the site.',
    },
    {
      name: 'columnName',
      type: 'string',
      description:
        'The label above the third column can have a unique name, (Project, Location, etc.) enter it here.',
    },
    {
      name: 'items',
      type: 'array',
      of: [
        {
          type: 'object',
          icon: BsFillCircleFill,
          preview: {
            select: {
              title: 'name',
              subtitle: 'organization',
            },
          },
          fields: [
            {
              name: 'name',
              type: 'string',
            },
            {
              name: 'organization',
              type: 'string',
            },
            {
              name: 'location',
              title: 'Location / Project',
              description:
                "This columns heading is controlled by the 'Column Name' field at the start of this document",
              type: 'string',
            },
            {
              name: 'projectType',
              type: 'string',
            },
            {
              name: 'year',
              type: 'number',
            },
            {
              name: 'link',
              type: 'url',
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'items',
    },
    prepare({title, subtitle}) {
      return {
        title,
        subtitle: subtitle?.length
          ? subtitle.length === 1
            ? `${subtitle.length} Item`
            : `${subtitle.length} Items`
          : '0 Items',

        icon: null,
      }
    },
  },
}
