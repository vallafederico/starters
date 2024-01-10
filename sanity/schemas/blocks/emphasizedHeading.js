// Only supports normal text and emphasis for b

export default {
  name: 'emphasizedHeading',
  title: 'Content',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        // {title: 'Heading 2', value: 'h2'},
        // {title: 'Heading 3', value: 'h3'},
        // {title: 'Heading 4', value: 'h4'},
        // {title: 'Heading 5', value: 'h5'},
        // {title: 'Heading 6', value: 'h6'},
      ],
      lists: [],
      marks: {
        decorators: [
          {
            title: 'Italics',
            value: 'em',
          },
          // {
          //   title: 'Bold',
          //   value: 'strong',
          // },
        ],
      },
    },
  ],
}
