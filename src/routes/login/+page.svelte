<script lang="ts">
  import { goto } from '$app/navigation';

  let email = '';
  let password = '';
  let loading = false;
  let error: string | null = null;

  async function submit() {
    loading = true;
    error = null;

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ email, password })
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      error = data.message ?? 'Invalid credentials';
      loading = false;
      return;
    }

    // Successful login → dashboard
    goto('/dashboard');
  }
</script>

<svelte:head>
  <title>Login</title>
</svelte:head>

<div class="login-container">
  <form on:submit|preventDefault={submit} class="login-card">
    <h1>Sign In</h1>

    {#if error}
      <div class="error">{error}</div>
    {/if}

    <label>
      Email
      <input
        type="email"
        bind:value={email}
        required
        autocomplete="username"
      />
    </label>

    <label>
      Password
      <input
        type="password"
        bind:value={password}
        required
        autocomplete="current-password"
      />
    </label>

    <button type="submit" disabled={loading}>
      {loading ? 'Signing in…' : 'Sign In'}
    </button>
  </form>
</div>

<style>
  .login-container {
    min-height: 100vh;
    display: grid;
    place-items: center;
    background: #f5f7fa;
  }

  .login-card {
    width: 100%;
    max-width: 360px;
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.08);
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  h1 {
    margin: 0 0 0.5rem;
    text-align: center;
  }

  label {
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;
    gap: 0.25rem;
  }

  input {
    padding: 0.5rem;
    font-size: 1rem;
  }

  button {
    margin-top: 1rem;
    padding: 0.6rem;
    font-size: 1rem;
    cursor: pointer;
  }

  .error {
    background: #ffe6e6;
    color: #a00;
    padding: 0.5rem;
    border-radius: 4px;
    font-size: 0.9rem;
  }
</style>
