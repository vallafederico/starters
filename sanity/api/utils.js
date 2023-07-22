import { useSanityClient } from "astro-sanity";
import { createImageBuilder } from "astro-sanity";
// import { portableTextToHtml } from "astro-sanity";

// imageBuilder
export const imageBuilder = createImageBuilder(useSanityClient());

export function urlForImage(source) {
  return imageBuilder.image(source);
}

export function getSrc(image) {
  if (image) return urlForImage(image).url();
}
