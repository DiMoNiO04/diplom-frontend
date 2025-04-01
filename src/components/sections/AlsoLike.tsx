import { recipesData } from '@/data';

import { CardsItems, TitleSectionBlock } from '../blocks';

interface IAlsoLikeProps {
  idRecipe: number;
  category: string;
}

const PER_PAGE_RECIPES: number = 4;

export const AlsoLike = ({ idRecipe, category }: IAlsoLikeProps) => {
  let filteredRecipes = recipesData
    .filter((recipe) => recipe.id !== idRecipe && recipe.category.name === category)
    .slice(0, PER_PAGE_RECIPES);

  if (filteredRecipes.length < PER_PAGE_RECIPES) {
    const additionalRecipes = recipesData
      .filter((recipe) => recipe.id !== idRecipe && recipe.category.name !== category)
      .slice(0, PER_PAGE_RECIPES - filteredRecipes.length);

    filteredRecipes = [...filteredRecipes, ...additionalRecipes];
  }

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
