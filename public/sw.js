// luxsearch® Service Worker - 2025 Mobile-First PWA
const CACHE_NAME = 'luxsearch-v1.0.0';
const STATIC_CACHE = 'luxsearch-static-v1';
const DYNAMIC_CACHE = 'luxsearch-dynamic-v1';

// Essential files to cache for offline functionality
const STATIC_ASSETS = [
  '/',
  '/hire-talent',
  '/styles/design-system.css',
  '/assets/logo.png',
  '/favicon.ico',
  '/manifest.json'
];

// Cache strategies for different resource types
const CACHE_STRATEGIES = {
  images: 'cache-first',
  styles: 'stale-while-revalidate',
  scripts: 'stale-while-revalidate',
  pages: 'network-first',
  api: 'network-first'
};

// Install event - cache essential assets
self.addEventListener('install', event => {
  console.log('[SW] Installing Service Worker...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('[SW] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('[SW] Static assets cached successfully');
        return self.skipWaiting(); // Activate immediately
      })
      .catch(error => {
        console.error('[SW] Failed to cache static assets:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('[SW] Activating Service Worker...');
  
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('[SW] Service Worker activated');
        return self.clients.claim(); // Take control immediately
      })
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Skip Chrome extensions and other non-http(s) requests
  if (!request.url.startsWith('http')) {
    return;
  }
  
  // Determine resource type and apply appropriate strategy
  const resourceType = getResourceType(request);
  
  switch (resourceType) {
    case 'page':
      event.respondWith(handlePageRequest(request));
      break;
    case 'style':
      event.respondWith(handleStyleRequest(request));
      break;
    case 'image':
      event.respondWith(handleImageRequest(request));
      break;
    case 'api':
      event.respondWith(handleApiRequest(request));
      break;
    default:
      event.respondWith(handleDefaultRequest(request));
  }
});

// Determine resource type from request
function getResourceType(request) {
  const url = new URL(request.url);
  const pathname = url.pathname;
  
  if (request.destination === 'document') {
    return 'page';
  } else if (pathname.endsWith('.css')) {
    return 'style';
  } else if (request.destination === 'image') {
    return 'image';
  } else if (pathname.includes('/api/')) {
    return 'api';
  }
  
  return 'default';
}

// Network-first strategy for pages (with fallback)
async function handlePageRequest(request) {
  try {
    // Try network first
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      // Cache successful responses
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
      return networkResponse;
    }
    
    throw new Error('Network response not ok');
  } catch (error) {
    // Fallback to cache
    const cachedResponse = await caches.match(request);
    
    if (cachedResponse) {
      console.log('[SW] Serving page from cache:', request.url);
      return cachedResponse;
    }
    
    // Ultimate fallback - serve offline page
    return caches.match('/') || new Response('Offline', { status: 503 });
  }
}

// Stale-while-revalidate for styles
async function handleStyleRequest(request) {
  const cache = await caches.open(STATIC_CACHE);
  const cachedResponse = await cache.match(request);
  
  // Serve from cache immediately if available
  if (cachedResponse) {
    // Update cache in background
    fetch(request).then(response => {
      if (response.ok) {
        cache.put(request, response.clone());
      }
    }).catch(() => {
      // Fail silently for background updates
    });
    
    return cachedResponse;
  }
  
  // If not in cache, fetch and cache
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    return new Response('/* Offline */', { 
      headers: { 'Content-Type': 'text/css' } 
    });
  }
}

// Cache-first strategy for images
async function handleImageRequest(request) {
  const cache = await caches.open(DYNAMIC_CACHE);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }
  
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    // Return a placeholder image or transparent 1px image
    return new Response(
      '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect width="200" height="200" fill="#f0f0f0"/><text x="100" y="100" text-anchor="middle" dy=".3em" font-family="sans-serif" font-size="14" fill="#999">Image offline</text></svg>',
      { headers: { 'Content-Type': 'image/svg+xml' } }
    );
  }
}

// Network-first for API requests
async function handleApiRequest(request) {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    
    if (cachedResponse) {
      console.log('[SW] Serving API response from cache:', request.url);
      return cachedResponse;
    }
    
    return new Response(JSON.stringify({ error: 'Offline' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

// Default cache strategy
async function handleDefaultRequest(request) {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    return cachedResponse || new Response('Offline', { status: 503 });
  }
}

// Background sync for form submissions
self.addEventListener('sync', event => {
  console.log('[SW] Background sync triggered:', event.tag);
  
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  // Handle queued form submissions when back online
  console.log('[SW] Performing background sync');
  // Implementation would depend on specific requirements
}

// Push notifications (for future enhancement)
self.addEventListener('push', event => {
  if (event.data) {
    const options = {
      body: event.data.text(),
      icon: '/android-chrome-192x192.png',
      badge: '/favicon-96x96.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      },
      actions: [
        {
          action: 'explore',
          title: 'View Details',
          icon: '/favicon-48x48.png'
        },
        {
          action: 'close',
          title: 'Close',
          icon: '/favicon-48x48.png'
        }
      ]
    };
    
    event.waitUntil(
      self.registration.showNotification('luxsearch® Update', options)
    );
  }
});

// Handle notification clicks
self.addEventListener('notificationclick', event => {
  console.log('[SW] Notification click received.');
  
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

console.log('[SW] Service Worker script loaded successfully'); 