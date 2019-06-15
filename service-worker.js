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
    "revision": "18a45bdb5aeea5dd3ca992b1354e9409"
  },
  {
    "url": "api/index.html",
    "revision": "aef1ca4c71cc0002f7d8ab9a9f7908bd"
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
    "url": "assets/js/app.1f6870d8.js",
    "revision": "bf65db3ff6c8a731d740bbf8f06763b0"
  },
  {
    "url": "assets/js/vendors~docsearch.219b40d1.js",
    "revision": "89d0e76e085785233b13ca89fa7af68a"
  },
  {
    "url": "guide/advanced/dynamic-tab-info.html",
    "revision": "e90e5ac4969133caee55778b82736b48"
  },
  {
    "url": "guide/advanced/initial-tabs.html",
    "revision": "ef5e6527551e30160140b5ddb83eac36"
  },
  {
    "url": "guide/advanced/page-leave.html",
    "revision": "28e341993bd406036a318d9e05b8b0d3"
  },
  {
    "url": "guide/advanced/slot.html",
    "revision": "0add8e45314c3c320dd1c4177d58cec5"
  },
  {
    "url": "guide/advanced/transition.html",
    "revision": "85991e2c8e2804a7a283c53fb0bf87c6"
  },
  {
    "url": "guide/essentials/i18n.html",
    "revision": "2bf315852983c90601504c7febe64e6c"
  },
  {
    "url": "guide/essentials/iframe.html",
    "revision": "96f2ee9bc118ef42208bba1653b4781c"
  },
  {
    "url": "guide/essentials/index.html",
    "revision": "27c8980f653acb13c46fe96456d7533c"
  },
  {
    "url": "guide/essentials/operate.html",
    "revision": "3ad8f5f586b83a9a1c4216ee41750113"
  },
  {
    "url": "guide/essentials/rule.html",
    "revision": "a1ba5500daf517bd2319bc6f36eedeef"
  },
  {
    "url": "guide/index.html",
    "revision": "6086b62b351ae3bcd5dec25aaa10c104"
  },
  {
    "url": "guide/installation.html",
    "revision": "2b2e6fd85c9cedf4c4309c84e69056ac"
  },
  {
    "url": "guide/program.html",
    "revision": "0d65c531e685d10ec36c37ffb19ed060"
  },
  {
    "url": "index.html",
    "revision": "c067a6f915b80ccf42b358738b7e069e"
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
