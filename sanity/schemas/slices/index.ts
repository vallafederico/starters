// import hero from './hero'

const sortAlpha = (a, b) => {
  return a.name.localeCompare(b.name)
}

const globalPageSlices = [
  // hero,
]
const contentPageSlices = [
  // hero,
]
const homeSlices = [
  // hero,
]

// Create page slices type that acts as a base for all types of slices to be dropped into
const pageSlices = {
  name: 'pageSlices',
  title: 'Page slices',
  description: 'Each section of the page can be edited here',
  type: 'array',
  of: [...contentPageSlices.sort((a, b) => sortAlpha(a, b)).map((slice) => ({type: slice.name}))],
}

const homePageSlices = {
  name: 'homeSlices',
  title: 'Page Slices',
  description: 'Each section of the page can be edited here',
  type: 'array',
  of: [...homeSlices.sort((a, b) => sortAlpha(a, b)).map((slice) => ({type: slice.name}))],
}

// Create an array from all of the slice types so that sanity can iterate on them
const allSlices = Array.from(new Set([...globalPageSlices]))

export default [pageSlices, ...allSlices, homePageSlices]
