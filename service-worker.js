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
    "revision": "0037b0d2cb5adf5c99cb54761e554b79"
  },
  {
    "url": "api/index.html",
    "revision": "0553f81868877578be7689ab8d417723"
  },
  {
    "url": "assets/css/0.styles.0e96f848.css",
    "revision": "cc91ac5d7ecae63ca4a43f64c344f295"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.76dd83ae.js",
    "revision": "782fe7f39abe1cd436df3deab73e0bae"
  },
  {
    "url": "assets/js/11.0412cd94.js",
    "revision": "ce99acfb5fcc7b1d93f8658be287d880"
  },
  {
    "url": "assets/js/12.bb318395.js",
    "revision": "0a8e9c380d42fb5593f409e8e6882dc1"
  },
  {
    "url": "assets/js/13.a274e92c.js",
    "revision": "f85135a7cd04dbb75fb5477eb4e5a222"
  },
  {
    "url": "assets/js/14.812947d3.js",
    "revision": "7ec9dc6817b422c250d66382a5203dd6"
  },
  {
    "url": "assets/js/15.85c65ccd.js",
    "revision": "b217489b2ac1b5843f465a2bd9c0627d"
  },
  {
    "url": "assets/js/16.c7d32abd.js",
    "revision": "2b7772cea0c9f26e269c0a1e59bfacb5"
  },
  {
    "url": "assets/js/17.559f01a7.js",
    "revision": "a6373f64f56593a22eac8b717341b426"
  },
  {
    "url": "assets/js/18.13bf342d.js",
    "revision": "15842331257e375d6d4cc430b47302a3"
  },
  {
    "url": "assets/js/19.3695ebf1.js",
    "revision": "2bf50caa40ac2a1e7420123d066e2d8c"
  },
  {
    "url": "assets/js/2.9e2e18a7.js",
    "revision": "436883e836de0ecbba59ca15bd96f7e4"
  },
  {
    "url": "assets/js/20.e80f4a24.js",
    "revision": "274ec11781ee5499bade1d35a55968eb"
  },
  {
    "url": "assets/js/21.f7d3208a.js",
    "revision": "4a2b7073ebf99c47fe82ff20d5a4e266"
  },
  {
    "url": "assets/js/22.ebfaab11.js",
    "revision": "94de4f7b74afad39ada88d7c75586ddc"
  },
  {
    "url": "assets/js/3.1e8036f1.js",
    "revision": "3a61868daf98760f880a7ea8af46b391"
  },
  {
    "url": "assets/js/4.c166d5cd.js",
    "revision": "a78edce0270bbadfb9d4a8c225eda881"
  },
  {
    "url": "assets/js/5.56253de1.js",
    "revision": "cbc36aa67c4741e5eba625c8d3c529db"
  },
  {
    "url": "assets/js/6.44252ef5.js",
    "revision": "e870f521f4de55ec0d5215acedc9991c"
  },
  {
    "url": "assets/js/7.837c9062.js",
    "revision": "1913dd72102ceb0b82aacf6b209fcea0"
  },
  {
    "url": "assets/js/8.4e85ca79.js",
    "revision": "c0245a2ae6c841c0162acacec49a0365"
  },
  {
    "url": "assets/js/9.55d758aa.js",
    "revision": "2cf7aac6a53b535f61ecfd78aa6b3913"
  },
  {
    "url": "assets/js/app.7779865d.js",
    "revision": "2378f34e957657f9462c401ea104f821"
  },
  {
    "url": "guide/advanced/dynamic-tab-info.html",
    "revision": "958177fdb67a63929677145729f83087"
  },
  {
    "url": "guide/advanced/initial-tabs.html",
    "revision": "0766d0643920cb791c36dfc91cfbfbe6"
  },
  {
    "url": "guide/advanced/page-leave.html",
    "revision": "e0589e98787ff0b685695ebc2432f123"
  },
  {
    "url": "guide/advanced/slot.html",
    "revision": "e42a6479d1af2e3b3185ac760f4141ef"
  },
  {
    "url": "guide/advanced/transition.html",
    "revision": "0e615eb7c61f0765f745df267cf33c49"
  },
  {
    "url": "guide/essentials/i18n.html",
    "revision": "b396b358107521c4c9f4a90aeeada02f"
  },
  {
    "url": "guide/essentials/iframe.html",
    "revision": "ace47e9dd417b06d822b5b8995cd144f"
  },
  {
    "url": "guide/essentials/index.html",
    "revision": "30d2a5d19892db73b523a401b5e1e56b"
  },
  {
    "url": "guide/essentials/operate.html",
    "revision": "d4eb5a9a327694f29fe8a6bb0eb1d003"
  },
  {
    "url": "guide/essentials/rule.html",
    "revision": "95588b5fb84735850e10d35e56111aef"
  },
  {
    "url": "guide/index.html",
    "revision": "16bb91d1cf5d58fab73edcdf76a07695"
  },
  {
    "url": "guide/installation.html",
    "revision": "b1f4a64a818f3c9068a5a60020fa2f5d"
  },
  {
    "url": "index.html",
    "revision": "d722dfc6cd234ebbf0846d89814b531e"
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
