import { writable } from 'svelte/store'
import { ROUTES } from '../config/constants.js'

/**
 * Router store for managing client-side navigation
 */
function createRouter() {
  const { subscribe, set } = writable(window.location.hash || ROUTES.HOME)

  // Handle hash changes
  function handleHashChange() {
    const hash = window.location.hash || ROUTES.HOME
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
