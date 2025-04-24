'use client';

import { IconDelete, IconLogOut } from '@/components/icons';
import { BtnText } from '@/components/ui/btns';
import { useDeleteAccount, useLogout } from '@/hooks/actions';
import { useConfirmModalStore } from '@/stores/confirmModal';

export const ProfileActions = () => {
  const { openModal } = useConfirmModalStore();

  const { logout } = useLogout();
  const { deleteAccount } = useDeleteAccount();

  const handleOpenModalDeleteAccount = () => openModal('Вы уверены что хотите удалить свой аккаунт?', deleteAccount);

  const handleOpenModalExitAccount = () => openModal('Вы уверены что хотите выйти из аккаунта?', logout);

  return (
    <div className="flex items-center justify-between">
      <BtnText text="Выйти" icon={<IconLogOut />} variant="black" onClick={handleOpenModalExitAccount} />
      <BtnText
        text="Удалить аккаунт"
        icon={<IconDelete className="fill-orange group-hover:fill-black" />}
        variant="orange"
        onClick={handleOpenModalDeleteAccount}
      />
    </div>
  );
};
