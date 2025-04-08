import clsx from 'clsx';

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
    <section className="my-20 max-lg:my-16">
      <div className="custom-container">
        <div
          className={clsx(
            'flex items-center justify-between pb-8 border-b border-gray-300 mb-16',
            'max-lg:pb-6 max-lg:mb-12 max-sm:flex-col max-sm:items-start max-sm:gap-4'
          )}
        >
          <Title title="Мои рецепты" />
          <Button text="Добавить рецепт" variant="orange" href={EUrls.NEW_RECIPE} className="max-sm:w-full" />
        </div>

        <div className="grid grid-cols-[3fr_1.2fr] gap-16 relative max-md:grid-cols-1 max-md:gap-12 max-lg:gap-8">
          <div className="flex-shrink-0 max-md:order-1">
            <div className="flex flex-col gap-y-6 mb-12 max-md:mb-8">
              <Title title="Рецепты на модерации" type="h2" />
              <p className="italic text-greyLight text-balance">
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
