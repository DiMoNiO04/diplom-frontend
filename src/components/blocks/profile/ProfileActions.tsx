'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { apiLogoutUser } from '@/actions/auth';
import { apiDeleteUser } from '@/actions/user';
import { IconDelete, IconLogOut } from '@/components/icons';
import { BtnText } from '@/components/ui/btns';
import { useConfirmModalStore } from '@/stores/confirmModal';
import { useNotificationStore } from '@/stores/notificationMsg';
import { useUserStore } from '@/stores/user';
import { EUrls } from '@/utils/urls';

export const ProfileActions = () => {
  const router = useRouter();

  const { openModal } = useConfirmModalStore();
  const { showNotification } = useNotificationStore();
  const { exitAccount } = useUserStore();

  const logout = async () => {
    const { isSuccess, message } = await apiLogoutUser();

    if (isSuccess) {
      exitAccount();
      showNotification(message);
    } else {
      showNotification(message, '/icons/error.svg');
    }
  };

  const handleBtnYesDeleteAccount = async () => {
    const userId = useUserStore.getState().user?.id;

    if (userId) {
      const { isSuccess, message } = await apiDeleteUser(userId);

      if (isSuccess) {
        showNotification(message);
        exitAccount();
        router.replace(EUrls.HOME);
      } else {
        showNotification(message, '/icons/error.svg');
      }
    }
  };

  useEffect(() => {
    console.log(useUserStore.getState());
  }, []);

  const handleOpenModalDeleteAccount = () =>
    openModal('Вы уверены что хотите удалить свой аккаунт?', handleBtnYesDeleteAccount);
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
