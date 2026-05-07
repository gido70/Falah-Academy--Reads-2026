const CACHE_NAME = "falah-reads-v-final-admin-mobile-1";
const ASSETS = ["./", "./index.html", "./manifest.webmanifest", "./icons/falah-reads-192.png", "./icons/falah-reads-512.png"];
self.addEventListener("install", e => { self.skipWaiting(); e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS).catch(()=>{}))); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener("fetch", e => { e.respondWith(fetch(e.request).catch(() => caches.match(e.request))); });
