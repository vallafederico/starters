import imageUrlBuilder from '@sanity/image-url'
import {sanityClient} from 'sanity:client'

// imageBuilder
export const imageBuilder = imageUrlBuilder(sanityClient)

/* ---- Sanity Image Builder ----
.size(w | 0, (h / aspectRatio) | 0)
  .fit('crop')
  .auto('format') // -> converts to webp
  .quality(77)
  .url()
*/

export function urlForImage(source, {url = false, quality = 50, width = 720} = {}) {
  const img = imageBuilder.image(source).auto('format').quality(quality).width(width)

  if (url) return img.url()
  return img
}
