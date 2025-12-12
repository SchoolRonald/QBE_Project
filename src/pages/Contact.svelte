<script>
  import PageHeader from '../components/PageHeader.svelte'
  import SectionHeader from '../components/SectionHeader.svelte'
  import PersonCard from '../components/PersonCard.svelte'
  import people from '../data/people.json'
  
  const { leadership, advisors, officers } = people
</script>

<section class="contact">
  <PageHeader 
    title="Contact Us" 
    subtitle="If you have any questions or want to know more, reach out to one of our club leaders." 
  />

  <div class="section">
    <SectionHeader title="Club Leadership" showDivider={false} />
    <div class="grid">
      {#each leadership as person (person.email || person.name)}
        <PersonCard {person} />
      {/each}
    </div>
  </div>

  <div class="section">
    <SectionHeader title="Club Advisors" showDivider={false} />
    <div class="grid">
      {#each advisors as person (person.name)}
        <PersonCard {person} />
      {/each}
    </div>
  </div>

  <div class="section">
    <SectionHeader title="Officers" showDivider={false} />
    <div class="grid">
      {#each officers as person (person.name)}
        <PersonCard {person} />
      {/each}
    </div>
  </div>
</section>

<style>
  .section {
    margin-bottom: 2.5rem;
  }
  
  .grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: space-evenly;
  }

  @media (max-width: 640px) {
    .grid {
      gap: 1rem;
    }
  }
</style>
