'use server';

import { cookies } from 'next/headers';

import { SITE_NAME } from '@/utils/consts';
import { IFormRecipeData } from '@/utils/validations';

import { API_RECIPES, EMsgActions, IApiResultReturn } from '../utils';

export const apiCreateRecipe = async (data: IFormRecipeData): Promise<IApiResultReturn> => {
  const jwtToken = (await cookies()).get('jwt')?.value;

  if (!jwtToken) {
    return { isSuccess: false, message: EMsgActions.FAILED_FIND_TOKEN };
  }

  const { shortDescription, ...restData } = data;

  const extendedData = {
    ...restData,
    seo: {
      metaTitle: `${data.title} | ${SITE_NAME}`,
      metaDescription: shortDescription,
      metaRobots: 'index, follow',
      openGraph: {
        ogTitle: `${data.title} | ${SITE_NAME}`,
        ogDescription: shortDescription,
      },
    },
  };

  try {
    const res = await fetch(API_RECIPES, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify({ data: extendedData }),
    });

    const result = await res.json();

    if (!res.ok) {
      return { isSuccess: false, message: result?.error?.message };
    }

    return {
      isSuccess: true,
      message: EMsgActions.SUCCESS_CREATE_RECIPE,
    };
  } catch (err) {
    console.error(EMsgActions.FAILED_FETCH, err);
    return { isSuccess: false, message: EMsgActions.FAILED_FETCH_TRY_AGAIN };
  }
};
