import {useSanityClient, groq} from 'astro-sanity'
import {resolveLinks} from './deref.js'

// export async function getRef(ref) {
//   const query = groq`*[_id == '${ref}']`
//   const data = await useSanityClient().fetch(query)
//   return data
// }

export async function getType(type) {
  const query = groq`*[_type == "${type}"]`
  const data = await useSanityClient()
    .fetch(query)
    // deref
    .then(async (data) => {
      await resolveLinks(data)
      return data
    })

  return data
}

/** -- --  Astro */
export async function getPages(name) {
  const data = await getType(name)

  return data.map((d) => {
    return {
      params: {smth: data.slug.current},
      props: d,
    }
  })
}

/**
 *   /[...smth].astro
 */

export async function getStaticPaths() {
  const data = await getPages()
  //   data.forEach((item, i) => {
  //     // console.log(item)
  //     if (i === 9) {
  //       item.props.next = data[0].props;
  //     } else {
  //       item.props.next = data[i + 1].props;
  //     }
  //   });

  return data
}

// const { smth } = Astro.params;
// const { ... } = Astro.props;
