'use client';

import { EAuthContent, useAuthModalStore } from '@/stores/authModal';

import { Modal } from '../Modal';
import {
  EModalAuthNotification,
  ModalAuthLogin,
  ModalAuthNotification,
  ModalAuthPasswordForgot,
  ModalAuthPasswordNew,
  ModalAuthReg,
} from './components';

export const ModalAuth = () => {
  const { isOpen, closeModal, tabContent } = useAuthModalStore();

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      {tabContent === EAuthContent.LOGIN && <ModalAuthLogin />}
      {tabContent === EAuthContent.REG && <ModalAuthReg />}
      {tabContent === EAuthContent.PASSWORD_FORGOT && <ModalAuthPasswordForgot />}
      {tabContent === EAuthContent.PASSWORD_NEW && <ModalAuthPasswordNew />}
      {tabContent === EAuthContent.CHECK_EMAIL && <ModalAuthNotification type={EModalAuthNotification.CHECK_EMAIL} />}
      {tabContent === EAuthContent.CHANGE_PASSWORD && (
        <ModalAuthNotification type={EModalAuthNotification.CHANGE_PASS} />
      )}
      {tabContent === EAuthContent.SUCCESS_REG && <ModalAuthNotification type={EModalAuthNotification.SUCCESS_REG} />}
    </Modal>
  );
};
