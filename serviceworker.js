self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('mining-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/favicon.ico',
        '/script.js'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

// Add the following code to register the web app manifest
if ('serviceWorker' in navigator && 'PushManager' in window) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('serviceworker.js')
      .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error);
      });
  });
}
