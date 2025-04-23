import { IBasePage, ISimpleContent, ITitleWithTexts } from '@/utils/interfaces';

import { API_ABOUT_PAGE, EMsgActions, REVALIDATE_HOUR_TIME } from '../utils';

interface IAboutPage extends IBasePage {
  aboutMain: ISimpleContent;
  simpleRecipes: ISimpleContent;
  operating: ITitleWithTexts;
}

export async function apiGetAboutPage(): Promise<IAboutPage> {
  const res = await fetch(API_ABOUT_PAGE, {
    next: { revalidate: REVALIDATE_HOUR_TIME },
  });

  if (!res.ok) {
    throw new Error(EMsgActions.FAILED_FETCH);
  }

  const data = await res.json();

  return data;
}
