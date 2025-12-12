<script>
  import { APP_CONFIG } from '../config/constants.js'
</script>

<footer class="footer">
  <div class="wrap">
    <div>© {new Date().getFullYear()} {APP_CONFIG.clubName}</div>
    <div class="links">
      Built with Svelte • 
      <a href={APP_CONFIG.schoolWebsite} target="_blank" rel="noreferrer">
        {APP_CONFIG.schoolName}
      </a>
    </div>
  </div>
</footer>

<style>
  .footer {
    padding: 1.5rem;
    border-top: 2px solid var(--border-accent);
    background: linear-gradient(180deg, transparent 0%, rgba(10, 22, 40, 0.5) 100%);
    margin-top: 3rem;
    position: relative;
  }

  .footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--accent), var(--cyan), transparent);
    animation: shimmer 3s ease-in-out infinite;
  }

  @keyframes shimmer {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.8; }
  }
  
  .wrap {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    color: var(--muted);
    font-size: 0.9rem;
  }
  
  .links a {
    color: var(--accent-bright);
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .links a:hover {
    color: var(--cyan-bright);
    text-decoration: underline;
  }
  
  @media (max-width: 700px) {
    .wrap {
      flex-direction: column;
      gap: 0.5rem;
      text-align: center;
    }
  }
</style>
