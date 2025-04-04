import { BtnText } from '@/components/ui/btns';
import { useChangePasswordModalStore } from '@/stores/changePasswordModal';

export const ProfileChangePassword = () => {
  const { openModal } = useChangePasswordModalStore();

  return (
    <div className="flex items-start justify-end w-full mt-4">
      <BtnText text="Изменить пароль" variant="orange" onClick={openModal} />
    </div>
  );
};
