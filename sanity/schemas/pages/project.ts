import {createPreview} from '../../utils/preview'
import createPage from './createPage'
import {MdPages, MdPerson} from 'react-icons/md'

const options = {
  slices: 'pageSlices',
  prefix: false,
  slug: true,
  seo: true,
  groups: [{title: 'Project Brief', name: 'brief', defualt: true}],
  icon: MdPages,
  fields: [
    {
      name: 'mainImage',
      type: 'imageAlt',
      group: 'content',
    },
    {
      name: 'projectType',
      group: 'brief',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'role',
      type: 'array',
      group: 'brief',
      of: [{type: 'string'}],
    },
    {
      name: 'commission',
      group: 'brief',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'deliverables',
      group: 'brief',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'year',
      type: 'number',
      group: 'brief',
    },
    {
      name: 'team',
      group: 'content',
      type: 'array',
      of: [
        {
          name: 'member',
          type: 'object',
          icon: MdPerson,
          preview: createPreview('name', 'role'),
          fields: [
            {
              name: 'name',
              type: 'string',
            },
            {
              name: 'role',
              type: 'string',
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
  body: false,
}

export default createPage('Project', 'project', options)
