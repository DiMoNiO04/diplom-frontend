import clsx from 'clsx';

import { apiGetRecipesUser } from '@/actions/recipes';
import { EUrls } from '@/utils/urls';

import { CardsItems } from '../blocks';
import { ProfileAsideMenu } from '../blocks/profile';
import { Title } from '../ui';
import { Button } from '../ui/btns';

export const MyRecipesContent = async () => {
  const { results: recipes } = await apiGetRecipesUser();

  return (
    <section className="my-12 mb-20 max-lg:mb-16 max-lg:my-12">
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
            <CardsItems cards={recipes} type={'myRecipes'} nothingMsg={'У вас нет созданных рецептов!'} />
          </div>
          <ProfileAsideMenu />
        </div>
      </div>
    </section>
  );
};
