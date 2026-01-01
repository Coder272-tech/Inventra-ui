<script lang="ts">
  import './layout.css';
  import favicon from '$lib/assets/favicon.svg';
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<!-- This is the child route content -->
<slot />
