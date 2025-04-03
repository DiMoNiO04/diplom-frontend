'use client';

import { useChangePasswordModalStore } from '@/stores/changePasswordModal';

import { FormChangePassword } from '../forms';
import { Modal } from './Modal';

export const ModalChangePassword = () => {
  const { isOpen, closeModal } = useChangePasswordModalStore();

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <div className="font-unbounded text-2xl mb-4">Изменить пароль</div>
      <FormChangePassword />
    </Modal>
  );
};
