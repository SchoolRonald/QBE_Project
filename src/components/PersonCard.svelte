<script>
  import { getInitials } from '../utils/eventUtils.js'

  /**
   * @typedef {Object} Person
   * @property {string} name - Person's full name
   * @property {string} role - Their role/title
   * @property {string} [email] - Email address
   * @property {string} [url] - External profile URL
   * @property {string} [image] - Path to profile image
   */

  /** @type {Person} */
  export let person

  const hasImage = !!person.image
  const hasLink = !!person.url
</script>

<svelte:element 
  this={hasLink ? 'a' : 'div'}
  href={person.url}
  target={hasLink ? '_blank' : undefined}
  rel={hasLink ? 'noopener noreferrer' : undefined}
  class="card"
  class:card-link={hasLink}
>
  {#if hasImage}
    <div class="avatar-image">
      <img src={person.image} alt={person.name} />
    </div>
  {:else}
    <div class="avatar">{getInitials(person.name)}</div>
  {/if}
  
  <div class="info">
    <div class="name">{person.name}</div>
    <div class="role">{person.role}</div>
    {#if person.email}
      <a href="mailto:{person.email}" class="email">{person.email}</a>
    {/if}
  </div>
</svelte:element>

<style>
  .card {
    background: var(--card);
    border: 1px solid var(--border-subtle);
    padding: 1.75rem;
    border-radius: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: all 0.3s ease;
    width: 280px;
    flex-shrink: 0;
    position: relative;
    overflow: hidden;
  }

  .card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--accent), var(--cyan));
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  .card:hover::before {
    transform: scaleX(1);
  }

  .card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px var(--accent-subtle);
    border-color: var(--border-accent);
    background: var(--card-hover);
  }

  .card-link {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  .card-link:hover .name {
    color: var(--accent);
  }

  .avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--accent-bright), var(--accent));
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1.4rem;
    color: #0A1628;
    margin-bottom: 1rem;
    box-shadow: 0 4px 12px var(--accent-subtle);
  }

  .avatar-image {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 1rem;
    border: 3px solid var(--border-accent);
    box-shadow: 0 4px 12px var(--accent-subtle);
    position: relative;
  }

  .avatar-image::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, transparent 60%, rgba(0, 0, 0, 0.2) 100%);
    pointer-events: none;
  }

  .avatar-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .card:hover .avatar-image img {
    transform: scale(1.05);
  }

  .info {
    width: 100%;
  }

  .name {
    font-weight: 700;
    font-size: 1.05rem;
    margin-bottom: 0.3rem;
    transition: color 0.2s;
    color: var(--text-bright);
  }

  .role {
    color: var(--muted);
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  .email {
    color: var(--cyan-bright);
    font-size: 0.85rem;
    text-decoration: none;
    word-break: break-word;
    display: inline-block;
    transition: color 0.2s ease;
  }

  .email:hover {
    color: var(--accent-bright);
    text-decoration: underline;
  }

  @media (max-width: 640px) {
    .card {
      width: 100%;
      max-width: 100%;
    }
    
    .avatar {
      width: 64px;
      height: 64px;
      font-size: 1.2rem;
    }

    .avatar-image {
      width: 100px;
      height: 100px;
    }
  }
</style>
