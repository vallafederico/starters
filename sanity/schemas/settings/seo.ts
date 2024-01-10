export default {
  name: 'settings.seo',
  title: 'SEO',
  type: 'document',
  groups: [
    {
      name: 'meta',
      title: 'Metadata',
      default: true,
    },
    {
      name: 'social',
      title: 'Social Media Metadata',
    },
  ],
  fields: [
    {
      name: 'siteTitle',
      type: 'string',
      group: 'meta',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Meta Description',
      description: 'Default meta description if not filled in on each page.',
      group: 'meta',
      rows: 3,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'social',
      title: 'Social Media Metadata',
      description:
        'Optional descriptions specific to the site when it is shared on social media. Defaults to description provided above.',
      type: 'object',
      group: 'social',
      fields: [
        {
          name: 'title',
          title: 'Social Media Title',
          type: 'string',
          description:
            'The title displayed when this pages link is posted on social media. Defaults to the Page Title already provided',
        },
        {
          name: 'description',
          title: 'Social Media Description',
          type: 'text',
          rows: 3,
          description:
            'The description displayed when this pages link is posted on social media. Defaults to the Meta Description already provided',
          validation: (Rule) =>
            Rule.max(160).warning(
              'Descriptions longer than this (160 characters) will be truncated by Google.'
            ),
        },
        {
          name: 'image',
          title: 'Image',
          description:
            'Displayed when the site link is posted on social media, defaults to a screenshot of the homepage.',
          type: 'imageAlt',
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'SEO',
      }
    },
  },
}
