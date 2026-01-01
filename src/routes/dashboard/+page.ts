import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageLoad = async ({ fetch }) => {
  const res = await fetch('/api/me', {
    credentials: 'include'
  });

  if (!res.ok) {
    throw redirect(302, '/login');
  }

  const user = await res.json();

  return { user };
};
