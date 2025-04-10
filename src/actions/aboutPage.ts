import { IBasePage, ISimpleContent, ITitleWithTexts } from '@/utils/interfaces';

import { API_ABOUT_PAGE, REVALIDATE_HOUR_TIME } from './consts';

interface IAboutPage extends IBasePage {
  aboutMain: ISimpleContent;
  simpleRecipes: ISimpleContent;
  operating: ITitleWithTexts;
}

export async function getAboutPage(): Promise<IAboutPage> {
  const res = await fetch(API_ABOUT_PAGE, {
    next: { revalidate: REVALIDATE_HOUR_TIME },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch About Page');
  }

  const data = await res.json();

  return data;
}
