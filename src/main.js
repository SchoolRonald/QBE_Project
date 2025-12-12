import App from './App.svelte'
import { initTheme } from './config/themes.js'

// Initialize theme before mounting app
initTheme()

const app = new App({
  target: document.getElementById('app')
})

export default app
