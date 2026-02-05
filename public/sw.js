
const DEFAULT_BASE = '/';
const KNOWN_BASES = [
  '/web2-cursus-2026/',  // prod: GitHub Pages project path
  '/',                   // dev: localhost
];

//pick the matching base for the current scope
function resolveBase() {
  const scope = self.registration.scope; // absolute URL
  const pathname = new URL(scope).pathname;
  // Try known bases; otherwise default to "/"
  for (const b of KNOWN_BASES) {
    if (pathname.endsWith(b)) return b;
  }
  return DEFAULT_BASE;
}

const BASE = resolveBase();

// Define the simulation endpoints relative to the base
const ROUTES = new Map([
  [`${BASE}simulate200`, { status: 200, body: 'OK' }],
  [`${BASE}simulate404`, { status: 404, body: 'Not Found' }],
  [`${BASE}simulate500`, { status: 500, body: 'Internal Server Error' }],
  [`${BASE}simulate401`, { status: 401, body: 'Unauthorized' }],
]);

self.addEventListener('install', (evt) => {
  // Activate immediately for teaching convenience
  self.skipWaiting();
});

self.addEventListener('activate', (evt) => {
  // Take control of all open pages without reload
  evt.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // If the request matches one of our simulation endpoints, return a synthetic response.
  const route = ROUTES.get(url.pathname);
  if (!route) return; // Let other requests pass through unchanged.

  const { status, body } = route;
  const headers = { 'Content-Type': 'text/plain; charset=utf-8' };

  event.respondWith(Promise.resolve(new Response(body, { status, headers })));
});
