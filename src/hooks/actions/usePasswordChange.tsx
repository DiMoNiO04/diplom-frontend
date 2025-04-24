import { apiChangePassword } from '@/actions/user';
import { useChangePasswordModalStore } from '@/stores/changePasswordModal';
import { useNotificationStore } from '@/stores/notificationMsg';
import { ERROR_ICON } from '@/utils/consts';
import { IFormChangePasswordData } from '@/utils/validations';

export const usePasswordChange = () => {
  const { closeModal } = useChangePasswordModalStore();
  const { showNotification } = useNotificationStore();

  const changePassword = async (data: IFormChangePasswordData, reset: () => void) => {
    const { isSuccess, message } = await apiChangePassword(data);

    if (isSuccess) {
      closeModal();
      reset();
      showNotification(message);
    } else {
      showNotification(message, ERROR_ICON);
    }
  };

  return changePassword;
};
