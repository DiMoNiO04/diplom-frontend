'use client';

import { EAuthContent, useAuthModalStore } from '@/stores/authModal';

import { Modal } from '../Modal';
import { ModalAuthLogin } from './components';

export const ModalAuth = () => {
  const { isOpen, closeModal, tabContent } = useAuthModalStore();

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <div>{tabContent === EAuthContent.LOGIN && <ModalAuthLogin />}</div>
    </Modal>
  );
};
