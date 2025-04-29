import { EMsgActions } from '../utils';

export const apiFetch = async <T>(url: string, options?: RequestInit): Promise<T> => {
  const res = await fetch(url, {
    cache: 'no-cache',
    ...options,
  });

  if (!res.ok) {
    throw new Error(EMsgActions.FAILED_FETCH);
  }

  return res.json();
};
