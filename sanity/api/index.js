import { useSanityClient, groq } from "astro-sanity";

/** -- Generic Queries */
// export async function getSetting() {
//   const query = groq`*[_type == "settings"]`;
//   const settings = await useSanityClient().fetch(query);
//   return settings;
// }

export async function getType(type) {
  const query = groq`*[_type == "${type}"]`;
  const settings = await useSanityClient().fetch(query);
  return settings;
}

export async function getRef(ref) {
  const query = groq`*[_id == '${ref}']`;
  const settings = await useSanityClient().fetch(query);
  return settings;
}

/** -- Astro */
export async function getPages() {
  const data = await getChar();

  return data.map((d) => {
    return {
      params: { smth: char.slug.current },
      props: d,
    };
  });
}

/**
 *   /[...smth].astro
 */

export async function getStaticPaths() {
  const data = await getPages();
  //   data.forEach((item, i) => {
  //     // console.log(item)
  //     if (i === 9) {
  //       item.props.next = data[0].props;
  //     } else {
  //       item.props.next = data[i + 1].props;
  //     }
  //   });

  return data;
}

// const { smth } = Astro.params;
// const { ... } = Astro.props;
