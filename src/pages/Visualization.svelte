<script>
  import { onMount } from 'svelte';
  import PageHeader from '../components/PageHeader.svelte';

  // ✅ Updated paths for GitHub Pages with base: '/QBE_Project/'
  const CANDIDATES = [
    'notebooks/project_portfolio.html',    // Resolves to /QBE_Project/notebooks/...
    '/QBE_Project/notebooks/project_portfolio.html'  // Explicit fallback
  ];

  let html = null;
  let tried = false;
  let foundPath = null;
  let fallbackSrc = null;

  async function tryLoad() {
    for (const p of CANDIDATES) {
      try {
        const res = await fetch(p, { cache: 'no-store' });
        if (res.ok) {
          html = await res.text();
          foundPath = p;
          return;
        }
      } catch (e) {
        // ignore and try next
      }
    }

    fallbackSrc = CANDIDATES[0];
    tried = true;
  }

  onMount(() => {
    tryLoad();
  });
</script>

<section class="page-shell">
  <PageHeader title="Model Visualization" subtitle="Notebook outputs & visualizations" />

  <div class="notebook-wrap surface-card">
    {#if html}
      <div class="meta">
        <div class="muted">This is the Jupyter Notebook that has all of our data visualizations!</div>
      </div>
      <iframe class="notebook-frame" srcdoc={html} title="Project Portfolio Notebook" loading="lazy"></iframe>
    {:else if !tried}
      <p class="muted">Attempting to load notebook…</p>
    {:else}
      <div class="error">
        <p class="muted">Notebook content not retrievable via fetch.</p>

        {#if fallbackSrc}
          <p>Trying direct iframe to: <code>{fallbackSrc}</code></p>
          <iframe class="notebook-frame" src={fallbackSrc} title="Project Portfolio Notebook (direct)" loading="lazy"></iframe>
          <p class="muted">If the notebook still doesn't appear, ensure <code>project_portfolio.html</code> is in <code>public/notebooks/</code>.</p>
        {:else}
          <p>Recommended: move <code>project_portfolio.html</code> to <code>public/notebooks/project_portfolio.html</code>.</p>
        {/if}
      </div>
    {/if}
  </div>
</section>

<style>
  .notebook-wrap { padding: 1.5rem; display:flex; flex-direction:column; gap:1rem; }
  .meta { font-size:0.9rem; color:var(--muted); display:flex; gap:1rem; flex-wrap:wrap; }
  .notebook-frame { width:100%; height:800px; border:0; border-radius:10px; background:var(--card); }
  .error .muted { margin:0 0 0.5rem 0; }
  code { background: rgba(255,255,255,0.03); padding:0.1rem 0.4rem; border-radius:4px; }
  ul { margin: .5rem 0 0 1rem; }
  @media (max-width:768px) { .notebook-frame { height:600px } }
</style>