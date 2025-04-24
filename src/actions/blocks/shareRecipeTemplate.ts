import { IBtn, IImage, IText } from '@/utils/interfaces';

import { API_SHARE_RECIPE_TEMPLATE, EMsgActions, REVALIDATE_HOUR_TIME } from '../utils';

interface IShareRecipeTemplate {
  title: string;
  texts: IText[];
  img: IImage;
  btn: IBtn;
}

async function apiGetShareRecipeTemplate(): Promise<IShareRecipeTemplate> {
  const res = await fetch(API_SHARE_RECIPE_TEMPLATE, {
    next: { revalidate: REVALIDATE_HOUR_TIME },
  });

  if (!res.ok) {
    throw new Error(EMsgActions.FAILED_FETCH);
  }

  const data = await res.json();

  return data;
}

export { apiGetShareRecipeTemplate };
export type { IShareRecipeTemplate };
