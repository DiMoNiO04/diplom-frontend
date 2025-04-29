'use server';

import { cookies } from 'next/headers';

export const getJwtToken = async (): Promise<string | null> => {
  const cookieStore = await cookies();
  return cookieStore.get('jwt')?.value || null;
};
