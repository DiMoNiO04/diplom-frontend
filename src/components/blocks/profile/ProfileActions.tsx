'use client';

import { useRouter } from 'next/navigation';

import { IconDelete, IconLogOut } from '@/components/icons';
import { BtnText } from '@/components/ui/btns';
import { useLogout } from '@/hooks';
import { useConfirmModalStore } from '@/stores/confirmModal';
import { useNotificationStore } from '@/stores/notificationMsg';
import { useUserStore } from '@/stores/user';
import { EUrls } from '@/utils/urls';

export const ProfileActions = () => {
  const router = useRouter();

  const { openModal } = useConfirmModalStore();
  const { showNotification } = useNotificationStore();
  const { exitAccount } = useUserStore();
  const { logout } = useLogout();

  const handleBtnYesDeleteAccount = () => {
    exitAccount();
    showNotification('Аккаунт удален!');
    router.replace(EUrls.HOME);
  };

  const handleOpenModalDeleteAccount = () =>
    openModal('Вы уверены что хотите удалить свой аккаунт?', handleBtnYesDeleteAccount);
  const handleOpenModalExitAccount = () => openModal('Вы уверены что хотите выйти из аккаунта?', logout);

  return (
    <div className="flex items-center justify-between">
      <BtnText text="Выйти" icon={<IconLogOut />} variant="black" onClick={handleOpenModalExitAccount} />
      <BtnText
        text="Удалить аккаунт"
        icon={<IconDelete className="fill-orange group-lg:hover:fill-black" />}
        variant="orange"
        onClick={handleOpenModalDeleteAccount}
      />
    </div>
  );
};
