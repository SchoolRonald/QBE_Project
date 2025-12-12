<script>
  import PageHeader from '../components/PageHeader.svelte'
  import SectionHeader from '../components/SectionHeader.svelte'
  import EventCard from '../components/EventCard.svelte'
  import eventsData from '../data/events.json'
  import { transformEvents, filterEventsByDate } from '../utils/eventUtils.js'
  import { getDateAndTime, isUpcomingDate, isPastDate, sortByDateAsc, sortByDateDesc } from '../utils/dateUtils.js'

  // Transform events object into array
  const allEvents = transformEvents(eventsData)

  // Separate into upcoming and past events
  const upcomingEvents = filterEventsByDate(allEvents, isUpcomingDate)
    .sort(sortByDateAsc)
    .map(e => ({ ...e, ...getDateAndTime(e) }))

  const pastEvents = filterEventsByDate(allEvents, isPastDate)
    .sort(sortByDateDesc)
    .map(e => ({ ...e, ...getDateAndTime(e) }))
</script>

<section>
  <PageHeader 
    title="Events" 
    subtitle="Join us for workshops, talks, and collaborative project nights. RSVP using OreConnect." 
  />

  <div class="section">
    <SectionHeader title="Upcoming Events" />
    {#if upcomingEvents.length > 0}
      <div class="grid">
        {#each upcomingEvents as e (e.title)}
          <EventCard {e} isPast={false} />
        {/each}
      </div>
    {:else}
      <p class="empty-state">No upcoming events scheduled. Check back soon!</p>
    {/if}
  </div>

  <div class="section">
    <SectionHeader title="Past Events" />
    {#if pastEvents.length > 0}
      <div class="grid">
        {#each pastEvents as e (e.title)}
          <EventCard {e} isPast={true} />
        {/each}
      </div>
    {:else}
      <p class="empty-state">No past events yet.</p>
    {/if}
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
  
  .empty-state {
    color: var(--muted);
    font-style: italic;
    padding: 2rem;
    text-align: center;
    background: var(--bg-overlay);
    border-radius: 8px;
    border: 1px dashed var(--border-subtle);
  }
  
  @media (max-width: 768px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
</style>
