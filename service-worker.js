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
    "revision": "2d63517a703cd53e91558501456784bb"
  },
  {
    "url": "api/index.html",
    "revision": "ac4bbecde57082e6c3760bf6e2538cba"
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
    "url": "assets/js/18.4c9b68bd.js",
    "revision": "035ceff9a3841ac5394ed0688b625180"
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
    "url": "assets/js/app.2c2f5448.js",
    "revision": "35dfba89552390673c9da585e4c708b8"
  },
  {
    "url": "assets/js/vendors~docsearch.5833309f.js",
    "revision": "b9ba37cbecd73a1f696618890093c635"
  },
  {
    "url": "guide/advanced/dynamic-tab-info.html",
    "revision": "684c46fb9f49887d01e508e95e7d1881"
  },
  {
    "url": "guide/advanced/initial-tabs.html",
    "revision": "367010017254c93fbb38c6515dec7f89"
  },
  {
    "url": "guide/advanced/page-leave.html",
    "revision": "bc7d9ba0a03cd9e59706a60c0fae56aa"
  },
  {
    "url": "guide/advanced/slot.html",
    "revision": "a6bf661ddf7e2e0457fcaceab8a6a780"
  },
  {
    "url": "guide/advanced/transition.html",
    "revision": "a340468076118e2a0fd46b9cb5bdbd28"
  },
  {
    "url": "guide/essentials/i18n.html",
    "revision": "ae82171dacdc010bd5aae3eb5bbda2ad"
  },
  {
    "url": "guide/essentials/iframe.html",
    "revision": "8505f156a89878caacf63ec0d70aa96a"
  },
  {
    "url": "guide/essentials/index.html",
    "revision": "104434d8d87240fab72e01274eda3134"
  },
  {
    "url": "guide/essentials/operate.html",
    "revision": "eb3998303f4a98489bc1e8b344a8efd2"
  },
  {
    "url": "guide/essentials/rule.html",
    "revision": "e749465286dacb9005bf41e9d3f1672d"
  },
  {
    "url": "guide/index.html",
    "revision": "50ec37d263e47364d2662820b13738f1"
  },
  {
    "url": "guide/installation.html",
    "revision": "9b8d40ce903ac12bef1742dc70ea454e"
  },
  {
    "url": "guide/program.html",
    "revision": "3f993a0093adb6584dd96376924ef7b6"
  },
  {
    "url": "index.html",
    "revision": "9e748a8e005e28feb1ff8d4652ea8c48"
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
