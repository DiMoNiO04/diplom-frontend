import { Title } from '@/components/ui';
import { BtnText } from '@/components/ui/btns';
import { useConfirmModalStore } from '@/stores/confirmModal';
import { useNotificationStore } from '@/stores/notificationMsg';

export const ProfileConnectedAccounts = () => {
  const { openModal } = useConfirmModalStore();
  const { showNotification } = useNotificationStore();

  const handleBtnYesDisabledFacebook = () => {
    showNotification('Вы отписались от google');
  };

  const handleOpenModalDisabledFacebook = () =>
    openModal('Вы уверены что хотите отключиться от facebook?', handleBtnYesDisabledFacebook);

  const handleBtnYesDisabledGoogle = () => alert('Вы отключили аккаунт google');
  const handleOpenModalDisabledGoogle = () =>
    openModal('Вы уверены что хотите отключиться от google?', handleBtnYesDisabledGoogle);

  return (
    <div className="mb-24">
      <Title type="h3" title="Подключенные аккаунты" />
      <div className="flex items-center justify-between mb-6 pb-3 border-b border-gray-300">
        <div className="flex flex-col gap-y-2">
          <img src="/icons/facebook.svg" alt="" />
          <div className="text-greyLight text-sm">Suzan Miller</div>
        </div>
        <BtnText text="Отключить" variant="black" onClick={handleOpenModalDisabledFacebook} />
      </div>
      <div className="flex items-center justify-between mb-6 pb-3 border-b border-gray-300">
        <div className="flex flex-col gap-y-2">
          <img src="/icons/google.svg" alt="" />
          <div className="text-greyLight text-sm">Suzan@gmail.com</div>
        </div>
        <BtnText text="Отключить" variant="black" onClick={handleOpenModalDisabledGoogle} />
      </div>
    </div>
  );
};
