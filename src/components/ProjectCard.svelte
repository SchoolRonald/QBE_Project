<script>
  export let project

  const descriptionFallback = 'Project details coming soon.'

  $: title = project?.title || 'Untitled Project'
  $: description = project?.description || descriptionFallback
  $: hasMembers = Array.isArray(project?.members) && project.members.length > 0
  $: memberList = hasMembers ? project.members.join(', ') : 'TBD'

  $: hasTechnologies = Array.isArray(project?.technologies) && project.technologies.length > 0
  $: techChips = hasTechnologies ? project.technologies : []
</script>

<article class="card surface-card">
  <header class="card-head">
    <span class="badge">Club Project</span>
    {#if project?.github_url}
      <a class="ghost-link" href={project.github_url} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
    {/if}
  </header>
  <div class="title">{title}</div>
  <p class="desc">{description}</p>
  <div class="details">
    <div class="members">
      <span class="label">Team</span>
      <p>{memberList}</p>
    </div>
    <div class="tech">
      <span class="label">Technologies</span>
      <div class="chips">
        {#if techChips.length}
          {#each techChips as tech}
            <span class="chip">{tech}</span>
          {/each}
        {:else}
          <span class="chip muted">TBD</span>
        {/if}
      </div>
    </div>
  </div>
</article>

<style>
  .card {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .card:hover {
    transform: translateY(-6px);
    box-shadow: 0 25px 65px rgba(5, 9, 17, 0.45);
  }

  .card-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .ghost-link {
    font-size: 0.9rem;
    color: var(--muted);
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: color 0.2s ease, border 0.2s ease;
  }

  .ghost-link:hover {
    color: var(--text-bright);
    border-color: var(--accent);
  }

  .title {
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--text-bright);
  }

  .desc {
    color: var(--text-secondary);
    line-height: 1.6;
    margin: 0;
  }

  .details {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .label {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: var(--muted);
  }

  .members p {
    margin: 0.35rem 0 0;
    color: var(--text);
  }

  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-top: 0.35rem;
  }

  .chip {
    padding: 0.35rem 0.85rem;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.08);
    font-size: 0.85rem;
  }

  .chip.muted {
    color: var(--muted);
  }

  @media (max-width: 600px) {
    .card {
      padding: 1.5rem;
    }
  }
</style>
