'use client';

import { useRouter } from 'next/navigation';

import { IconDelete, IconLogOut } from '@/components/icons';
import { BtnText } from '@/components/ui/btns';
import { useConfirmModalStore } from '@/stores/confirmModal';
import { useNotificationStore } from '@/stores/notificationMsg';
import { EUrls } from '@/utils/urls';

export const ProfileActions = () => {
  const router = useRouter();

  const { openModal } = useConfirmModalStore();
  const { showNotification } = useNotificationStore();

  const handleBtnYesDeleteAccount = () => {
    showNotification('Аккаунт удален!');
    router.replace(EUrls.HOME, { scroll: false });
  };

  const handleBtnNoDeleteAccount = () => alert('Аккаунт не удален');
  const handleOpenModalDeleteAccount = () =>
    openModal('Вы уверены что хотите удалить свой аккаунт?', handleBtnYesDeleteAccount, handleBtnNoDeleteAccount);

  const handleBtnYesExitAccount = () => {
    showNotification('Вы вышли из аккаунта!');
    router.replace(EUrls.HOME, { scroll: false });
  };

  const handleBtnNoExitAccount = () => alert('Вы остались в аккаунте');
  const handleOpenModalExitAccount = () =>
    openModal('Вы уверены что хотите выйти из аккаунта?', handleBtnYesExitAccount, handleBtnNoExitAccount);

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
