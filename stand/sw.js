const RESOURCES = [
  'favicon.png',
  'images/02_01.jpg',
  'images/05_01.jpg',
  'images/07_01.jpg',
  'images/08_01.jpg',
  'images/09_01.jpg',
  'images/11_02.jpg',
  'images/12_01.jpg',
  'images/13_01.jpg',
  'images/14_01.jpg',
  'images/15_01.jpg',
  'images/16_01.jpg',
  'images/17_01.jpg',
  'images/18_01.jpg',
  'images/19_01.jpg',
  'images/20_01.jpg',
  'images/21_01.jpg',
  'images/26_01.jpg',
  'images/35_01.jpg',
  'images/47_01.jpg',
  'images/48_02.jpg',
  'images/49_01.jpg',
  'images/icons/icon-128x128.png',
  'images/icons/icon-144x144.png',
  'images/icons/icon-152x152.png',
  'images/icons/icon-192x192.png',
  'images/icons/icon-384x384.png',
  'images/icons/icon-512x512.png',
  'images/icons/icon-72x72.png',
  'images/icons/icon-96x96.png',
  'index.html',
  'jsm/controls/TrackballControls.js',
  'jsm/curves/NURBSCurve.js',
  'jsm/curves/NURBSUtils.js',
  'jsm/libs/inflate.module.js',
  'jsm/loaders/FBXLoader.js',
  'jsm/three.module.js',
  'main.dart.js',
  'manifest.json',
  'material-components-web.min.js',
  'models/02.fbx',
  'models/05.fbx',
  'models/07.fbx',
  'models/08.fbx',
  'models/09.fbx',
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
  'models/26.fbx',
  'models/35.fbx',
  'models/47.fbx',
  'models/48.fbx',
  'models/49.fbx',
  'styles.css',
  'view.html',
];

self.addEventListener('install', function (event) {
  console.log('install');

  return event.waitUntil(caches.open('stand').then(function (cache) {
    return cache.addAll(RESOURCES);
  }));
});

self.addEventListener('activate', function (event) {
  console.log('activate');
});

self.addEventListener('fetch', function (event) {
  event.respondWith(caches.match(event.request).then(function (response) {
    if (response) {
      return response;
    }

    return fetch(event.request).then(
      function (response) {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        let responseToCache = response.clone();

        caches.open('stand').then(function (cache) {
          cache.put(event.request, responseToCache);
        });

        return response;
      }
    );
  }));
});