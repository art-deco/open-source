import makeClassGetter from './__mcg'
const renameMaps = {  }
import { Component, render, h } from '@externs/preact'
import { makeIo, init, start } from './__competent-lib'
import AkashicEmails from '../components/akashic-emails.jsx'
import GithubBadge from '../components/github-badge.jsx'
import SocialButtons from 'splendid/build/components/social-buttons'

const __components = {
  'akashic-emails': AkashicEmails,
  'github-badge': GithubBadge,
  'social-buttons': SocialButtons,
}

const io = makeIo()

/** @type {!Array<!preact.PreactProps>} */
const meta = [{
  key: 'social-buttons',
  id: 'cf97d',
  props: {
    url: 'https://art-deco.github.io/open-source/privacy-policy.html',
    meta: true,
    className: 'b-xq b-Hk',
  },
},
{
  key: 'akashic-emails',
  id: 'emails-div',
  props: {
    'api-key': 'akashic',
  },
},
{
  key: 'github-badge',
  id: 'ce823',
  props: {
    owner: 'art-deco',
    name: 'open-source',
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
