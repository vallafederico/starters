import {BsTextLeft} from 'react-icons/bs'

export default {
  name: 'textarea',
  icon: BsTextLeft,
  title: 'Long Text Field',
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
  ],
}
