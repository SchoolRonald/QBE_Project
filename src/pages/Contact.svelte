<script>
  import PageHeader from '../components/PageHeader.svelte';

  const teammates = [
    { name: 'Paul Jacobsen',   major: 'QBE', email: 'pjacobsen@mines.edu' },
    { name: 'Ronald Chu', major: 'QBE and CS', email: 'rchu@mines.edu' },
    { name: 'Camille Anderson', major: 'QBE and Biochemistry', email: 'camille_anderson@mines.edu' },
    { name: 'Kyle Nguyen',   major: 'QBE Chemical Engineering', email: 'kyle_nguyen@mines.edu' }
  ];
</script>

<section class="page-shell">
  <PageHeader
    title="Contact"
    subtitle="Reach out to the team GRÖNSPRÖT with questions or feedback."
  />

  <div class="content surface-card">
    <div class="grid">
      {#each teammates as person (person.email)}
        <div class="person-card">
          <h3>{person.name}</h3>
          <p class="major">{person.major}</p>
          <a class="email" href={`mailto:${person.email}`}>{person.email}</a>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .content {
    padding: 3rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem;
  }

  .person-card {
    padding: 1.5rem;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(255, 255, 255, 0.02);
    transition: all 0.3s ease;
  }

  .person-card:hover {
    background: var(--card-hover);
    border-color: var(--border-accent);
    transform: translateY(-4px);
  }

  .person-card h3 {
    margin: 0 0 0.5rem;
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--text-bright);
  }

  .major {
    margin: 0 0 0.75rem;
    color: var(--muted);
    font-size: 0.95rem;
  }

  .email {
    color: var(--cyan-bright);
    text-decoration: none;
    font-size: 0.95rem;
    transition: color 0.2s ease;
  }

  .email:hover {
    color: var(--accent-bright);
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    .content {
      padding: 1.5rem;
    }
  }
</style>