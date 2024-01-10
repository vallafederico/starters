import {BsInputCursorText} from 'react-icons/bs'

export default {
  name: 'input',
  title: 'Short Text Field',
  icon: BsInputCursorText,
  type: 'object',
  fieldsets: [
    {
      name: 'form',
      options: {columns: 2},
    },
  ],
  fields: [
    {
      name: 'label',
      fieldset: 'form',
      type: 'string',
      title: 'Field Label',
    },
    {
      name: 'placeholder',
      type: 'string',
      fieldset: 'form',
      title: 'Field Placeholder',
      description:
        'Placed inside the field before a user has typed anything, a helpful hint for the format or expected value. Defaults to the field label above.',
    },
    {
      name: 'validation',
      type: 'string',
      descripton: 'Optional. What is the user expected to type?',
      options: {
        list: [
          {
            title: 'Email',
            value: 'email',
          },
          {
            title: 'Location',
            value: 'location',
          },
          {
            title: 'phone',
            value: 'Phone Number',
          },
        ],
      },
    },
  ],
}
