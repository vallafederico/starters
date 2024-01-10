import {MdOutlineEmail} from 'react-icons/md'
import {TbForms} from 'react-icons/tb'

export default {
  name: 'settings.form',
  icon: TbForms,
  title: 'Contact Form',
  type: 'object',
  groups: [
    {
      name: 'default',
      default: true,
      title: 'Default State',
    },
    {
      name: 'complete',
      title: 'Completed State',
    },
    {
      name: 'redirects',
      title: 'Email Send Settings',
    },
  ],
  fields: [
    {
      name: 'heading',
      group: 'default',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subhead',
      type: 'text',
      group: 'default',
      validation: (Rule) => Rule.required(),
      rows: 2,
    },
    {
      name: 'globalEmail',
      type: 'array',
      title: 'Global CC list',
      description: "List of emails that will be cc'ed on every email response",
      group: 'redirects',
      of: [{type: 'string'}],
    },

    {
      name: 'serviceEmails',
      validation: (Rule) => Rule.min(1),
      group: 'redirects',
      title: 'Services email list',
      description:
        'Select which employees are sent a message when a user selects certain categories',
      type: 'array',
      of: [
        {
          type: 'object',
          icon: MdOutlineEmail,
          preview: {
            select: {
              service: 'service',
              emails: 'emails',
            },
            prepare(select) {
              const {service, emails} = select

              return {
                title: service || '',
                subtitle: emails?.length > 0 && `Sending to: ${emails.join(', ')}`,
              }
            },
          },
          fields: [
            {
              name: 'service',
              type: 'string',
            },
            {
              name: 'emails',
              type: 'array',
              of: [{type: 'string'}],
            },
          ],
        },
      ],
    },
    {
      name: 'completed',
      group: 'complete',
      title: 'Post-completion screen',
      description: 'Text displayed when a user has filled in the form and submitted',
      type: 'object',
      fields: [
        {
          name: 'heading',
          type: 'text',
          validation: (Rule) => Rule.required(),
          rows: 3,
        },
        {
          name: 'attachment',
          title: 'Services Packet Attachment',
          type: 'object',
          fields: [
            {
              name: 'label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'file',
              validation: (Rule) => Rule.required(),
              description: 'Upload the latest services packet here. (PDF or Word Document)',
              type: 'file',
              options: {
                accept: '.pdf,.docx,.doc',
              },
            },
          ],
        },
        {
          name: 'spam',
          type: 'string',
          title: 'Text asking users to check spam folder',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const {title} = selection

      return {
        title: title ? `${title} Form` : 'Form',
      }
    },
  },
}
