// Kill switch for the service worker previously installed by gatsby-plugin-offline.
// It clears that worker's caches, unregisters itself and reloads any open tabs.
// Safe to delete once old visitors have had time to pick it up.
self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
      await self.registration.unregister();
      const clients = await self.clients.matchAll({ type: 'window' });
      clients.forEach((client) => client.navigate(client.url));
    })()
  );
});
