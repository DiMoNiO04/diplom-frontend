import { CategoryHeaderImage, RecipesContent } from '@/components/sections';
import { categoriesData } from '@/data';
import { fetchByKey } from '@/utils/functions';
import { ICategory, IPageSlugProps } from '@/utils/interfaces';

export default async function CategoryPage({ params }: IPageSlugProps) {
  const category: ICategory = await fetchByKey(categoriesData, 'slug', (await params).slug);

  return (
    <>
      <CategoryHeaderImage img={category.fullImage} />
      <RecipesContent {...category} />
    </>
  );
}
