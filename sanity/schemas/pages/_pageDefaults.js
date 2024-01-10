export const pageDefaultsGroups = [
  {
    name: 'social',
    title: 'Social Media',
  },
  {
    name: 'content',
    title: 'Content',
    default: true,
  },
  {
    name: 'seo',
    title: 'SEO',
  },
]

export const pageDefaults = [
  {
    title: 'Page Title',
    name: 'title',
    group: 'content',
    type: 'string',
  },
  {
    name: 'slug',
    description: 'Click generate to build a URL for this page.',
    title: 'Slug',
    group: 'content',
    type: 'slug',
    options: {
      source: 'title',
    },
    validation: (Rule) => Rule.required().error('This page needs a slug'),
  },
  {
    name: 'slices',
    title: 'Slices',
    group: 'content',
    type: 'pageSlices',
  },
]

export const pageDefaultsSeo = [
  {
    name: 'meta',
    title: "Metadata",
    group: 'seo',
    type: 'object',
    fields: [
      {
        name: 'description',
        title: 'Description Override',
        type: 'text',
        rows: 3,
        description:
          'The description displayed when a user finds the site in search results. Defualts to the description provided in Settings > SEO.',
        validation: (Rule) =>
          Rule.max(160).warning('Long titles (over 160 characters) will be truncated by Google.'),
      },
      {
        name: 'social',
        title: 'Social Media Metadata',
        description: "Metadata provided here is only used when the sites link is posed on social media",
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
            description:
              'Displayed when the site link is posted on social media, defaults to a screenshot of the homepage.',
            type: 'imageAlt',
          },
        ],
      },
    ]
  },
  
]
