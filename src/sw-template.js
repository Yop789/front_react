importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js"

);
//eslint-disable-next-line no-undef
workbox.loadModule("workbox-background-sync");

//eslint-disable-next-line no-undef, no-restricted-globals workbox.precaching.precacheAndRoute(self._WB MANIFEST);
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

//eslint-disable-next-line no-undef
const { registerRoute } = workbox.routing;

// eslint-disable-next-line no-undef
const { NetworkFirst, NetworkOnly } = workbox.strategies;

//eslint-disable-next-line no-undef
const { BackgroundSyncPlugin } = workbox.backgroundSync;

const bgSyncPlugin = new BackgroundSyncPlugin("adopciones-offline", {
    maxRetentionTime: 24 * 60,
});

registerRoute(
    new RegExp("http://localhost:3005/"), 
    new NetworkFirst(), 
    "GET"
);

registerRoute(
    new RegExp("http://localhost:3005/"),
    new NetworkOnly({ plugins: [bgSyncPlugin] }),
    "POST"
);

registerRoute(
    new RegExp("http://localhost:3005/"),
    new NetworkOnly({ plugins: [bgSyncPlugin] }),
    "PUT"
);

registerRoute(
    new RegExp("http://localhost:3005/"),
    new NetworkOnly({ plugins: [bgSyncPlugin] }),
    "DELETE"
);