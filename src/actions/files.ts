'use server';

import { cookies } from 'next/headers';

import { API_DELETE_FILE, API_UPLOAD_FILE } from './utils';

const apiFileDelete = async (fileId: string) => {
  const jwtToken = (await cookies()).get('jwt')?.value;

  await fetch(API_DELETE_FILE(fileId), {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  });
};

const apiFileUpload = async (file: File) => {
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
};

export { apiFileDelete, apiFileUpload };
