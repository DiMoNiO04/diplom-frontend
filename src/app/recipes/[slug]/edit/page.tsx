import { Metadata } from 'next';

import { apiGetCategories } from '@/actions/categories';
import { apiGetRecipe } from '@/actions/recipes';
import { EditRecipe } from '@/components/sections';
import { Breadcrumbs } from '@/components/ui';
import { getEditRecipeBreadcrumbs } from '@/utils/breadcrumbs';
import { IPageSlugProps } from '@/utils/interfaces';
import { createMetadata } from '@/utils/seo';
import { seoEditRecipePage } from '@/utils/seo/seoData';
import { IFormRecipeData } from '@/utils/validations';

export async function generateMetadata(): Promise<Metadata> {
  return createMetadata(seoEditRecipePage());
}

export default async function EditRecipePage({ params }: IPageSlugProps) {
  const [categoriesData, recipe] = await Promise.all([apiGetCategories(), apiGetRecipe((await params).slug)]);

  const { title, documentId, seo, description, ingredients, instructions, cookingTime, calories, categories, img } =
    recipe;

  const recipeData: IFormRecipeData = {
    title,
    shortDescription: seo.metaDescription,
    description,
    ingredients,
    instructions,
    cookingTime,
    calories,
    categories: categories.map((category) => category.documentId),
    img: img.map((i) => i.url),
  };

  const breadcrumbs = getEditRecipeBreadcrumbs(recipe.title, recipe.documentId);

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <EditRecipe idRecipe={documentId} recipe={recipeData} categories={categoriesData.results} />
    </>
  );
}
