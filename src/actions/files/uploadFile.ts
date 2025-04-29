'use server';

import { cookies } from 'next/headers';

import { API_UPLOAD_FILE } from '../utils';

export async function apiUploadFile(file: File) {
  const cookieStore = await cookies();
  const jwt = cookieStore.get('jwt')?.value;

  const formData = new FormData();
  formData.append('files', file);

  const res = await fetch(API_UPLOAD_FILE, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
    body: formData,
  });

  return res.ok ? res.json() : null;
}
