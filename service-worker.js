/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "73a8fcfed616242663da737b8ea70a1c"
  },
  {
    "url": "api/index.html",
    "revision": "a02fb19906cb4c59e9267f22603cb34e"
  },
  {
    "url": "assets/css/0.styles.bd0fd1ed.css",
    "revision": "3c3a769589d68afa60459c000321a43d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.5546a4c5.js",
    "revision": "cef9e679b25a6565c40db12046725ae9"
  },
  {
    "url": "assets/js/11.190b306c.js",
    "revision": "fc3ee5c1e8234f06c184f81d1aca23a6"
  },
  {
    "url": "assets/js/12.e5c071e5.js",
    "revision": "c0f9483a7a6f660532f98958f9e4ad4e"
  },
  {
    "url": "assets/js/13.e19bb64c.js",
    "revision": "4b8bb747b21c87561a2156005322dccf"
  },
  {
    "url": "assets/js/14.7c363a96.js",
    "revision": "c5e7c1ff976fd4b619abca2ebf4f1e78"
  },
  {
    "url": "assets/js/15.63c7ceb4.js",
    "revision": "88b55697dda5a7816f3d715cf7e61afb"
  },
  {
    "url": "assets/js/16.37299d5a.js",
    "revision": "dc0fa4410d9a262649f526a200ceec7a"
  },
  {
    "url": "assets/js/17.4f915972.js",
    "revision": "6e7b1f3456423550144a4dea182e298d"
  },
  {
    "url": "assets/js/18.61e77a01.js",
    "revision": "de5ee3905d0bdbb8fbe08539fc041340"
  },
  {
    "url": "assets/js/19.f7d4464a.js",
    "revision": "848e2e123d0f27142ef4110cef1c1fa3"
  },
  {
    "url": "assets/js/20.c593179d.js",
    "revision": "fd6c7576bc2519e4a7c7583814c0f868"
  },
  {
    "url": "assets/js/21.449d50d8.js",
    "revision": "f8bcbcd1e64ce60c8d51eca10817f321"
  },
  {
    "url": "assets/js/22.393b6aa0.js",
    "revision": "fec9135f8e46272714e0286f4e20784d"
  },
  {
    "url": "assets/js/23.843ab127.js",
    "revision": "10604d70255f5bc5ca0b44e5dbe7d7a8"
  },
  {
    "url": "assets/js/3.b1d06ce1.js",
    "revision": "5b67aa18e9c4a194392f960f125d95d8"
  },
  {
    "url": "assets/js/4.9e98fbc9.js",
    "revision": "1940840eb7359e8ad07b6499868e47fb"
  },
  {
    "url": "assets/js/5.2790875b.js",
    "revision": "601990acfa9cc89f16399e0154af6bc3"
  },
  {
    "url": "assets/js/6.ba93bf5f.js",
    "revision": "572883ae449bfe51aed92f05f58504b1"
  },
  {
    "url": "assets/js/7.3ad8f694.js",
    "revision": "1614f00e00ee6c579c9300615aaae559"
  },
  {
    "url": "assets/js/8.e06d2653.js",
    "revision": "bd5ed4ad1364aabffa2bbc107d909db2"
  },
  {
    "url": "assets/js/9.ead01828.js",
    "revision": "a13d3b8fc299dde83e8471bafc380f41"
  },
  {
    "url": "assets/js/app.d24450de.js",
    "revision": "838d1c39d9cebd4c8a95206a7bea990d"
  },
  {
    "url": "assets/js/vendors~docsearch.ee775039.js",
    "revision": "7cd5d5fe58e6f54d0975553a2d4235d2"
  },
  {
    "url": "guide/advanced/dynamic-tab-info.html",
    "revision": "b5c3143cd5ed604a3088817fb89f5108"
  },
  {
    "url": "guide/advanced/initial-tabs.html",
    "revision": "55aa6a2a6cc9d8ed03e1e7810a4df839"
  },
  {
    "url": "guide/advanced/page-leave.html",
    "revision": "8cabcfc87e9347197e80e1b3dd229d27"
  },
  {
    "url": "guide/advanced/slot.html",
    "revision": "f0f8569f03bc91175cd78fa53fe26c00"
  },
  {
    "url": "guide/advanced/transition.html",
    "revision": "8616c1a79e4e74aa4ded1a2230ff711a"
  },
  {
    "url": "guide/essentials/i18n.html",
    "revision": "7faf258cb2c9d7cd879e31e2a56db2e8"
  },
  {
    "url": "guide/essentials/iframe.html",
    "revision": "b1021084a69d346f4486f7e22e542680"
  },
  {
    "url": "guide/essentials/index.html",
    "revision": "62d7852d3778f503409ebc0950c79266"
  },
  {
    "url": "guide/essentials/operate.html",
    "revision": "46b69f95d9921af413b6b25d5e3f6502"
  },
  {
    "url": "guide/essentials/rule.html",
    "revision": "68bb6870bf03ce7784c873950dbcb0f5"
  },
  {
    "url": "guide/index.html",
    "revision": "5d00d0c5009076219bdcd3a68c8b6e86"
  },
  {
    "url": "guide/installation.html",
    "revision": "664583a8104aaa83cc94fedb8be77844"
  },
  {
    "url": "index.html",
    "revision": "d8068385b62fa9d09e15d28ff860eecd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
