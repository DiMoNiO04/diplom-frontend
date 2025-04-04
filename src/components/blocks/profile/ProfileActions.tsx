import { DeleteIcon, LogOutIcon } from '@/components/icons';
import { BtnText } from '@/components/ui/btns';
import { useConfirmModalStore } from '@/stores/confirmModal';

export const ProfileActions = () => {
  const { openModal } = useConfirmModalStore();

  const handleBtnYesDeleteAccount = () => alert('Аккаунт удален');
  const handleBtnNoDeleteAccount = () => alert('Аккаунт не удален');
  const handleOpenModalDeleteAccount = () =>
    openModal('Вы уверены что хотите удалить свой аккаунт?', handleBtnYesDeleteAccount, handleBtnNoDeleteAccount);

  const handleBtnYesExitAccount = () => alert('Вы вышли из аккаунта');
  const handleBtnNoExitAccount = () => alert('Вы остались в аккаунте');
  const handleOpenModalExitAccount = () =>
    openModal('Вы уверены что хотите выйти из аккаунта?', handleBtnYesExitAccount, handleBtnNoExitAccount);

  return (
    <div className="flex items-center justify-between">
      <BtnText text="Выйти" icon={<LogOutIcon />} variant="black" onClick={handleOpenModalExitAccount} />
      <BtnText
        text="Удалить аккаунт"
        icon={<DeleteIcon className="fill-orange group-hover:fill-black" />}
        variant="orange"
        onClick={handleOpenModalDeleteAccount}
      />
    </div>
  );
};
