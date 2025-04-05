'use client';

import { useAuthModalStore } from '@/stores/authModal';
import { useConfirmModalStore } from '@/stores/confirmModal';
import { useUserStore } from '@/stores/user';

import { Title } from '../ui';
import { Button } from '../ui/btns';

export const AlreadyMade = () => {
  const { openModal: openModalConfirm } = useConfirmModalStore();
  const { openModal: openModalAuth } = useAuthModalStore();
  const { isAuth } = useUserStore();

  const handleBtnYes = () => alert('Пользователь выбрал "Да"');

  const handleOpenModal = () => {
    openModalConfirm('Вы бы приготовили этот рецепт снова?', handleBtnYes, undefined, true);
  };

  const handleClickBtn = () => (isAuth ? handleOpenModal() : openModalAuth());

  return (
    <section className="mb-20">
      <div className="custom-container">
        <div className="border-b-8 border-orange pb-8 flex flex-col gap-y-8">
          <Title title="Сделали бы это снова?" type="h2" />
          <Button text="Поделитесь своим отзывом" className="w-fit" onClick={handleClickBtn} />
        </div>
      </div>
    </section>
  );
};
