import { recipesData } from '@/data';
import { EUrls } from '@/utils/urls';

import { RecipesCardsList, TitleSectionBlock } from '../blocks';
import { LoadMoreRecipes } from '../blocks/LoadMoreRecipes';

const RECIPES_PER_PAGE: number = 8;

export const LatestRecipes = () => {
  const initialRecipes = recipesData.slice(0, RECIPES_PER_PAGE);
  const remainingRecipes = recipesData.slice(RECIPES_PER_PAGE);

  return (
    <section className="mb-24">
      <div className="custom-container">
        <TitleSectionBlock title="Последние рецепты" linkUrl={EUrls.RECIPES} />
        <RecipesCardsList cards={initialRecipes} nothingMsg="Рецептов на данный момент нет!" />
        <LoadMoreRecipes remainingRecipes={remainingRecipes} perPage={RECIPES_PER_PAGE} />
      </div>
    </section>
  );
};
