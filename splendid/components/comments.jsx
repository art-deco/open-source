import { loadStyle } from '@lemuria/load-scripts'
/* eslint-env browser */

export default class Comments {
  static 'load'(cb) {
    loadStyle('https://static.akashic.page/comments.css', cb)
  }
  render() {
    const s = document.createElement('script')
    s.src = 'https://static.akashic.page/akashic.js'
    s.onload = () => {
      document.getElementById('preact-div').innerText = ''
      window['Akashic']['comments']({
        'api_key': 'akashic',
        'privacy': 'https://art-deco.github.io/open-source/privacy-policy.html',
        'scope': '/open-source/',
        // 'host': 'http://localhost:5000',
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