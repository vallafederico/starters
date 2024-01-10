import {pageDefaultsGroups, pageDefaultsSeo} from './_pageDefaults'
import {HiDocumentText} from 'react-icons/hi'
import {SlugInput} from 'sanity-plugin-prefixed-slug'
import {PageAttributes} from '../types'

const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')

const defaultOptions = {
  slug: true,
  prefixedSlug: null,
  seo: true,
  title: true,
  slices: true,
  icon: HiDocumentText,
  fields: [],
}

export const createPage = (title, name, options = {}): PageAttributes => {
  const optionFields = []
  const allGroups = [...pageDefaultsGroups]

  if (options.slug) {
    optionFields.push({
      name: 'slug',
      description: 'Click generate to build a URL for this page.',
      title: 'Slug',
      group: 'content',
      initialValue: slugify(title),
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required().error('This page needs a slug'),
    })
  } else if (options.prefix) {
    optionFields.push({
      name: 'slug',
      description: 'Click generate to build a URL for this page.',
      title: 'Slug',
      group: 'content',
      type: 'slug',
      initialValue: slugify(title),
      components: {
        input: SlugInput,
      },
      options: {
        source: 'title',
        urlPrefix: `${options.prefix || slugify(title)}/`,
        storeFullUrl: true,
      },
      validation: (Rule) => Rule.required().error('This page needs a slug'),
    })
  }

  if (options.fields) {
    optionFields.push(...options.fields)
  }

  if (options.slices !== false) {
    optionFields.push({
      name: 'slices',
      title: 'Slices',
      group: 'content',
      // Allow custom slice arrays
      type: typeof options.slices === 'string' ? `${options.slices}` : 'pageSlices',
    })
  } else if (options.body) {
    optionFields.push({
      name: 'body',
      group: 'content',
      type: 'blockContent',
    })
  }

  if (options.seo !== false) {
    optionFields.push(...pageDefaultsSeo)
  }

  if (options?.groups && options?.groups?.length) {
    allGroups.push(...options.groups)
  }

  return {
    type: 'document',
    title,
    name,
    icon: options.icon || defaultOptions.icon,
    groups: allGroups,
    fields: [
      {
        name: 'title',
        initialValue: options.prefix ? '' : title,
        type: 'string',
        group: 'content',
        validation: (Rule) => Rule.required(),
        title: 'Page Title',
      },
      ...optionFields,
    ],
    preview: {
      select: {
        title: 'title',
        slug: 'slug',
      },
      prepare(select) {
        const {title, slug} = select
        return {
          title,
          subtitle: slug && options?.prefix && (slug.fullUrl || slug.current || ''),
          icon: options.icon || defaultOptions.icon,
        }
      },
    },
  }
}

export default createPage
