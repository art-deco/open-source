import { makeElement } from '@svag/lib'
import win from '@svag/window'

/**
 * @param {Object} props
 * @param {import('splendid')} props.splendid
 */
export default function Window({
  splendid, title = 'Terminal',
  host = 'svag-macbook', user = 'svag', children, command = '',
  width = 350, height = 100,
}) {
  let [text] = children
  text = text.trim()
  const t = text.split('\n')
  t.unshift(`${host}:~ ${user}$ ${command}`)
  t.unshift(`Last login: ${new Date().toDateString()} on ttys013`)

  const lines = t.map((li, i) => {
    const line = makeElement('text', {
      attributes: {
        'font-family': 'Monaco, Courier',
        'font-size': '12px',
        x: 0,
        y: 10 + 17 * i,
      },
      content: li,
    })
    return line
  })

  const res = win({
    title,
    width,
    height,
    noStretch: true,
    content: lines,
    minify: true,
    // noShadow: true,
  })
  const b = res
    .replace('<?xml version="1.0" encoding="utf-8"?>', '')
    .replace(/transform="translate\((\d+),\s*(\d+)\)"/g, 'style="transform:translate($1px,$2px)"')
  return splendid.deferReplacement(b)
}