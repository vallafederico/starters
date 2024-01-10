// Rich Text field with code tags and H1 removed

export default {
  name: 'blockContent',
  title: 'Content',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        // {title: 'H1', value: 'h1'},
        {title: 'Heading', value: 'h2'},
        {title: 'Subhead', value: 'h3'},
        {title: 'Microhead', value: 'h4'},
      ],
      lists: [
        {title: '', value: 'bullet'},
        {title: '', value: 'number'},
      ],
      marks: {
        decorators: [
          {
            title: 'Italics',
            value: 'em',
          },
          {
            title: 'Bold',
            value: 'strong',
          },
        ],
      },
    },
  ],
}
