'use client';

import { EAuthContent, useAuthModalStore } from '@/stores/authModal';

import { Modal } from '../Modal';
import { ModalAuthLogin, ModalAuthPasswordForgot, ModalAuthReg } from './components';

export const ModalAuth = () => {
  const { isOpen, closeModal, tabContent } = useAuthModalStore();

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      {tabContent === EAuthContent.LOGIN && <ModalAuthLogin />}
      {tabContent === EAuthContent.REG && <ModalAuthReg />}
      {tabContent === EAuthContent.PASSWORD_FORGOT && <ModalAuthPasswordForgot />}
    </Modal>
  );
};
