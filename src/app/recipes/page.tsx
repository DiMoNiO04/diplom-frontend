import { Metadata } from 'next';

import { apiGetRecipesPage } from '@/actions/pages';
import { apiGetRecipes } from '@/actions/recipes';
import { RecipesContent } from '@/components/sections';
import { createMetadata } from '@/utils/seo';

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await apiGetRecipesPage();
  return createMetadata(seo);
}

export default async function RecipesPage() {
  const { headerBlock } = await apiGetRecipesPage();
  const { results: cards } = await apiGetRecipes();

  return <RecipesContent recipes={cards} {...headerBlock} />;
}
