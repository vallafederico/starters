import {createPreview} from '../../utils/preview'
import {IoShareSocial} from 'react-icons/io5'

export default {
  name: 'settings.footer',
  title: 'Footer',
  type: 'object',
  fields: [
    {
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'object',
          icon: IoShareSocial,
          preview: createPreview('networkName', 'url'),
          fields: [
            {name: 'networkName', type: 'string'},
            {name: 'url', type: 'url', title: 'URL'},
          ],
        },
      ],
    },
    {
      name: 'legalLinks',
      title: 'Legal Page Links',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'legal'}]}],
    },
    {
      name: 'cta',
      title: 'CTA button label',
      type: 'string',
    },
    {
      name: 'email',
      type: 'string',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Footer',
      }
    },
  },
}
