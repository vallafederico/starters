import {IconType} from 'react-icons'
import {ObjectField} from 'sanity'

export interface PageAttributes {
  title: string
  name: string
  options: {
    slug?: string
    icon: IconType
    slices?: false | 'homeSlices' | 'pageSlices' // Adds slice array to add sections in visually-based pages
  }
  prefix?: string // Add prefix to slug, i.e "/blog/..."
  seo?: boolean // Add SEO attributes to page

  body?: boolean // Adds a rich text field for text-based pages
  fields?: Array<ObjectField> // Add extra fields on top of defaults
}
