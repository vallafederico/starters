import {IoMdMegaphone} from 'react-icons/io'

export default {
  name: 'cta',
  icon: IoMdMegaphone,
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'emphasizedHeading',
    },
    {
      name: 'lists',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string',
            },
            {
              name: 'items',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'label',
                      type: 'string',
                    },
                    {
                      name: 'cardContent',
                      type: 'array',
                      of: [{type: 'text', rows: 3}],
                    },
                    {
                      name: 'link',
                      type: 'string',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'CTA',
        icon: IoMdMegaphone,
      }
    },
  },
}
