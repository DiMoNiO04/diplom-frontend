import { IRecipesProps } from '@/utils/interfaces';

import { CardsItems, TitleSectionBlock } from '../blocks';

export const DeliciousRecipes = ({ recipes }: IRecipesProps) => {
  const deliciousRecipesData = recipes.slice(0, 6);

  return (
    <section className="mb-20 max-lg:mb-16">
      <div className="custom-container">
        <TitleSectionBlock title="Самые вкусные" />
        <CardsItems
          cards={deliciousRecipesData}
          type={'deliciousRecipes'}
          nothingMsg={'Рецептов нет!'}
          hideOnMobileAfter={4}
        />
      </div>
    </section>
  );
};
