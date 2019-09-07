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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4321d6f26784628f47f00fb37ecaf0e7"
  },
  {
    "url": "api/index.html",
    "revision": "e22a8757b7a317cb4e5f245dc373deb3"
  },
  {
    "url": "assets/css/0.styles.6bca01ca.css",
    "revision": "c62ba219b60d30fc102bdd0cacfb7633"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.eec190dc.js",
    "revision": "0c6f4627434c8bafe76bf05e56fd142b"
  },
  {
    "url": "assets/js/11.dc7ada8f.js",
    "revision": "76357a30116269a3d713a3068c761ecd"
  },
  {
    "url": "assets/js/12.b13805b0.js",
    "revision": "b9380e8616b81e086b9fdbe8d599aa99"
  },
  {
    "url": "assets/js/13.0a7935cb.js",
    "revision": "99d844a6da95f98b2b021cf8f1e17ad9"
  },
  {
    "url": "assets/js/14.ae6fad80.js",
    "revision": "da398499750a2ba52a6c1c1f8720bd84"
  },
  {
    "url": "assets/js/15.8c64b76d.js",
    "revision": "88b4c3472c3abd6cddf9678fe012afb9"
  },
  {
    "url": "assets/js/16.18cb450e.js",
    "revision": "4666908bfb2b3aeae7a8c91183d00441"
  },
  {
    "url": "assets/js/17.920a4bd8.js",
    "revision": "922c9afd269e99c55cb0e4147b17d700"
  },
  {
    "url": "assets/js/18.8096bbd5.js",
    "revision": "611afaa4484bede365fa9e3bbc51dac0"
  },
  {
    "url": "assets/js/19.67853390.js",
    "revision": "4c71bcb67d5b1840274d19dde39ac420"
  },
  {
    "url": "assets/js/20.3ce9af6e.js",
    "revision": "f1518e76867b0059544c2926b7520f73"
  },
  {
    "url": "assets/js/21.de334d42.js",
    "revision": "1641ed1f32121e853353a3010693638f"
  },
  {
    "url": "assets/js/22.f1ffde22.js",
    "revision": "1e6e21d34611090f424d686e2d38ca13"
  },
  {
    "url": "assets/js/23.c09569db.js",
    "revision": "dc554718983fc7bc9e374c8dbd1b64c2"
  },
  {
    "url": "assets/js/24.0c7e9d23.js",
    "revision": "f460928b6269c000e79e853f7f736433"
  },
  {
    "url": "assets/js/3.14ec4fef.js",
    "revision": "2cb3f560b2ecdf5661f12d81bacc9b4c"
  },
  {
    "url": "assets/js/4.2bbb57fa.js",
    "revision": "2327daad5a200f93c45e70d1ff03ab4e"
  },
  {
    "url": "assets/js/5.b9c20eae.js",
    "revision": "69da9fb88636e033f3b9e65c1fe7dd01"
  },
  {
    "url": "assets/js/6.9cd0eff6.js",
    "revision": "f9b24dae4e257eb9ce244abdab371027"
  },
  {
    "url": "assets/js/7.8d575d95.js",
    "revision": "5edfb0594ad43c2baf2592e50e65adad"
  },
  {
    "url": "assets/js/8.f68210dd.js",
    "revision": "3dade9b9005ec57aced1fb6b8922092f"
  },
  {
    "url": "assets/js/9.5dfdbb62.js",
    "revision": "92bdb010db2a5e514d09f5488c6a9140"
  },
  {
    "url": "assets/js/app.ba84f338.js",
    "revision": "7d21fad9b9e569d2be2545861b5b46db"
  },
  {
    "url": "assets/js/vendors~docsearch.5833309f.js",
    "revision": "b9ba37cbecd73a1f696618890093c635"
  },
  {
    "url": "guide/advanced/dynamic-tab-info.html",
    "revision": "48422d28d7c8184526088ee5cb530982"
  },
  {
    "url": "guide/advanced/initial-tabs.html",
    "revision": "063112fa6733cc48933b89587b9babdd"
  },
  {
    "url": "guide/advanced/page-leave.html",
    "revision": "dab72d780b07013737e1d3e4c632e26f"
  },
  {
    "url": "guide/advanced/slot.html",
    "revision": "090d2061a336c2033c2bf4e5cadce33b"
  },
  {
    "url": "guide/advanced/transition.html",
    "revision": "bff77fd4b8e63f8a189aa9b0525a1dd0"
  },
  {
    "url": "guide/essentials/i18n.html",
    "revision": "2e621c39ceefaf603b535c3c4b365a9a"
  },
  {
    "url": "guide/essentials/iframe.html",
    "revision": "f4d26f3f91e496da84a78dc06661c5de"
  },
  {
    "url": "guide/essentials/index.html",
    "revision": "e9008c0503f6a5310d5c16b3c0319b13"
  },
  {
    "url": "guide/essentials/operate.html",
    "revision": "4715dfa995f4c49083fefa0568bed2db"
  },
  {
    "url": "guide/essentials/rule.html",
    "revision": "2d5e087dc35e6bab6f7668a389772934"
  },
  {
    "url": "guide/index.html",
    "revision": "e9d7ee47e6407345a49b1ab7229fcb67"
  },
  {
    "url": "guide/installation.html",
    "revision": "6340a8f155812b50f417e2ba15c89fc0"
  },
  {
    "url": "guide/program.html",
    "revision": "0941783b4a44519d932749834ee8aeb5"
  },
  {
    "url": "index.html",
    "revision": "a952fd1f76b3e9988895d89d83f5bc32"
  }
].concat(self.__precacheManifest || []);
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
