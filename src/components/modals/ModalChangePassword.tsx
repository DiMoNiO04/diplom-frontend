'use client';

import { useChangePasswordModalStore } from '@/stores/changePasswordModal';

import { FormChangePassword } from '../forms';
import { ModalTitle } from '../ui';
import { Modal } from './Modal';

export const ModalChangePassword = () => {
  const { isOpen, closeModal } = useChangePasswordModalStore();

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <ModalTitle title={'Изменить пароль'} />
      <FormChangePassword />
    </Modal>
  );
};
