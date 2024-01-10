import {MdHome} from 'react-icons/md'
import createPage from './createPage'

const options = {
  slices: 'homeSlices',
  icon: MdHome,
  slug: false,
  prefix: false,
}

export default createPage('Home', 'home', options)
