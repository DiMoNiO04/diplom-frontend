'use client';

import { useAuthModalStore } from '@/stores/authModal';

import { Modal } from '../Modal';

export const ModalAuth = () => {
  const { isOpen, closeModal } = useAuthModalStore();

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <div>123</div>
    </Modal>
  );
};
