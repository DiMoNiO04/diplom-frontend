'use client';

import { useMadeAgainModalStore } from '@/stores/madeAgainModal';

import { Button } from '../ui';
import { Modal } from './Modal';

export const ModalMadeAgain = () => {
  const { isOpen, closeModal } = useMadeAgainModalStore();

  const handleClickBtnYes = () => {
    alert('Yes');
    closeModal();
  };

  const handleClickBtnNo = () => {
    alert('No');
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <div className="font-unbounded text-2xl mb-4">Вы бы приготовили этот рецепт снова?</div>
      <div className="flex flex-col gap-y-2">
        <Button text="Да" variant="green" onClick={handleClickBtnYes} />
        <Button text="Нет" variant="red" onClick={handleClickBtnNo} />
      </div>
    </Modal>
  );
};
