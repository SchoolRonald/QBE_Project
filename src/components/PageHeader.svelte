<script>
  /**
   * Reusable page header component
   * @component
   */
  
  /** @type {string} Page title */
  export let title
  
  /** @type {string} [subtitle] Optional subtitle/description */
  export let subtitle = ''
</script>

<div class="page-header surface-card">
  <h2>{title}</h2>
  {#if subtitle}
    <p class="subtitle">{subtitle}</p>
  {/if}
  <div class="glow-bar" aria-hidden="true"></div>
</div>

<style>
  .page-header {
    margin-bottom: 3rem;
    padding: 2.5rem 3rem;
    position: relative;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 800;
    margin: 0 0 0.75rem;
    color: var(--text-bright);
    line-height: 1.1;
  }
  
  .subtitle {
    color: var(--muted);
    font-size: 1.1rem;
    margin: 0;
  }

  .glow-bar {
    position: absolute;
    inset: auto 3rem -1px;
    height: 3px;
    background: linear-gradient(120deg, var(--accent), var(--cyan));
    border-radius: 999px;
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    .page-header {
      padding: 2rem;
    }

    h2 {
      font-size: 2rem;
    }
  }
</style>
