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
    "revision": "0fd5df9c1f321a8bdaafaa61e19ac567"
  },
  {
    "url": "api/index.html",
    "revision": "030c62c19176e29394e607df5f9f6d58"
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
    "url": "assets/js/15.30768dba.js",
    "revision": "0469063d1e4c3615272ca38000e598d3"
  },
  {
    "url": "assets/js/16.4521af48.js",
    "revision": "1abcee6be61b20ca89447ca8139a45eb"
  },
  {
    "url": "assets/js/17.f1a44713.js",
    "revision": "1d732aef742cd6bbdb84853d1253c1b5"
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
    "url": "assets/js/app.1306a2a0.js",
    "revision": "d3e99605b37e2ccc4d570d748cbb6719"
  },
  {
    "url": "assets/js/vendors~docsearch.219b40d1.js",
    "revision": "89d0e76e085785233b13ca89fa7af68a"
  },
  {
    "url": "guide/advanced/dynamic-tab-info.html",
    "revision": "47d42961be63274d4fc0273cf9d1d460"
  },
  {
    "url": "guide/advanced/initial-tabs.html",
    "revision": "a5ef423651fbfb1de5f19b5500e9698e"
  },
  {
    "url": "guide/advanced/page-leave.html",
    "revision": "fd6e6ff90141d51bd3bf50fd11750dea"
  },
  {
    "url": "guide/advanced/slot.html",
    "revision": "2e6d407395ef29c9eddae85664903daf"
  },
  {
    "url": "guide/advanced/transition.html",
    "revision": "4f2f0cb90dc8197790545143a3b87d21"
  },
  {
    "url": "guide/essentials/i18n.html",
    "revision": "009661952bfff6cd87f52e138954f140"
  },
  {
    "url": "guide/essentials/iframe.html",
    "revision": "2dfcfa6e2e620fb8a37c1d0f2008458e"
  },
  {
    "url": "guide/essentials/index.html",
    "revision": "a647a39ef6aea75436f1b4f480823344"
  },
  {
    "url": "guide/essentials/operate.html",
    "revision": "1ec0bce6455a14ca59a328d0dc42d81e"
  },
  {
    "url": "guide/essentials/rule.html",
    "revision": "4063a10f9041bd93fdab7c0ede2f51e0"
  },
  {
    "url": "guide/index.html",
    "revision": "36e749f572364611f3718dcc3bf1c18f"
  },
  {
    "url": "guide/installation.html",
    "revision": "d2d90ae357c1dcc91317c4fd43d7ef1a"
  },
  {
    "url": "guide/program.html",
    "revision": "e9ab8e3f6295ee5231c80a88b0ccd4e2"
  },
  {
    "url": "index.html",
    "revision": "3e50d8b071d3db5b53e1af0957d05bf4"
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
