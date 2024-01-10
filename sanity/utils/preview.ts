export const createPreview = (
  titleFieldName: string,
  subtitleFieldName?: string,
  mediaFieldName?: string
) => {
  // These can be undefined so this is fine
  const selectors = {
    title: titleFieldName,
    subtitle: subtitleFieldName,
  }

  // Media cant be undefined, so only add it to object if its defined
  if (mediaFieldName) {
    selectors.media = mediaFieldName
  }

  const preview = {
    select: selectors,
    prepare(previewParts: object) {
      return {
        ...previewParts,
      }
    },
  }
  return preview
}
