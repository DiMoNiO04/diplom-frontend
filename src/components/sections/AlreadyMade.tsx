'use client';

import { useConfirmModalStore } from '@/stores/confirmModal';

import { Title } from '../ui';
import { Button } from '../ui/btns';

export const AlreadyMade = () => {
  const { openModal } = useConfirmModalStore();

  const handleBtnYes = () => alert('Пользователь выбрал "Да"');

  const handleOpenModal = () => {
    openModal('Вы бы приготовили этот рецепт снова?', handleBtnYes, undefined, true);
  };

  return (
    <section className="mb-20">
      <div className="custom-container">
        <div className="border-b-8 border-orange pb-8 flex flex-col gap-y-8">
          <Title title="Сделали бы это снова?" type="h2" />
          <Button text="Поделитесь своим отзывом" className="w-fit" onClick={handleOpenModal} />
        </div>
      </div>
    </section>
  );
};
