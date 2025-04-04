'use client';

import { useConfirmModalStore } from '@/stores/confirmModal';

import { Button } from '../ui';
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
      <div className="font-unbounded text-2xl mb-4">{message}</div>
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
