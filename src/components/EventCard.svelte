<script>
  /**
   * Event card component for displaying event information
   * @component
   */
  
  /** @type {{ title: string, date: string, time?: string|null, location: string, desc: string, oreconnect_url?: string }} */
  export let e
  
  /** @type {boolean} Whether this event is in the past */
  export let isPast = false
</script>

<article class="card surface-card" class:past={isPast}>
  <header class="card-head">
    <span class="badge status" class:past={isPast}>{isPast ? 'Past Session' : 'Upcoming'}</span>
    {#if e.date !== 'TBD'}
      <span class="badge date-pill">{e.date}</span>
    {/if}
  </header>

  <h4>{e.title}</h4>
  <p class="desc">{e.desc}</p>

  {#if e.location || e.time}
    <div class="meta">
      {#if e.location}
        <div class="meta-item">
          <span class="meta-label">Location</span>
          <span>{e.location}</span>
        </div>
      {/if}

      {#if e.time}
        <div class="meta-item">
          <span class="meta-label">Time</span>
          <span>{e.time}</span>
        </div>
      {/if}
    </div>
  {/if}

  {#if e.oreconnect_url}
    <div class="actions">
      <a class="btn" href={e.oreconnect_url} target="_blank" rel="noopener noreferrer">
        View on OreConnect
      </a>
    </div>
  {/if}
</article>

<style>
  .card {
    padding: 1.85rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .card:hover {
    transform: translateY(-6px);
    box-shadow: 0 25px 60px rgba(5, 9, 17, 0.45);
  }

  .card-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.75rem;
    flex-wrap: wrap;
    margin-bottom: 1rem;
  }

  h4 {
    font-size: 1.3rem;
    margin: 0;
    color: var(--text-bright);
  }

  .desc {
    color: var(--text);
    margin: 0.85rem 0 1rem;
    line-height: 1.5;
  }

  .meta {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem 1.5rem;
    color: var(--muted);
    font-size: 0.95rem;
  }

  .meta-item {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
    min-width: 120px;
  }

  .meta-label {
    text-transform: uppercase;
    letter-spacing: 0.18em;
    font-size: 0.65rem;
    color: var(--muted);
  }

  .date-pill {
    background: rgba(0, 206, 209, 0.12);
    border-color: rgba(0, 206, 209, 0.4);
  }

  .status {
    background: rgba(212, 175, 55, 0.12);
    border-color: rgba(212, 175, 55, 0.35);
  }

  .status.past {
    background: rgba(139, 155, 180, 0.15);
    border-color: rgba(139, 155, 180, 0.35);
    color: var(--muted);
  }

  .actions {
    margin-top: 1.25rem;
    display: flex;
    justify-content: flex-end;
  }

  .btn {
    background: linear-gradient(135deg, var(--accent), var(--accent-bright));
    color: var(--bg);
    text-decoration: none;
    padding: 0.6rem 1.25rem;
    border-radius: 999px;
    font-weight: 600;
    border: 0;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    box-shadow: 0 12px 30px rgba(212, 175, 55, 0.18);
  }

  .btn:hover {
    transform: translateY(-2px);
  }

  .card.past {
    opacity: 0.92;
  }
</style>
