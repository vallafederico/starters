import {MdGavel} from 'react-icons/md'
import createPage from './createPage'

const options = {
  // prefix: 'legal',
  seo: false,
  slug: true,
  fields: [
    {
      name: 'blurb',
      type: 'text',
      rows: 3,
      group: 'content',
      description: 'Short paragraph at the top of this page, underneath the title.',
    },
  ],
  icon: MdGavel,
  slices: false,
  body: true,
}

export default createPage('Legal Page', 'legal', options)
