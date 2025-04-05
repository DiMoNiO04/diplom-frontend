'use client';

import { recipesData } from '@/data';
import { useConfirmModalStore } from '@/stores/confirmModal';
import { useNotificationStore } from '@/stores/notificationMsg';

import { CardsItems } from '../blocks';
import { ProfileAsideMenu } from '../blocks/profile';
import { IconDelete } from '../icons';
import { Title } from '../ui';
import { Button } from '../ui/btns';

export const FavoritesContent = () => {
  const hasFavorites = recipesData && recipesData.length > 0;

  const { openModal } = useConfirmModalStore();
  const { showNotification } = useNotificationStore();

  const handleBtnYes = () => showNotification('Все избранные рецепты удалены');

  const confirmDelete = () => {
    openModal('Удалить все ваши избранные рецепты?', handleBtnYes);
  };

  return (
    <section className="my-20">
      <div className="custom-container">
        <div className="flex items-center gap-x-2 pb-8 border-b border-gray-300 mb-8">
          <img src="/icons/favoritesIcon.svg" alt="" width={44} height={44} />
          <Title title="Избранное" />
        </div>

        <div className="flex gap-x-20 relative">
          <div className="max-w-5xl w-full flex-shrink-0">
            {hasFavorites && (
              <div className={'flex items-center justify-between mb-16'}>
                <div
                  className={'text-lg italic font-unbounded text-greyLight'}
                >{`${recipesData.length} рецепта(-ов)`}</div>
                <Button
                  text="Удалить все"
                  className="group"
                  size="sm"
                  variant="red"
                  icon={<IconDelete size={16} className="fill-white group-hover:fill-red" />}
                  onClick={confirmDelete}
                />
              </div>
            )}

            <CardsItems type="favorites" cards={recipesData} nothingMsg="У вас нет избранных рецептов" />
          </div>
          <ProfileAsideMenu />
        </div>
      </div>
    </section>
  );
};
