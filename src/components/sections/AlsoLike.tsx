import { apiGetRecipes } from '@/actions/recipes';
import { getSimilarRecipes } from '@/utils/functions';
import { ICategory } from '@/utils/interfaces';

import { CardsItems, TitleSectionBlock } from '../blocks';

interface IAlsoLikeProps {
  idRecipe: string;
  categories: ICategory[];
}

export const AlsoLike = async ({ idRecipe, categories }: IAlsoLikeProps) => {
  const { results: recipes } = await apiGetRecipes();

  const filteredRecipes = getSimilarRecipes(recipes, idRecipe, categories);

  if (filteredRecipes.length === 0) return null;

  return (
    <section className="mb-16">
      <div className="custom-container">
        <TitleSectionBlock title="Вам также может понравиться" />
        <CardsItems cards={filteredRecipes} type="recipe" nothingMsg="Ничего не найдено" />
      </div>
    </section>
  );
};
