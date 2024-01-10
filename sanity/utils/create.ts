// import f

export const createField = (name: string, type?: string, title?: string, extra?: any) => {
  return {
    name,
    type,
    title,
    ...extra,
  }
}

export const createTaxo = (name: string, title: string, fields: Array<object>, ...extra: any) => {
  return {
    name,
    title,
    type: 'document',
    fields: [...fields],
    ...extra,
  }
}
