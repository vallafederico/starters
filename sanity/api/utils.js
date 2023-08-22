import {useSanityClient} from 'astro-sanity'
import {createImageBuilder} from 'astro-sanity'
// import { portableTextToHtml } from "astro-sanity";

// imageBuilder
export const imageBuilder = createImageBuilder(useSanityClient())

/* ---- Sanity Image Builder ----
.size(w | 0, (h / aspectRatio) | 0)
  .fit('crop')
  .auto('format') // -> converts to webp
  .quality(77)
  .url()
*/

export function urlForImage(source) {
  return imageBuilder.image(source).auto('format').quality(77)
}

// export function getSrc(image) {
//   if (image) return urlForImage(image).url();
// }

// ++++ add astro image pipeline
