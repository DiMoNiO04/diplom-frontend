import { useRouter } from 'next/navigation';

import { apiAuthForgotPassword, apiAuthLoginUser, apiAuthLogoutUser, apiAuthRegisterUser } from '@/actions/auth';
import { EAuthContent, useAuthModalStore } from '@/stores/authModal';
import { useNotificationStore } from '@/stores/notificationMsg';
import { useUserStore } from '@/stores/user';
import { ERROR_ICON } from '@/utils/consts';
import { IFormLoginData, IFormPasswordForgotData, IFormRegData } from '@/utils/validations';

export const useAuth = () => {
  const { showNotification } = useNotificationStore();
  const { exitAccount, setUser } = useUserStore();
  const { closeModal, setTabContent, setEmail } = useAuthModalStore();
  const router = useRouter();

  const logout = async () => {
    const { isSuccess, message, redirectTo } = await apiAuthLogoutUser();

    if (isSuccess) {
      exitAccount();
      showNotification(message);

      if (redirectTo) {
        router.push(redirectTo);
      }
    } else {
      showNotification(message, ERROR_ICON);
    }
  };

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

  const register = async (data: IFormRegData, reset: () => void) => {
    const { isSuccess, message } = await apiAuthRegisterUser(data);

    if (isSuccess) {
      setEmail(data.email);
      setTabContent(EAuthContent.SUCCESS_REG);
      reset();
    } else {
      showNotification(message, ERROR_ICON);
    }
  };

  const forgotPassword = async (data: IFormPasswordForgotData, reset: () => void) => {
    const { isSuccess, message } = await apiAuthForgotPassword(data);

    if (isSuccess) {
      setTabContent(EAuthContent.CHECK_EMAIL);
      setEmail(data.email);
      reset();
    } else {
      showNotification(message, ERROR_ICON);
    }
  };

  return { logout, login, register, handleForgotPassword, forgotPassword };
};
