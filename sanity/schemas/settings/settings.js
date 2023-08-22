import {pageDefaultsSeo, pageDefaultsGroup} from '../_defaults.js'

export default {
  name: 'settings',
  title: 'Settings',
  type: 'document',
  groups: [...pageDefaultsGroup],
  fields: [
    ...pageDefaultsSeo,
    // {
    //   name: 'random',
    //   title: 'random',
    //   type: 'image',
    // },
  ],
}
