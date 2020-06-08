const RESOURCES = [
  'images/bg.jpg',
  'images/bg2.jpg',
  'images/models/02.png',
  'images/models/05.png',
  'images/models/07.png',
  'images/models/08.png',
  'images/models/09.png',
  'images/models/10.png',
  'images/models/11.png',
  'images/models/12.png',
  'images/models/13.png',
  'images/models/14.png',
  'images/models/15.png',
  'images/models/16.png',
  'images/models/17.png',
  'images/models/18.png',
  'images/models/19.png',
  'images/models/20.png',
  'images/models/21.png',
  'images/models/22.png',
  'images/models/23.png',
  'images/models/24.png',
  'images/models/26.png',
  'images/models/27.png',
  'images/models/28.png',
  'images/models/29.png',
  'images/models/32.png',
  'images/models/35.png',
  'images/models/44.png',
  'images/models/45.png',
  'images/models/46.png',
  'images/models/47.png',
  'images/models/48.png',
  'images/models/49.png',
  'images/models/54.png',
  'jsm/controls/TrackballControls.js',
  'jsm/curves/NURBSCurve.js',
  'jsm/curves/NURBSUtils.js',
  'jsm/libs/inflate.module.js',
  'jsm/loaders/FBXLoader.js',
  'jsm/three.module.js',
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