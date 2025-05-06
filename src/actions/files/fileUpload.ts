'use server';

import { cookies } from 'next/headers';

import { API_UPLOAD_FILE } from '../utils';

export async function apiFileUpload(file: File) {
  const jwtToken = (await cookies()).get('jwt')?.value;

  const formData = new FormData();
  formData.append('files', file);

  const res = await fetch(API_UPLOAD_FILE, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
    body: formData,
  });

  return res.ok ? res.json() : null;
}
