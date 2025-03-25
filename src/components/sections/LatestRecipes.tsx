import { recipesData } from '@/data';
import { EUrls } from '@/utils/urls';

import { RecipesCardsList, TitleSectionBlock } from '../blocks';

export const LatestRecipes = () => {
  return (
    <section className="mb-24">
      <div className="custom-container">
        <TitleSectionBlock title="Последние рецепты" linkTxt="Смотреть все" linkUrl={EUrls.RECIPES} />
        <RecipesCardsList cards={recipesData} nothingMsg="Рецептов на данный момент нет!" />
      </div>
    </section>
  );
};
