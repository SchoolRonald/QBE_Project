<script>
  import { router } from '../stores/router.js'
  import { APP_CONFIG, ROUTES, NAV_LINKS } from '../config/constants.js'
  import ThemeSwitcher from './ThemeSwitcher.svelte'
  
  let open = false
  
  /**
   * Navigate to a route and close mobile menu
   * @param {string} hash - Route hash
   */
  function navTo(hash) {
    router.navigate(hash)
    open = false
  }

  function closeMenu() {
    open = false
  }
</script>

<nav class="nav">
  <div class="nav-inner page-shell">
    <button class="brand" on:click={() => navTo(ROUTES.HOME)}>
      <img src="/QBE_Project/club-logo.jpg" alt="{APP_CONFIG.clubName} logo" class="logo" />
      <div class="brand-text">
        <div class="title">{APP_CONFIG.clubName}</div>
        <div class="subtitle">{APP_CONFIG.schoolName}</div>
      </div>
    </button>

    <div class="nav-right">
      <ThemeSwitcher />
      <button class="burger" on:click={() => open = !open} aria-label="Toggle menu">☰</button>
    </div>

    <ul class:open={open} class="links">
      {#each NAV_LINKS as link (link.label)}
        <li>
          {#if link.external}
            <a
              href={link.id}
              target="_blank"
              rel="noopener noreferrer"
              on:click={closeMenu}
            >
              {link.label}
            </a>
          {:else}
            <a
              href={link.id}
              class:active={$router === link.id}
              on:click|preventDefault={() => navTo(link.id)}
            >
              {link.label}
            </a>
          {/if}
        </li>
      {/each}
    </ul>
  </div>
</nav>

<style>
  .nav {
    background: var(--nav-bg, rgba(10, 18, 34, 0.9));
    padding: 0.85rem 0;
    border-bottom: 1px solid var(--nav-border, rgba(255, 255, 255, 0.06));
    position: sticky;
    top: 0;
    z-index: 50;
    backdrop-filter: blur(14px);
    box-shadow: 0 12px 35px rgba(3, 6, 12, 0.45);
  }
  
  .nav::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, rgba(212, 175, 55, 0.12), transparent, rgba(0, 206, 209, 0.12));
    pointer-events: none;
    opacity: 0.6;
  }
  
  .nav-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    background: transparent;
    border: 0;
    padding: 0;
    color: inherit;
    font: inherit;
    transition: transform 0.2s ease;
  }

  .brand:hover {
    transform: translateY(-2px);
  }

  .brand:hover .logo {
    box-shadow: 0 0 20px var(--accent-subtle);
  }
  
  .logo {
    height: 52px;
    width: 52px;
    border-radius: 8px;
    border: 2px solid var(--border-accent);
    box-shadow: 0 2px 4px var(--accent-subtle);
    transition: all 0.3s ease;
  }
  
  .title {
    font-weight: 700;
    font-size: 1.05rem;
    color: var(--nav-text, var(--text-bright));
  }
  
  .subtitle {
    font-size: 0.75rem;
    color: var(--muted);
    font-weight: 500;
  }
  
  .nav-right {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .links {
    display: flex;
    gap: 0.35rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .links a {
    color: var(--nav-text, var(--text));
    text-decoration: none;
    padding: 0.55rem 1rem;
    border-radius: 999px;
    font-weight: 500;
    transition: all 0.25s ease;
    position: relative;
    border: 1px solid transparent;
  }

  .links a::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(120deg, rgba(212, 175, 55, 0.5), rgba(0, 206, 209, 0.4));
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .links a:hover::after,
  .links a.active::after {
    opacity: 1;
  }
  
  .links a:hover,
  .links a.active {
    background: var(--bg-hover);
    border-color: var(--border-medium);
    color: var(--accent-bright);
  }

  .burger {
    display: none;
    background: transparent;
    border: 2px solid var(--border-accent);
    color: var(--nav-text, var(--accent));
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0.3rem 0.6rem;
    border-radius: 6px;
    transition: all 0.2s ease;
  }

  .burger:hover {
    background: var(--bg-hover);
    box-shadow: 0 0 15px var(--accent-subtle);
  }

  @media (max-width: 700px) {
    .nav-right {
      gap: 0.75rem;
    }

    .logo {
      height: 45px;
      width: 45px;
    }
    
    .links {
      position: absolute;
      right: 1rem;
      top: 72px;
      flex-direction: column;
      background: var(--nav-bg, rgba(10, 18, 34, 0.95));
      padding: 1rem;
      border-radius: 18px;
      display: none;
      box-shadow: 0 25px 60px rgba(3, 5, 12, 0.7);
      border: 1px solid var(--nav-border, rgba(255, 255, 255, 0.08));
      backdrop-filter: blur(18px);
    }

    .links.open {
      display: flex;
    }
    
    .burger {
      display: block;
    }
  }
</style>
