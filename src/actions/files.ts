'use server';

import { cookies } from 'next/headers';

import { BEARER_AUTH, COOKIES_JWT } from '@/utils/consts';

import { API_DELETE_FILE, API_UPLOAD_FILE, EApiMethods } from './utils';

const apiFileDelete = async (fileId: string) => {
  const jwtToken = (await cookies()).get(COOKIES_JWT)?.value;

  await fetch(API_DELETE_FILE(fileId), {
    method: EApiMethods.DELETE,
    headers: {
      Authorization: `${BEARER_AUTH} ${jwtToken}`,
    },
  });
};

const apiFileUpload = async (file: File) => {
  const jwtToken = (await cookies()).get(COOKIES_JWT)?.value;

  const formData = new FormData();
  formData.append('files', file);

  const res = await fetch(API_UPLOAD_FILE, {
    method: EApiMethods.DELETE,
    headers: {
      Authorization: `${BEARER_AUTH} ${jwtToken}`,
    },
    body: formData,
  });

  return res.ok ? res.json() : null;
};

export { apiFileDelete, apiFileUpload };
