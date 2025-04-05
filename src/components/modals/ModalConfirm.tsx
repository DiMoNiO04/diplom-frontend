'use client';

import { useConfirmModalStore } from '@/stores/confirmModal';

import { ModalTitle } from '../ui';
import { Button } from '../ui/btns';
import { Modal } from './Modal';

export const ModalConfirm = () => {
  const { isOpen, message, onConfirm, onCancel, closeModal, reverseButtons } = useConfirmModalStore();

  const handleConfirm = () => {
    onConfirm();
    closeModal();
  };

  const handleCancel = () => {
    onCancel();
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <ModalTitle title={message} />
      <div className="flex flex-col gap-y-2">
        {reverseButtons ? (
          <>
            <Button text="Да" variant="green" onClick={handleConfirm} />
            <Button text="Нет" variant="red" onClick={handleCancel} />
          </>
        ) : (
          <>
            <Button text="Нет" variant="green" onClick={handleCancel} />
            <Button text="Да" variant="red" onClick={handleConfirm} />
          </>
        )}
      </div>
    </Modal>
  );
};
