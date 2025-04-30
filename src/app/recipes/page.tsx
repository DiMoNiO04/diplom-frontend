import { Metadata } from 'next';

import { apiGetRecipes } from '@/actions/recipes';
import { RecipesContent } from '@/components/sections';
import { createMetadata } from '@/utils/seo';
import { seoRecipesPage } from '@/utils/seo/seoData';

export async function generateMetadata(): Promise<Metadata> {
  return createMetadata(seoRecipesPage());
}

export default async function RecipesPage() {
  const { results: cards } = await apiGetRecipes();

  return <RecipesContent recipes={cards} />;
}
