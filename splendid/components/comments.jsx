import { loadStyle } from '@lemuria/load-scripts'
/* eslint-env browser */

export default class Comments {
  static 'load'(cb) {
    loadStyle('https://art-deco.github.io/open-source.artdeco.app/comments.css', cb)
  }
  render() {
    const s = document.createElement('script')
    s.src = 'https://art-deco.github.io/open-source.artdeco.app/comments.js'
    s.onload = function() {
      document.getElementById('preact-div').innerText = ''
      window['comments']({
        'container': 'preact-div',
        'scope': '/open-source/',
        // 'host': 'https://open-source.artdeco.app',
      })
    }
    document.body.appendChild(s)
    return (<div id="preact-div"/>)
  }
  /**
   *
   * @param {Object} param0
   * @param {Splendid} param0.splendid
   */
  async serverRender({ splendid }) {
    splendid.export()
    if (splendid.env != 'prod') {
      splendid.script('node_modules://preact/dist/preact.min.js', false)
      await splendid.addFile('node_modules://preact/dist/preact.min.js.map')
    }
    await splendid.addFile('service-worker.js')
    return (<div id="preact-div">Loading comments...</div>)
  }
}

/**
 * @typedef {import('splendid')} Splendid
 */