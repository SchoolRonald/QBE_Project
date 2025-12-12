<script>
  import { onMount } from 'svelte';
  import PageHeader from '../components/PageHeader.svelte';

  // prefer the exact path you placed the html file
  const PREFERRED = '/src/assets/notebooks/project_portfolio.html';

  // additional candidates if needed
  const CANDIDATES = [
    PREFERRED,
    '/notebooks/project_portfolio.html',                 // public/notebooks/
    '/src/assets/project_portfolio.html',                // alternate
    '/project_portfolio.html'                            // root (unlikely)
  ];

  let html = null;
  let tried = false;
  let foundPath = null;
  let fallbackSrc = null; // direct iframe src fallback

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

    // if fetch didn't succeed, try using direct iframe src to the preferred path
    // (useful if Vite serves the file but fetch from script is blocked)
    fallbackSrc = PREFERRED;
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
          <p class="muted">If the notebook still doesn't appear, move <code>project_portfolio.html</code> to <code>public/notebooks/project_portfolio.html</code> and restart the dev server.</p>
        {:else}
          <p>Recommended: move <code>project_portfolio.html</code> to <code>public/notebooks/project_portfolio.html</code> and restart the dev server.</p>
          <p>Candidate URLs you can try opening directly in the browser:</p>
          <ul>
            {#each CANDIDATES as p}
              <li><a target="_blank" rel="noopener noreferrer" href={p}>{p}</a></li>
            {/each}
          </ul>
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