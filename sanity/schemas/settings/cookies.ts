import {MdCookie} from 'react-icons/md'

export default {
  name: 'settings.cookies',
  title: 'Cookie & Privacy Settings',
  icon: MdCookie,
  type: 'document',
  fields: [
    {
      name: 'blurb',
      validation: (Rule) => Rule.required(),
      type: 'text',
      rows: 2,
      description:
        'Small description of what cookies are used for on the site. Appears in the popup when a user loads the page.',
    },
    {
      name: 'description',
      validation: (Rule) => Rule.required(),
      type: 'text',
      rows: 2,
      title: 'Marketing Cookies Description',
      description:
        "GDPR-Compliant description of how cookies are used when the site gathers them. Visible when a user opens 'Cookie Preferences'",
    },
  ],
}
