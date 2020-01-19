/**
 * @param {Object} props
 * @param {Splendid} props.splendid
 */
export default function Pages({ splendid, dir }) {
  const { pages, page: { key } } = splendid
  const menuPages = pages.filter(({ dir: d }) => {
    if (dir) return d == dir
    if (!d) return true
  })
  const ajax = (<ul>
    {menuPages.map(({
      title, menu = title, url, menuUrl = url, file, key: k,
    }) => {
      const active = k == key
      return (<li className={active ? 'Active' : ''}>
        <a data-file={file} href={menuUrl}>{menu}</a>
      </li>)
    }
    )}
  </ul>)
  return ajax
}

/**
 * @typedef {import('splendid')} Splendid
 */