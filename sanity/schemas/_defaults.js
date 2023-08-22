export const pageDefaultsGroup = [
  {
    name: 'content',
    title: 'Content',
    default: true,
  },
  {
    name: 'seo',
    title: 'Head',
  },
]

export const pageDefaultsSeo = [
  {
    name: 'meta',
    title: 'Metadata',
    group: 'seo',
    type: 'object',
    collapsible: true,
    fields: [
      {
        name: 'description',
        title: 'Description Override',
        type: 'text',
        rows: 3,
        description:
          'The description displayed when a user finds the site in search results. Defaults to the description provided in the Settings tab.',
        validation: (Rule) =>
          Rule.max(160).warning('Long titles (over 160 characters) will be truncated by Google.'),
      },
      {
        name: 'social',
        title: 'Social Media Metadata',
        description:
          'Metadata provided here is only used when the sites link is posed on social media',
        type: 'object',
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
          },
          {
            name: 'image',
            title: 'Image',
            description: '1200 x 630 | 1.91:1 aspect ratio',
            type: 'image',
          },
        ],
      },
    ],
  },
]
