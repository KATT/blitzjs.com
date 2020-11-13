import { importAll } from 'app/utils/importAll'

export function createPageList(files, base) {
  return importAll(files).reduce((acc, cur) => {
    let slug = cur.fileName.substr(2).replace(/\.mdx$/, '')
    return {
      ...acc,
      [slug]: { ...cur.module.meta, href: `/${base}/${slug}` },
    }
  }, {})
}
