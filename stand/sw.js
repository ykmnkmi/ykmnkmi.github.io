const RESOURCES = [
  'images/02_01.png',
  'images/05_01.png',
  'images/07_01.png',
  'images/08_01.png',
  'images/09_01.png',
  'images/10_01.png',
  'images/11_02.png',
  'images/12_01.png',
  'images/13_01.png',
  'images/14_01.png',
  'images/15_01.png',
  'images/16_01.png',
  'images/17_01.png',
  'images/18_01.png',
  'images/19_01.png',
  'images/20_01.png',
  'images/21_01.png',
  'images/23_02.png',
  'images/26_01.png',
  'images/27_07.png',
  'images/28_01.png',
  'images/29_01.png',
  'images/32_01.png',
  'images/35_01.png',
  'images/44_01.png',
  'images/45_01.png',
  'images/46_01.png',
  'images/47_01.png',
  'images/48_02.png',
  'images/49_01.png',
  'images/54_01.png',
  'jsm/controls/TrackballControls.js',
  'jsm/curves/NURBSCurve.js',
  'jsm/curves/NURBSUtils.js',
  'jsm/libs/inflate.module.js',
  'jsm/loaders/FBXLoader.js',
  'jsm/three.module.js',
  'packages/mdc_web/material-components-web.min.js',
  'models/02.fbx',
  'models/05.fbx',
  'models/07.fbx',
  'models/08.fbx',
  'models/09.fbx',
  'models/10.fbx',
  'models/11.fbx',
  'models/12.fbx',
  'models/13.fbx',
  'models/14.fbx',
  'models/15.fbx',
  'models/16.fbx',
  'models/17.fbx',
  'models/18.fbx',
  'models/19.fbx',
  'models/20.fbx',
  'models/21.fbx',
  'models/23.fbx',
  'models/26.fbx',
  'models/27.fbx',
  'models/28.fbx',
  'models/29.fbx',
  'models/32.fbx',
  'models/35.fbx',
  'models/44.fbx',
  'models/45.fbx',
  'models/46.fbx',
  'models/47.fbx',
  'models/48.fbx',
  'models/49.fbx',
  'models/54.fbx',
];

self.addEventListener('install', function (event) {
  console.info('sw.js: install');

  return event.waitUntil(caches.open('stand@3').then(function (cache) {
    return cache.addAll(RESOURCES);
  }));
});

self.addEventListener('activate', function (event) {
  console.info('sw.js: activate');
});

self.addEventListener('fetch', function (event) {
  console.info('sw.js: fetch');

  event.respondWith(caches.match(event.request).then(function (response) {
    if (response !== undefined) {
      return response;
    }

    return fetch(event.request).then(function (response) {
      if (!response || response.status !== 200 || response.type !== 'basic') {
        return response;
      }

      let responseToCache = response.clone();

      caches.open('stand@3').then(function (cache) {
        cache.put(event.request, responseToCache);
      });

      return response;
    });
  }));
});