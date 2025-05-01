import { apiGetCategories } from '@/actions/categories';
import { apiGetCollections } from '@/actions/collections';
import { NewRecipe } from '@/components/sections';
import { Breadcrumbs } from '@/components/ui';
import { breadcrumbsNewRecipePage } from '@/utils/breadcrumbs';

export default async function NewRecipePage() {
  const [categoriesData, collectionsData] = await Promise.all([apiGetCategories(), apiGetCollections()]);

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbsNewRecipePage} />
      <NewRecipe collections={collectionsData.results} categories={categoriesData.results} />;
    </>
  );
}
