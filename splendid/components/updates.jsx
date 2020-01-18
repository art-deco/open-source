import { loadStyle } from '@lemuria/load-scripts'
import { Component } from 'preact'
/* eslint-env browser */

export default class Comments extends Component {
  static 'load'(cb) {
    loadStyle('https://static.akashic.page/comments.css', cb)
  }
  render() {
    const s = document.createElement('script')
    s.src = 'https://static.akashic.page/akashic.js'
    s.onload = () => {
      window['Akashic']['updates']({
        'container': 'preact-updates',
        'api_key': 'akashic',
        'privacy': 'https://art-deco.github.io/open-source/privacy-policy.html',
        'scope': '/open-source/',
        // 'host': 'http://localhost:5000',
      })
    }
    document.body.appendChild(s)
    return (<p>
      Thanks for visiting this web-page. To be notified of updates, please subscribe to web-push notifications using this button. <span id="preact-updates" />
    </p>)
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
    return (<div>Loading widget...</div>)
  }
}

/**
 * @typedef {import('splendid')} Splendid
 */