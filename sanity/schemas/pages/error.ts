import {MdError} from 'react-icons/md'
import createPage from './createPage'

const options = {
  slug: false,
  seo: false,
  slices: false,
  icon: MdError,
  body: false,
  fields: [
    {
      name: 'text',
      type: 'string',
      group: 'content',
    },
  ],
}

export default createPage('Error Page (404)', 'error', options)
