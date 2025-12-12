<script>
  /**
   * Reusable section header with decorative divider
   * @component
   */
  
  /** @type {string} Section title */
  export let title
  
  /** @type {boolean} [showDivider=true] Show gradient divider */
  export let showDivider = true
</script>

<div class="section-header">
  <div class="label-row">
    <span class="accent-dot" aria-hidden="true"></span>
    <h3>{title}</h3>
  </div>
  {#if showDivider}
    <div class="divider"></div>
  {/if}
</div>

<style>
  .section-header {
    margin-bottom: 2rem;
  }
  
  .label-row {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding-bottom: 0.5rem;
  }

  .accent-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: linear-gradient(120deg, var(--accent), var(--cyan));
    box-shadow: 0 0 10px rgba(0, 206, 209, 0.5);
  }

  h3 {
    font-size: 1.35rem;
    font-weight: 700;
    margin: 0;
    color: var(--text-bright);
  }
  
  .divider {
    height: 3px;
    background: linear-gradient(90deg, var(--accent) 0%, var(--cyan) 50%, transparent 100%);
    border-radius: 2px;
    margin-top: 0.5rem;
    opacity: 0.8;
  }
</style>

