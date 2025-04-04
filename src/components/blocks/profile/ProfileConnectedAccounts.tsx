import { BtnText } from '@/components/ui/btns';
import { useConfirmModalStore } from '@/stores/confirmModal';

export const ProfileConnectedAccounts = () => {
  const { openModal } = useConfirmModalStore();

  const handleBtnYesDisabledFacebook = () => alert('Вы отключили аккаунт facebook');
  const handleBtnNoDisabledFacebook = () => alert('Вы не отключили аккаунт facebook');
  const handleOpenModalDisabledFacebook = () =>
    openModal(
      'Вы уверены что хотите отключиться от facebook?',
      handleBtnYesDisabledFacebook,
      handleBtnNoDisabledFacebook
    );

  const handleBtnYesDisabledGoogle = () => alert('Вы отключили аккаунт google');
  const handleBtnNoDisabledGoogle = () => alert('Вы не отключили аккаунт google');
  const handleOpenModalDisabledGoogle = () =>
    openModal('Вы уверены что хотите отключиться от google?', handleBtnYesDisabledGoogle, handleBtnNoDisabledGoogle);

  return (
    <div className="mb-24">
      <h3 className="font-unbounded mb-4 text-lg font-medium">Подключенные аккаунты</h3>
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
