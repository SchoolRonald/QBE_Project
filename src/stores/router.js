import { writable } from 'svelte/store'
import { ROUTES } from '../config/constants.js'

/**
 * Router store for managing client-side navigation
 */
function normalizeHash(hash) {
  if (!hash) return ROUTES.HOME
  // If hash includes a second fragment (e.g., #/model#references), keep the route portion only.
  const parts = hash.split('#')
  if (parts.length > 2 && parts[1]) {
    return `#${parts[1]}`
  }
  // Strip query string if present (e.g., #/model?section=refs)
  const [base] = hash.split('?')
  return base || ROUTES.HOME
}

function createRouter() {
  const { subscribe, set } = writable(normalizeHash(window.location.hash))

  // Handle hash changes
  function handleHashChange() {
    const hash = normalizeHash(window.location.hash)
    set(hash)
  }

  // Initialize
  if (typeof window !== 'undefined') {
    window.addEventListener('hashchange', handleHashChange)
  }

  return {
    subscribe,
    /**
     * Navigate to a route
     * @param {string} route - Route hash (e.g., '#home')
     */
    navigate: (route) => {
      window.location.hash = route
    },
    /**
     * Get current route
     */
    getCurrentRoute: () => window.location.hash || ROUTES.HOME
  }
}

export const router = createRouter()
