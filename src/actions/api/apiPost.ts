import { EMsgActions } from '../utils';

export const apiPost = async <T>(url: string, data: T) => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (!res.ok) {
      return { isSuccess: false, message: result?.error?.message };
    }

    return { isSuccess: true, message: result?.message || 'Success' };
  } catch (err) {
    console.error(EMsgActions.FAILED_FETCH, err);
    return { isSuccess: false, message: EMsgActions.FAILED_FETCH_TRY_AGAIN };
  }
};
