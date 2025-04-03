'use client';

import { useConfirmModalStore } from '@/stores/confirmModal';

import { Button, Title } from '../ui';

export const AlreadyMade = () => {
  const { openModal } = useConfirmModalStore();

  const handleBtnYes = () => alert('Пользователь выбрал "Да"');
  const handleBtnNo = () => alert('Пользователь выбрал "Нет"');

  const handleOpenModal = () => {
    openModal('Вы бы приготовили этот рецепт снова?', handleBtnYes, handleBtnNo, true);
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
