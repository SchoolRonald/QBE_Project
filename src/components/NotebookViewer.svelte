<script>
  import { onMount } from 'svelte';
  
  export let notebookPath;
  
  let htmlContent = '';
  
  onMount(async () => {
    const response = await fetch(notebookPath);
    htmlContent = await response.text();
  });
</script>

<div class="notebook-viewer">
  {@html htmlContent}
</div>

<style>
  .notebook-viewer {
    /* Add custom styling for notebook elements */
  }
</style>
