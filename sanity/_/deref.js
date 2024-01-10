import {WalkBuilder, deepCopy} from 'walkjs'
import {sanityClient} from 'sanity:client'

export const resolveLinks = async (inputData, maxDepth = 3) => {
  const store = new Map()

  const replaceNode = (node, id) => {
    const doc = store.get(id)
    if (['link'].includes(node.key)) {
      const values = {
        slug:
          doc._type === 'home'
            ? {_type: 'slug', current: '/'}
            : {
                _type: 'slug',
                current:
                  '/' + (doc.slug?.current ? doc.slug.fullUrl || doc.slug.current : `${doc._type}`),
              },
        label: node.parent?.val?.label,
        docType: doc._type,
      }

      const _key = node.val._key || node.parent.val._key || doc._key
      if (_key) {
        values._key = _key
      }

      Object.keys(node.parent.val).forEach((key) => delete node.parent.val[key])
      Object.keys(values).forEach((key) => {
        node.parent.val[key] = values[key]
      })
    } else {
      Object.keys(node.val).forEach((key) => delete node.val[key])
      Object.keys(doc).forEach((key) => {
        const value = doc[key]
        node.val[key] = typeof value === 'object' ? deepCopy(value) : value
      })
    }
  }

  const iterate = async (nodes) => {
    const ids = new Map()

    new WalkBuilder()
      .withGlobalFilter((a) => a.val && a.val._type === 'reference')
      .withSimpleCallback((node) => {
        const refId = node.val._ref
        if (typeof refId !== 'string') {
          throw new TypeError('node.val is not set')
        }

        if (!refId.startsWith('image-')) {
          if (!store.has(refId)) {
            // unresolved, add it to the list
            ids.set(refId, node)
          } else {
            // already resolved, can be replaced immediately
            replaceNode(node, refId)
          }
        }
      })
      .walk(nodes)

    if (ids.size) {
      // fetch all references at once
      const documents = await sanityClient.fetch(
        `*[_id in [${[...ids.keys()].map((id) => `'${id}'`).join(',')}]]{...}`
      )
      documents.forEach((element) => {
        store.set(element._id, element)
      })

      // replace them
      ids.forEach((node, id) => {
        replaceNode(node, id)
      })

      if (!--maxDepth) {
        console.error('Sanity autoresolver max depth reached')
        return
      }

      // iterate threw newly fetched nodes
      await iterate(nodes)
    }
  }

  await iterate(inputData)
}
