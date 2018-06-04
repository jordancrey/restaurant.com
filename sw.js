var cachename = 'my-site-cache-v1';
var dataCacheName = 'my-site-Data-v1';
var urlsToCache = [

'https://jordancrey.github.io/restaurant.com/index.html',
'https://jordancrey.github.io/restaurant.com/carte.html',
'https://jordancrey.github.io/restaurant.com/a.jpg',
'https://jordancrey.github.io/restaurant.com/c.jpg',
'https://jordancrey.github.io/restaurant.com/e.jpg',
'https://jordancrey.github.io/restaurant.com/f.jpg',
'https://jordancrey.github.io/restaurant.com/photo.html',
'https://jordancrey.github.io/restaurant.com/bootstrap.css',
'https://jordancrey.github.io/restaurant.com/main.js',
'https://jordancrey.github.io/restaurant.com/jquery.js',
'https://jordancrey.github.io/restaurant.com/contact.html',
'https://jordancrey.github.io/restaurant.com/manifest.json',
'https://jordancrey.github.io/restaurant.com/README.md',
'https://jordancrey.github.io/restaurant.com/restaurant.html',
'https://jordancrey.github.io/restaurant.com/toast.jpg',
'https://jordancrey.github.io/restaurant.com/main.css',
'https://jordancrey.github.io/restaurant.com/b.jpg',
'https://jordancrey.github.io/restaurant.com/siren.jpg',
'https://jordancrey.github.io/restaurant.com/business.jpg',

];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(cachename)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     caches.match(event.request)
//       .then(function(response) {
//         // Cache hit - return response
//         if (response) {
//           return response;
//         }
//
//         // IMPORTANT: Clone the request. A request is a stream and
//         // can only be consumed once. Since we are consuming this
//         // once by cache and once by the browser for fetch, we need
//         // to clone the response.
//         var fetchRequest = event.request.clone();
//
//         return fetch(fetchRequest).then(
//           function(response) {
//             // Check if we received a valid response
//             if(!response || response.status !== 200 || response.type !== 'basic') {
//               return response;
//             }
//
//             // IMPORTANT: Clone the response. A response is a stream
//             // and because we want the browser to consume the response
//             // as well as the cache consuming the response, we need
//             // to clone it so we have two streams.
//             var responseToCache = response.clone();
//
//             caches.open(CACHE_NAME)
//               .then(function(cache) {
//                 cache.put(event.request, responseToCache);
//               });
//
//             return response;
//           }
//         );
//       })
//     );
// });
