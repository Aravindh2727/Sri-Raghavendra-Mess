// Service Worker for Sri Raghavendra Mess
// Version: 1.0.1
// Fixed navigation preload error and offline support

const CACHE_NAME = 'sri-raghavendra-mess-v1';
const OFFLINE_URL = 'offline.html';

// Assets to cache on install (core files)
const CORE_ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  '/firebase.js',
  '/whatsapp.js',
  '/offline.html',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://www.gstatic.com/firebasejs/9.6.0/firebase-app-compat.js',
  'https://www.gstatic.com/firebasejs/9.6.0/firebase-firestore-compat.js'
];

// Install event - cache core assets
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[Service Worker] Caching core assets');
        return cache.addAll(CORE_ASSETS);
      })
      .then(() => {
        // Force activation without waiting for old SW to close
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('[Service Worker] Install failed:', error);
      })
  );
});

// Activate event - enable navigation preload and clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating...');
  
  event.waitUntil(
    (async () => {
      // Enable navigation preload
      if (self.registration.navigationPreload) {
        try {
          await self.registration.navigationPreload.enable();
          console.log('[Service Worker] Navigation preload enabled');
        } catch (error) {
          console.error('[Service Worker] Failed to enable navigation preload:', error);
        }
      } else {
        console.log('[Service Worker] Navigation preload not supported');
      }
      
      // Clean up old caches
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', name);
            return caches.delete(name);
          }
        })
      );
      
      // Take control of all clients immediately
      await self.clients.claim();
      console.log('[Service Worker] Now controlling all clients');
    })()
  );
});

// Fetch event - FIXED: Proper preloadResponse handling
self.addEventListener('fetch', (event) => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin) && 
      !event.request.url.includes('firebase') && 
      !event.request.url.includes('gstatic') && 
      !event.request.url.includes('cdnjs')) {
    return;
  }
  
  // Handle navigation requests (HTML pages)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          // FIXED: Properly handle preloadResponse with Promise.race
          const preloadResponse = await Promise.race([
            // Try to get preload response with timeout to prevent hanging
            event.preloadResponse,
            new Promise(resolve => setTimeout(resolve, 3000)) // 3 second timeout
          ]);
          
          // If preload worked and we got a response, use it
          if (preloadResponse) {
            console.log('[Service Worker] Using preloaded response for:', event.request.url);
            return preloadResponse;
          }
          
          // Otherwise try network
          console.log('[Service Worker] Preload failed, trying network for:', event.request.url);
          const networkResponse = await fetch(event.request);
          return networkResponse;
          
        } catch (error) {
          console.log('[Service Worker] Network failed, using cache for:', event.request.url, error);
          
          // Network failed - try cache
          const cachedResponse = await caches.match(event.request);
          if (cachedResponse) {
            return cachedResponse;
          }
          
          // No cache - show offline page
          const cache = await caches.open(CACHE_NAME);
          const offlineResponse = await cache.match(OFFLINE_URL);
          if (offlineResponse) {
            return offlineResponse;
          }
          
          // Last resort: return simple offline message
          return new Response('Offline - Please check your internet connection', {
            status: 503,
            statusText: 'Service Unavailable',
            headers: new Headers({
              'Content-Type': 'text/plain'
            })
          });
        }
      })()
    );
    return;
  }
  
  // Handle non-navigation requests (assets, images, API calls)
  event.respondWith(
    (async () => {
      try {
        // Try network first for non-navigation requests
        const networkResponse = await fetch(event.request);
        
        // Cache successful responses (for future offline use)
        if (networkResponse && networkResponse.status === 200) {
          const cache = await caches.open(CACHE_NAME);
          cache.put(event.request, networkResponse.clone());
        }
        
        return networkResponse;
      } catch (error) {
        // Network failed - try cache
        console.log('[Service Worker] Network failed, using cache for asset:', event.request.url);
        const cachedResponse = await caches.match(event.request);
        
        if (cachedResponse) {
          return cachedResponse;
        }
        
        // For images and other assets, return a fallback
        if (event.request.destination === 'image') {
          return new Response('Image unavailable offline', { status: 404 });
        }
        
        return new Response('Resource unavailable offline', { status: 404 });
      }
    })()
  );
});

// Handle push notifications (if needed)
self.addEventListener('push', (event) => {
  const data = event.data.json();
  
  const options = {
    body: data.body,
    icon: '/icon-192.png',
    badge: '/badge-72.png',
    vibrate: [100, 50, 100],
    data: {
      url: data.url || '/'
    }
  };
  
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow(event.notification.data.url)
  );
});

// Background sync for offline form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-forms') {
    console.log('[Service Worker] Background sync triggered');
    event.waitUntil(syncForms());
  }
});

// Function to sync forms when back online
async function syncForms() {
  try {
    const cache = await caches.open('form-submissions');
    const requests = await cache.keys();
    
    for (const request of requests) {
      try {
        const response = await fetch(request);
        if (response.ok) {
          await cache.delete(request);
          console.log('[Service Worker] Synced form:', request.url);
        }
      } catch (error) {
        console.error('[Service Worker] Failed to sync form:', error);
      }
    }
  } catch (error) {
    console.error('[Service Worker] Sync failed:', error);
  }
}