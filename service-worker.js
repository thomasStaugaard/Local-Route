const CACHE_NAME = 'local-route-v7';

const FILES_TO_CACHE = [
'./',
'./index.html',
'./discgolf.css',
'./discgolf.js',
'./manifest.json',

'./thumbnails/banekort_valby.jpg',
'./thumbnails/valbyorangediscgolf.png',
'./thumbnails/menubillede5.png',
'./thumbnails/skyer3.png',
'./thumbnails/bird1.png',
'./thumbnails/bird2.png',
'./thumbnails/menuicon3.png',

'./thumbnails/hul1.png',
'./thumbnails/hul2.jpg',
'./thumbnails/hul3.jpg',
'./thumbnails/hul4.jpg',
'./thumbnails/hul5.jpg',
'./thumbnails/hul6.png',
'./thumbnails/hul7.png',
'./thumbnails/hul8.png',
'./thumbnails/hul9.png',
'./thumbnails/hul10.jpg',
'./thumbnails/hul11.jpg',
'./thumbnails/hul12.png',
'./thumbnails/hul13.jpg',
'./thumbnails/hul14.png',
'./thumbnails/hul15.jpg',
'./thumbnails/hul16.png',
'./thumbnails/hul17.jpg',
'./thumbnails/hul18.jpg',

'./thumbnails/icon-192.png',
'./thumbnails/icon-512.png'
];

self.addEventListener('install', (event) => {
console.log('Service worker installing');

event.waitUntil(
caches.open(CACHE_NAME).then((cache) => {
return cache.addAll(FILES_TO_CACHE);
})
);
});

self.addEventListener('activate', (event) => {
console.log('Service worker activating');

event.waitUntil(
caches.keys().then((cacheNames) => {
return Promise.all(
cacheNames.map((cacheName) => {
if (cacheName !== CACHE_NAME) {
return caches.delete(cacheName);
}
})
);
})
);
});

self.addEventListener('fetch', (event) => {
event.respondWith(
caches.match(event.request).then((cachedResponse) => {
if (cachedResponse) {
return cachedResponse;
}

return fetch(event.request);
})
);
});