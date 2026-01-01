<script lang="ts">
  import StoreManagerDashboard from '$lib/components/StoreManagerDashboard.svelte';
  import OfficeManagerDashboard from '$lib/components/OfficeManagerDashboard.svelte';

  export let data;
  const { user } = data;
</script>

<svelte:head>
  <title>Dashboard</title>
</svelte:head>

<div class="dashboard">
  <header>
    <div>
      <h1>Dashboard</h1>
      <div class="sub">{user.location_name}</div>
    </div>

    <div class="user">
      {user.role.replace('_', ' ')}
    </div>
  </header>

  {#if user.role === 'store_manager'}
    <StoreManagerDashboard />
  {:else if user.role === 'office_manager'}
    <OfficeManagerDashboard />
  {:else}
    <p>Role not supported.</p>
  {/if}
</div>

<style>
  .dashboard {
    padding: 1.5rem;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 1.5rem;
  }

  .sub {
    color: #666;
    font-size: 0.9rem;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1rem;
  }

  .card {
    padding: 1rem;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.06);
  }

  .urgent {
    border-left: 4px solid #c00;
  }

  .warn {
    border-left: 4px solid #e6a700;
  }
</style>
