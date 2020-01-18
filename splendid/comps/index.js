import makeClassGetter from './__mcg'
const renameMaps = {  }
import { Component, render, h } from '@externs/preact'
import { makeIo, init, start } from './__competent-lib'
import GithubBadge from '../components/github-badge.jsx'
import SocialButtons from 'splendid/build/components/social-buttons'
import Updates from '../components/updates.jsx'

const __components = {
  'github-badge': GithubBadge,
  'social-buttons': SocialButtons,
  'updates': Updates,
}

const io = makeIo()

/** @type {!Array<!preact.PreactProps>} */
const meta = [{
  key: 'updates',
  id: 'cc786',
},
{
  key: 'github-badge',
  id: 'ce823',
  props: {
    owner: 'art-deco',
    name: 'open-source',
  },
},
{
  key: 'social-buttons',
  id: 'c7d80',
  props: {
    url: 'https://art-deco.github.io/open-source/',
    meta: true,
    className: 'b-xq b-Hk',
  },
}]
meta.forEach(({ key, id, props = {}, children = [] }) => {
  const Comp = __components[key]
  const plain = Comp.plain || (/^\s*class\s+/.test(Comp.toString()) && !Component.isPrototypeOf(Comp))
  props.splendid = { mount: '/open-source/', addCSS(stylesheet) {
    return makeClassGetter(renameMaps[stylesheet])
  } }

  const ids = id.split(',')
  ids.forEach((Id) => {
    const { parent, el } = init(Id, key)
    if (!el) return
    const renderMeta = /** @type {_competent.RenderMeta} */ ({ key, id: Id, plain })
    let comp
    el.render = () => {
      comp = start(renderMeta, Comp, comp, el, parent, props, children, { render, Component, h })
      return comp
    }
    el.render.meta = renderMeta
    io.observe(el)
  })
})
