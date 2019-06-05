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
    "revision": "846cc5d2d47890cb3507d3e625ea8eef"
  },
  {
    "url": "api/index.html",
    "revision": "4731b77e1f9cd9339b9a2ba4195f81ca"
  },
  {
    "url": "assets/css/0.styles.86b20a99.css",
    "revision": "eaaae42fd6f9728533a0bd26d7b57478"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a97410c0.js",
    "revision": "74d1e1f09b56f2158d01fc97fffc5b49"
  },
  {
    "url": "assets/js/11.94249d4c.js",
    "revision": "3c47e9496a83d204a40ddf60241cb0ec"
  },
  {
    "url": "assets/js/12.89f595d8.js",
    "revision": "31455297bb1040594e2b977352ba62ed"
  },
  {
    "url": "assets/js/13.4839a826.js",
    "revision": "e1de97f6bd4f013d6a3e137b5f567863"
  },
  {
    "url": "assets/js/14.6cc711e5.js",
    "revision": "b9f3838a94330b7217126eb0d21308f8"
  },
  {
    "url": "assets/js/15.5f18b864.js",
    "revision": "eb60a45272ba0e8bb20a85eb3ca6c32f"
  },
  {
    "url": "assets/js/16.19dc6a18.js",
    "revision": "377caf21b3a5b4de1be7c0835fcf0fe1"
  },
  {
    "url": "assets/js/17.d6015b84.js",
    "revision": "a6491e7785f222099ad60b87e8ce7a86"
  },
  {
    "url": "assets/js/18.0a9ef0c9.js",
    "revision": "7d9c08f92c08e9b1e1bd478e2925516f"
  },
  {
    "url": "assets/js/19.977bc106.js",
    "revision": "52b36ac265ccec09932aca31fc7ca2e2"
  },
  {
    "url": "assets/js/20.ff56466d.js",
    "revision": "c3860ca97e69180afcfed55ca6640ebc"
  },
  {
    "url": "assets/js/21.206ed6e5.js",
    "revision": "378bc7dbd50141bbc7ede19c08528eaa"
  },
  {
    "url": "assets/js/22.4f588a2b.js",
    "revision": "b2e9d121a628a6e3c0a848492e93d8d7"
  },
  {
    "url": "assets/js/23.10486771.js",
    "revision": "353847f58a42d5b838ad5db25a558bfe"
  },
  {
    "url": "assets/js/3.afc92a06.js",
    "revision": "2cb3f560b2ecdf5661f12d81bacc9b4c"
  },
  {
    "url": "assets/js/4.d212259a.js",
    "revision": "3f34a8f1da8c200828ef8e08cda9c98d"
  },
  {
    "url": "assets/js/5.577355f7.js",
    "revision": "ebaf4422adba408b8d0b35e375ff04af"
  },
  {
    "url": "assets/js/6.ce619510.js",
    "revision": "3cb9e4a1303d5bd4323db66c3b61d191"
  },
  {
    "url": "assets/js/7.21c5db01.js",
    "revision": "6532b0832aece8abbbe689f11ea1117b"
  },
  {
    "url": "assets/js/8.dbd2d9eb.js",
    "revision": "d0f3609502a82c6c8b5e521fa1c18ce4"
  },
  {
    "url": "assets/js/9.07756f6e.js",
    "revision": "1b8c572441d13385e0109b82bcb11eb6"
  },
  {
    "url": "assets/js/app.5d59b021.js",
    "revision": "5723f34e7ce84881a42e296f2b29e82e"
  },
  {
    "url": "assets/js/vendors~docsearch.219b40d1.js",
    "revision": "89d0e76e085785233b13ca89fa7af68a"
  },
  {
    "url": "guide/advanced/dynamic-tab-info.html",
    "revision": "9ce5912f6f4dbd05bf2a0f982c6be6eb"
  },
  {
    "url": "guide/advanced/initial-tabs.html",
    "revision": "0434c3c668d6e0ba6f66f500d6d95b8e"
  },
  {
    "url": "guide/advanced/page-leave.html",
    "revision": "b62559d5d7b0de5d49e1ecde252b0e2c"
  },
  {
    "url": "guide/advanced/slot.html",
    "revision": "f9088e6a7be182d6fbef291e964df116"
  },
  {
    "url": "guide/advanced/transition.html",
    "revision": "aa3de27ed5384e4a8c05aca7085ca4f9"
  },
  {
    "url": "guide/essentials/i18n.html",
    "revision": "48bc926d0abf827366e519e5a2fe55e7"
  },
  {
    "url": "guide/essentials/iframe.html",
    "revision": "8953a762379ec7a52d6f39c4d3fb2a01"
  },
  {
    "url": "guide/essentials/index.html",
    "revision": "2e7b932e3f078396313911bd2f57b1f9"
  },
  {
    "url": "guide/essentials/operate.html",
    "revision": "f85d75fca0d370bbddd606f95a1ae661"
  },
  {
    "url": "guide/essentials/rule.html",
    "revision": "f131fa00227b6f1b3dcbfdd0858538b9"
  },
  {
    "url": "guide/index.html",
    "revision": "4286c3f9a72592ffb5d923dd194a44c8"
  },
  {
    "url": "guide/installation.html",
    "revision": "4120a92e9bf4dcd5efeca0098be0f25b"
  },
  {
    "url": "index.html",
    "revision": "590fe2620d3d3f9c9a1002819da60a06"
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
