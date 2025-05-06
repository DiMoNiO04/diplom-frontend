import { apiGetRecipesCookAgain } from '@/actions/recipes';

import { CardsItems } from '../blocks';
import { ProfileAsideMenu } from '../blocks/profile';
import { Title } from '../ui';

export const WantCookAgainContent = async () => {
  const { data: recipes } = await apiGetRecipesCookAgain();

  return (
    <section className="my-12 mb-20 max-lg:mb-16 max-lg:my-12">
      <div className="custom-container">
        <Title title="Хочу приготовить снова" isBorder />

        <div className="grid grid-cols-[3fr_1.2fr] gap-16 relative max-md:grid-cols-1 max-md:gap-12 max-lg:gap-8">
          <div className="flex-shrink-0 max-md:order-1">
            <CardsItems cards={recipes} type={'cookAgain'} nothingMsg={'У вас нет таких рецептов!'} />
          </div>
          <ProfileAsideMenu />
        </div>
      </div>
    </section>
  );
};
