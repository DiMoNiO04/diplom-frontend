'use server';

import { cookies } from 'next/headers';

import { API_DELETE_FILE } from '../utils';

export async function apiDeleteFile(fileId: string) {
  const jwtToken = (await cookies()).get('jwt')?.value;

  await fetch(API_DELETE_FILE(fileId), {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  });
}
