<script>
  import Nav from './components/Nav.svelte';
  import Footer from './components/Footer.svelte';
  import { router } from './stores/router.js';
  import { ROUTES } from './config/constants.js';

  import Home from './pages/Home.svelte';
  import Background from './pages/Background.svelte';
  import Model from './pages/Model.svelte';
  import Visualization from './pages/Visualization.svelte';
  import Contact from './pages/Contact.svelte';

  const routeToComponent = {
    [ROUTES.HOME]: Home,
    [ROUTES.BACKGROUND]: Background,
    [ROUTES.MODEL]: Model,
    [ROUTES.VISUALIZATION]: Visualization,
    [ROUTES.CONTACT]: Contact
  };

  let current;
  router.subscribe((route) => {
    current = route;
  });
</script>

<main class="app">
  <Nav />
  <section class="content">
    <svelte:component this={routeToComponent[current] || Home} />
  </section>
  <Footer />
</main>

<style>
  .app {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    background: linear-gradient(180deg, var(--bg-gradient-start) 0%, var(--bg-gradient-end) 100%);
    color: var(--text);
    position: relative;
    overflow-x: hidden;
  }

  .app::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image:
      radial-gradient(circle at 20% 30%, var(--accent-subtle) 0%, transparent 40%),
      radial-gradient(circle at 80% 70%, var(--cyan-subtle) 0%, transparent 40%);
    pointer-events: none;
    z-index: 0;
    opacity: 0.4;
  }

  .content {
    flex: 1;
    padding: 2rem;
    max-width: 1250px;
    width: 100%;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }
</style>



<!-- <script>
  import Nav from './components/Nav.svelte'
  import Footer from './components/Footer.svelte'
  import Home from './pages/Home.svelte'
  import Events from './pages/Events.svelte'
  import Projects from './pages/Projects.svelte'
  import Contact from './pages/Contact.svelte'
  import { router } from './stores/router.js'
  import { ROUTES } from './config/constants.js'

  const routes = {
    [ROUTES.HOME]: Home,
    [ROUTES.EVENTS]: Events,
    [ROUTES.PROJECTS]: Projects,
    [ROUTES.CONTACT]: Contact,
  }

  let current
  router.subscribe(route => {
    current = route
  })
</script>

<main class="app">
  <Nav />
  <section class="content">
    {#if routes[current]}
      <svelte:component this={routes[current]} />
    {:else}
      <Home />
    {/if}
  </section>
  <Footer />
</main>

<style>
  .app {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    background: linear-gradient(180deg, var(--bg-gradient-start) 0%, var(--bg-gradient-end) 100%);
    color: var(--text);
    position: relative;
    overflow-x: hidden;
  }

  .app::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(circle at 20% 30%, var(--accent-subtle) 0%, transparent 40%),
      radial-gradient(circle at 80% 70%, var(--cyan-subtle) 0%, transparent 40%);
    pointer-events: none;
    z-index: 0;
    opacity: 0.4;
  }
  
  .content {
    flex: 1;
    padding: 2rem;
    max-width: 1250px;
    width: 100%;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }
</style> -->
