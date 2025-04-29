import { IBtn, IImage, IText } from '@/utils/interfaces';

import { apiFetch } from '../api';
import { API_SHARE_RECIPE_TEMPLATE, REVALIDATE_HOUR_TIME } from '../utils';

export interface IShareRecipeTemplate {
  title: string;
  texts: IText[];
  img: IImage;
  btn: IBtn;
}

export const apiGetShareRecipeTemplate = (): Promise<IShareRecipeTemplate> =>
  apiFetch<IShareRecipeTemplate>(API_SHARE_RECIPE_TEMPLATE, {
    next: { revalidate: REVALIDATE_HOUR_TIME },
  });
