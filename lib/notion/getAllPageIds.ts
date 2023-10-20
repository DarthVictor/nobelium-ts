import { ExtendedRecordMap } from 'notion-types'

export default function getAllPageIds (collectionQuery: ExtendedRecordMap['collection_query']) {
  const views = Object.values(collectionQuery)[0]
  let pageIds = []
  const pageSet = new Set<string>()
  Object.values(views).forEach(view => {
    view?.collection_group_results?.blockIds?.forEach(id => pageSet.add(id))
  })
  pageIds = Array.from(pageSet)
  return pageIds
}
