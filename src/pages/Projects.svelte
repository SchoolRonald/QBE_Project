<script>
  import PageHeader from '../components/PageHeader.svelte';
  import SectionHeader from '../components/SectionHeader.svelte';
  import ProjectCard from '../components/ProjectCard.svelte';
  import projectsData from '../data/projects.json';
</script>

<section>
  <PageHeader 
    title="Projects" 
    subtitle="A showcase of projects built by our club members." 
  />

  <div class="section">
    <SectionHeader title="Featured Work" />
    <div class="grid">
      {#each projectsData as project (project.title)}
        <ProjectCard {project} />
      {/each}
    </div>
  </div>
</section>

<style>
  .section {
    margin-bottom: 4rem;
  }
  
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }
  
  @media (max-width: 768px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
</style>
