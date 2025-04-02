import { recipesData } from '@/data';

import { CardsItems } from '../blocks';
import { DeleteIcon } from '../icons';
import { Button, Title } from '../ui';

export const FavoritesContent = () => {
  const hasFavorites = recipesData && recipesData.length > 0;

  return (
    <section className="my-20">
      <div className="custom-container">
        <div className="flex items-center gap-x-2 pb-8 border-b border-gray-300 mb-8">
          <img src="/icons/favoritesIcon.svg" alt="" width={44} height={44} />
          <Title title="Избранное" />
        </div>

        {hasFavorites && (
          <div className={'flex items-center justify-between mb-16'}>
            <div className={'text-lg italic font-unbounded text-greyLight'}>{`${recipesData.length} рецепта(-ов)`}</div>
            <Button text="Удалить все" className="group" size="sm" variant="red" icon={<DeleteIcon />} />
          </div>
        )}

        <CardsItems type="recipe" cards={recipesData} nothingMsg="У вас нет избранных рецептов" />
      </div>
    </section>
  );
};
