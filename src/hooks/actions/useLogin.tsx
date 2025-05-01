import { apiAuthLoginUser } from '@/actions/auth';
import { EAuthContent, useAuthModalStore } from '@/stores/authModal';
import { useNotificationStore } from '@/stores/notificationMsg';
import { useUserStore } from '@/stores/user';
import { ERROR_ICON } from '@/utils/consts';
import { IFormLoginData } from '@/utils/validations';

export const useLogin = () => {
  const { closeModal, setTabContent } = useAuthModalStore();
  const { showNotification } = useNotificationStore();
  const { setUser } = useUserStore();

  const login = async (data: IFormLoginData, reset: () => void) => {
    const { isSuccess, message, user } = await apiAuthLoginUser(data);

    if (isSuccess && user) {
      closeModal();
      reset();
      setUser(user, true);
      showNotification(message);
    } else {
      showNotification(message, ERROR_ICON);
    }
  };

  const handleForgotPassword = () => {
    setTabContent(EAuthContent.PASSWORD_FORGOT);
  };

  return { login, handleForgotPassword };
};
