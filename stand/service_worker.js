const RESOURCES = [
  '/favicon.png',
  '/index.html',
  '/jsm/controls/TrackballControls.js',
  '/jsm/curves/NURBSCurve.js',
  '/jsm/curves/NURBSUtils.js',
  '/jsm/libs/inflate.module.js',
  '/jsm/loaders/FBXLoader.js',
  '/jsm/three.module.js',
  '/main.dart.js',
  '/manifest.json',
  '/material-components-web.min.js',
  '/models/02_detal.fbx',
  '/models/05.fbx',
  '/models/07.fbx',
  '/models/08.fbx',
  '/models/09.fbx',
  '/models/11.fbx',
  '/models/12_Detal.fbx',
  '/models/13_detal.fbx',
  '/models/14_Detal.fbx',
  '/models/15_detal.fbx',
  '/models/16.fbx',
  '/models/17.fbx',
  '/models/18.fbx',
  '/models/19.fbx',
  '/models/20.fbx',
  '/models/21.fbx',
  '/models/26_detal.fbx',
  '/models/35_Detal.fbx',
  '/models/47_detal.fbx',
  '/models/48_detal.fbx',
  '/models/49_detal.fbx',
  '/styles.css',
  '/view.html',
];

self.addEventListener('install', (event) => {
  console.log('install');

  return event.waitUntil(caches.open('stand').then((cache) => {
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