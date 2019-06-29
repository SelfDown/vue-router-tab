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
    "revision": "cc284b7692ef45f8858d27c9730aaebb"
  },
  {
    "url": "api/index.html",
    "revision": "778a3d534bd35bce008c42c84006aa8e"
  },
  {
    "url": "assets/css/0.styles.4ab8cd29.css",
    "revision": "3cad2325683ad7dc49fbbf3e21e51ee8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a3b896d4.js",
    "revision": "d1e130bfc296b6b91efb88ddd7a0d8ee"
  },
  {
    "url": "assets/js/11.7898f085.js",
    "revision": "76357a30116269a3d713a3068c761ecd"
  },
  {
    "url": "assets/js/12.095148e7.js",
    "revision": "26abbab565849b7273a2fa0b6f9ded8d"
  },
  {
    "url": "assets/js/13.21b90fa6.js",
    "revision": "cbac27a34f92e8cd4d19e639ac8fdc08"
  },
  {
    "url": "assets/js/14.b9c64309.js",
    "revision": "e05755dee526ae5a7b831a2ded50203e"
  },
  {
    "url": "assets/js/15.998c7f6a.js",
    "revision": "e43b12440f0d51fe2fe9a92aac678550"
  },
  {
    "url": "assets/js/16.4521af48.js",
    "revision": "1abcee6be61b20ca89447ca8139a45eb"
  },
  {
    "url": "assets/js/17.cb5dc931.js",
    "revision": "7a2f5deb848765eeae8853cb54850f60"
  },
  {
    "url": "assets/js/18.b513d9b5.js",
    "revision": "99231b91ca7cf4602d225d6ab4186109"
  },
  {
    "url": "assets/js/19.3c61a97d.js",
    "revision": "5373281f1c0b5411eefccbaf96bf0e5e"
  },
  {
    "url": "assets/js/20.b1573474.js",
    "revision": "37915709fe768462dbed9908bac881a8"
  },
  {
    "url": "assets/js/21.2444f6f2.js",
    "revision": "99b43e281567e26d31fb61d86d2e3088"
  },
  {
    "url": "assets/js/22.25b8d1aa.js",
    "revision": "fe04d597cc85688faef4b4317fac2192"
  },
  {
    "url": "assets/js/23.14d53211.js",
    "revision": "dc554718983fc7bc9e374c8dbd1b64c2"
  },
  {
    "url": "assets/js/24.e0b58c4b.js",
    "revision": "f460928b6269c000e79e853f7f736433"
  },
  {
    "url": "assets/js/3.41776525.js",
    "revision": "2cb3f560b2ecdf5661f12d81bacc9b4c"
  },
  {
    "url": "assets/js/4.10096eb1.js",
    "revision": "1724d3ee0727941eeff5e320d7702016"
  },
  {
    "url": "assets/js/5.7301ec6b.js",
    "revision": "8480e1b317b0a6205315276fd04f9d4f"
  },
  {
    "url": "assets/js/6.04946911.js",
    "revision": "3cb9e4a1303d5bd4323db66c3b61d191"
  },
  {
    "url": "assets/js/7.5ee3ee76.js",
    "revision": "5edfb0594ad43c2baf2592e50e65adad"
  },
  {
    "url": "assets/js/8.1adabd66.js",
    "revision": "3dade9b9005ec57aced1fb6b8922092f"
  },
  {
    "url": "assets/js/9.affa2e35.js",
    "revision": "92bdb010db2a5e514d09f5488c6a9140"
  },
  {
    "url": "assets/js/app.d79520c2.js",
    "revision": "df31554107b6e1430e69d4ef9717f6da"
  },
  {
    "url": "assets/js/vendors~docsearch.219b40d1.js",
    "revision": "89d0e76e085785233b13ca89fa7af68a"
  },
  {
    "url": "guide/advanced/dynamic-tab-info.html",
    "revision": "14f8f6237a6741386eb01a4c3f835c8c"
  },
  {
    "url": "guide/advanced/initial-tabs.html",
    "revision": "2e49d5d4d7f1601140b69a8e316f6e2c"
  },
  {
    "url": "guide/advanced/page-leave.html",
    "revision": "3dc76cf5ce701d6c09b4b22bfeea04ee"
  },
  {
    "url": "guide/advanced/slot.html",
    "revision": "5a0e189e116bb573c4ce4831c86e08c5"
  },
  {
    "url": "guide/advanced/transition.html",
    "revision": "6294cb8f32c03fa0e09a651b2f5e8ea4"
  },
  {
    "url": "guide/essentials/i18n.html",
    "revision": "fc42d4dbfd0cf226269ce2a55bca1911"
  },
  {
    "url": "guide/essentials/iframe.html",
    "revision": "acbe9ddf83cf1f5940b8a32e02687aee"
  },
  {
    "url": "guide/essentials/index.html",
    "revision": "269ea464483a66012dc3e7132796f918"
  },
  {
    "url": "guide/essentials/operate.html",
    "revision": "1f2c2c58f952a01324dcddb25b05cb30"
  },
  {
    "url": "guide/essentials/rule.html",
    "revision": "206e8bdb06d9d0f5749014b689b04595"
  },
  {
    "url": "guide/index.html",
    "revision": "cae0d5775c41ff25f261284b33fb4ab5"
  },
  {
    "url": "guide/installation.html",
    "revision": "6b83f0a175183d34ef9223ad48b05f43"
  },
  {
    "url": "guide/program.html",
    "revision": "8240d59fc63713a7679874fbb6836047"
  },
  {
    "url": "index.html",
    "revision": "0c3e207fde9ce97287858b9a21d69b53"
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
