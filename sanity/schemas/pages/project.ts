import {createPreview} from '../../utils/preview'
import createPage from './createPage'
import {MdPages, MdPerson} from 'react-icons/md'

const options = {
  slices: 'pageSlices',
  prefix: false,
  slug: true,
  seo: true,
  groups: [{title: 'Project Brief', name: 'brief'}],
  icon: MdPages,
  fields: [
    // {
    //   name: 'mainImage',
    //   type: 'imageAlt',
    //   group: 'content',
    // },
  ],
  body: false,
}

export default createPage('Project', 'project', options)
