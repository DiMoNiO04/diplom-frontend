import { IBasePage, IImage, IRecipe } from '@/utils/interfaces';

import { API_COLLECTION } from '../consts';

interface ICollectionPage extends IBasePage {
  title: string;
  description: string;
  img: IImage;
  recipes: IRecipe[];
}

export async function getSingleCollection(slug: string): Promise<ICollectionPage> {
  const res = await fetch(API_COLLECTION(slug), {
    cache: 'no-cache',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch Collection');
  }

  const { data } = await res.json();

  return data;
}
