import { apiForgotPassword } from '@/actions/auth';
import { EAuthContent, useAuthModalStore } from '@/stores/authModal';
import { useNotificationStore } from '@/stores/notificationMsg';
import { ERROR_ICON } from '@/utils/consts';
import { IFormPasswordForgotData } from '@/utils/validations';

export const usePasswordForgot = () => {
  const { setTabContent, setEmail } = useAuthModalStore();
  const { showNotification } = useNotificationStore();

  const forgotPassword = async (data: IFormPasswordForgotData, reset: () => void) => {
    const { isSuccess, message } = await apiForgotPassword(data);

    if (isSuccess) {
      setTabContent(EAuthContent.CHECK_EMAIL);
      setEmail(data.email);
      reset();
    } else {
      showNotification(message, ERROR_ICON);
    }
  };

  return { forgotPassword };
};
