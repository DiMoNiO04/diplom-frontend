import { IBtn, IImage, IText } from '@/utils/interfaces';

import { API_SHARE_RECIPE_TEMPLATE, REVALIDATE_HOUR_TIME } from './consts';

interface IShareRecipeTemplate {
  title: string;
  texts: IText[];
  img: IImage;
  btn: IBtn;
}

async function getShareRecipeTemplate(): Promise<IShareRecipeTemplate> {
  const res = await fetch(API_SHARE_RECIPE_TEMPLATE, {
    next: { revalidate: REVALIDATE_HOUR_TIME },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch Share Recipe Template');
  }

  const data = await res.json();

  return data;
}

export { getShareRecipeTemplate };
export type { IShareRecipeTemplate };
