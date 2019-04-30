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
    "revision": "0f1668fdcef9a0d473872b5752d14796"
  },
  {
    "url": "api/index.html",
    "revision": "ab152fdf90f5c8050aaa0e98e76362f2"
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
    "url": "assets/js/app.1b60eefa.js",
    "revision": "3ef0c48e65f1fd89ec1b5633ab7daa77"
  },
  {
    "url": "assets/js/vendors~docsearch.ee775039.js",
    "revision": "7cd5d5fe58e6f54d0975553a2d4235d2"
  },
  {
    "url": "guide/advanced/dynamic-tab-info.html",
    "revision": "5c61a810e987b1eba3d23a198e81dfea"
  },
  {
    "url": "guide/advanced/initial-tabs.html",
    "revision": "a715592e62ab2022fcf880fe341e7c39"
  },
  {
    "url": "guide/advanced/page-leave.html",
    "revision": "26932fb1d8562d5165d5b7f342fba926"
  },
  {
    "url": "guide/advanced/slot.html",
    "revision": "a756c4fc8ce387fbe4eae7feadcf8d8f"
  },
  {
    "url": "guide/advanced/transition.html",
    "revision": "0c686488114581658c1411e8abebeb9c"
  },
  {
    "url": "guide/essentials/i18n.html",
    "revision": "d00a4f02997b50bc95544b3e03590a09"
  },
  {
    "url": "guide/essentials/iframe.html",
    "revision": "7c2b5764110310c1c5fac6dd3ccfdab8"
  },
  {
    "url": "guide/essentials/index.html",
    "revision": "22281c716c3c108145767f60baa5bf2f"
  },
  {
    "url": "guide/essentials/operate.html",
    "revision": "13b00d0095ef4a2009adf2486e15402d"
  },
  {
    "url": "guide/essentials/rule.html",
    "revision": "f389cf14c41bb34259e9dac04ea9c791"
  },
  {
    "url": "guide/index.html",
    "revision": "73756a80fcd1ecd3dc5006a79053ebd0"
  },
  {
    "url": "guide/installation.html",
    "revision": "55245afbe7a3de9b4ada9896706a3d0b"
  },
  {
    "url": "index.html",
    "revision": "f4ac78061bdb311aa65156630b9dc39c"
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
