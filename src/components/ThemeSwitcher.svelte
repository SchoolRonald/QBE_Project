<script>
  import { themes, getCurrentTheme, setTheme } from '../config/themes.js'
  
  let currentTheme = getCurrentTheme()
  let isOpen = false
  
  function changeTheme(themeName) {
    currentTheme = themeName
    setTheme(themeName)
    isOpen = false
  }
  
  function toggleDropdown() {
    isOpen = !isOpen
  }
  
  // Close dropdown when clicking outside
  function handleClickOutside(event) {
    if (isOpen && !event.target.closest('.theme-switcher')) {
      isOpen = false
    }
  }
</script>

<svelte:window on:click={handleClickOutside} />

<div class="theme-switcher">
  <button class="theme-btn" on:click|stopPropagation={toggleDropdown}>
    <span class="swatch" style={`background-image: linear-gradient(120deg, ${themes[currentTheme]?.colors?.accent}, ${themes[currentTheme]?.colors?.cyan});`}></span>
    <span class="label">
      <span class="label-title">{themes[currentTheme]?.name || 'Theme'}</span>
      {#if themes[currentTheme]?.hint}
        <span class="label-hint">{themes[currentTheme].hint}</span>
      {/if}
    </span>
    <span class="arrow">{isOpen ? '▲' : '▼'}</span>
  </button>
  
  {#if isOpen}
    <div class="dropdown">
      {#each Object.entries(themes) as [key, theme]}
        <button
          class="theme-option"
          class:active={currentTheme === key}
          on:click={() => changeTheme(key)}
        >
          <div
            class="color-preview"
            style={`background-image: linear-gradient(120deg, ${theme.colors.accent}, ${theme.colors.cyan});`}
          ></div>
          <div class="theme-meta">
            <span class="theme-name">{theme.name}</span>
            {#if theme.hint}
              <span class="theme-hint">{theme.hint}</span>
            {/if}
          </div>
          {#if currentTheme === key}
            <span class="check">✓</span>
          {/if}
        </button>
      {/each}
    </div>
  {/if}
</div>

<style>
  .theme-switcher {
    position: relative;
  }
  
  .theme-btn {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    padding: 0.4rem 0.9rem;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid var(--border-medium);
    border-radius: 999px;
    color: var(--text);
    cursor: pointer;
    font-size: 0.9rem;
    transition: background 0.2s, border-color 0.2s, transform 0.2s;
  }
  
  .theme-btn:hover {
    background: rgba(255, 255, 255, 0.06);
    border-color: var(--accent);
    transform: translateY(-1px);
  }
  
  .swatch {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.15);
  }
  
  .label {
    display: flex;
    flex-direction: column;
    line-height: 1.1;
    text-align: left;
  }

  .label-title {
    font-weight: 600;
    font-size: 0.9rem;
  }

  .label-hint {
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--muted);
  }

  .arrow {
    font-size: 0.7rem;
    opacity: 0.7;
  }
  
  .dropdown {
    position: absolute;
    top: calc(100% + 0.5rem);
    right: 0;
    min-width: 200px;
    background: var(--card);
    border: 1px solid var(--border-medium);
    border-radius: 8px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
    z-index: 100;
    overflow: hidden;
  }
  
  .theme-option {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.9rem;
    padding: 0.85rem 1rem;
    background: transparent;
    border: none;
    color: var(--text);
    cursor: pointer;
    font-size: 0.9rem;
    transition: background 0.2s;
    text-align: left;
  }
  
  .theme-option:hover {
    background: var(--bg-hover);
  }
  
  .theme-option.active {
    background: var(--bg-overlay);
  }
  
  .color-preview {
    width: 28px;
    height: 28px;
    border-radius: 8px;
    flex-shrink: 0;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .theme-meta {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .theme-name {
    font-weight: 600;
  }

  .theme-hint {
    font-size: 0.7rem;
    color: var(--muted);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  
  .check {
    margin-left: auto;
    color: var(--accent);
    font-weight: bold;
  }
  
  @media (max-width: 700px) {
    .label-hint {
      display: none;
    }
  }
</style>
