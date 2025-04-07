import { recipesData } from '@/data';
import { IRecipe } from '@/utils/interfaces';
import { EUrls } from '@/utils/urls';

import { CardsItems } from '../blocks';
import { ProfileAsideMenu } from '../blocks/profile';
import { Title } from '../ui';
import { Button } from '../ui/btns';

export const MyRecipesContent = () => {
  const unpublishedCards: IRecipe[] = recipesData.filter((card) => card.isPublished === false);
  const publishedCards: IRecipe[] = recipesData.filter((card) => card.isPublished === true);

  return (
    <section className="mb-20 max-lg:my-16">
      <div className="custom-container">
        <div className="flex items-center justify-between pb-8 border-b border-gray-300 mb-16">
          <Title title="Мои рецепты" />
          <Button text="Добавить рецепт" variant="orange" href={EUrls.NEW_RECIPE} />
        </div>

        <div className="flex gap-x-20 relative">
          <div className="max-w-5xl w-full flex-shrink-0">
            <div className="flex flex-col gap-y-6 mb-12">
              <Title title="Рецепты на модерации" type="h2" />
              <p className="italic text-greyLight">
                Ваши рецепты на проверке! Как только модераторы их одобрят, они станут доступны всем.
              </p>
              <CardsItems cards={unpublishedCards} type={'myRecipes'} nothingMsg={'У вас нет добавленных рецептов!'} />
            </div>

            <div className="flex flex-col gap-y-6">
              <Title title="Опубликованные рецепты" type="h2" />
              <CardsItems cards={publishedCards} type={'myRecipes'} nothingMsg={'У вас нет добавленных рецептов!'} />
            </div>
          </div>
          <ProfileAsideMenu />
        </div>
      </div>
    </section>
  );
};
