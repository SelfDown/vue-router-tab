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
    "revision": "3dc475064b971daa03d73daea699a0b7"
  },
  {
    "url": "api/index.html",
    "revision": "aae47e8637cd9bdf4a7cf2e31a83af3c"
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
    "url": "assets/js/10.4b3f7b8f.js",
    "revision": "1617ec083622c85ffabaf026f5094b8e"
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
    "url": "assets/js/21.a0553a26.js",
    "revision": "8da09ea35b8ff28bd55a9df15774b8c0"
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
    "url": "assets/js/app.267e90e5.js",
    "revision": "de3a8c62adbdae58c831e9e9f4c8b846"
  },
  {
    "url": "assets/js/vendors~docsearch.219b40d1.js",
    "revision": "89d0e76e085785233b13ca89fa7af68a"
  },
  {
    "url": "guide/advanced/dynamic-tab-info.html",
    "revision": "ba22c6fb60cef1bfd1e2448f9605d608"
  },
  {
    "url": "guide/advanced/initial-tabs.html",
    "revision": "222db00fdffca57455b3889108a1615a"
  },
  {
    "url": "guide/advanced/page-leave.html",
    "revision": "bdcc8634650b1ae95b91d487ece7b8d6"
  },
  {
    "url": "guide/advanced/slot.html",
    "revision": "a449e7d3dc93a26a6c667dbf75823057"
  },
  {
    "url": "guide/advanced/transition.html",
    "revision": "f2c9daeb0f5417c8e1806b3596db0820"
  },
  {
    "url": "guide/essentials/i18n.html",
    "revision": "73864e73534ddce9daa716a9377904f2"
  },
  {
    "url": "guide/essentials/iframe.html",
    "revision": "51520609c870913ee44f7ce68ce7bd25"
  },
  {
    "url": "guide/essentials/index.html",
    "revision": "bbcc199b1213521a93250eb4e83694fd"
  },
  {
    "url": "guide/essentials/operate.html",
    "revision": "5bbf9e1622e0189eaa0bfdcd8dae0d00"
  },
  {
    "url": "guide/essentials/rule.html",
    "revision": "63c061c50b63417ff906df8c78a0ee26"
  },
  {
    "url": "guide/index.html",
    "revision": "1f5f59787730feb805a78b354c7bd5f1"
  },
  {
    "url": "guide/installation.html",
    "revision": "000d786ec612a128c36746710c507ded"
  },
  {
    "url": "guide/program.html",
    "revision": "39776fdfebdca8e7cf62f025e47f2d70"
  },
  {
    "url": "index.html",
    "revision": "0ab2abcd37570204e7afada0feba5329"
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
