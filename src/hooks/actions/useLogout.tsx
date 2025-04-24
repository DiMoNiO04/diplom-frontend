import { apiLogoutUser } from '@/actions/auth';
import { useNotificationStore } from '@/stores/notificationMsg';
import { useUserStore } from '@/stores/user';
import { ERROR_ICON } from '@/utils/consts';

export const useLogout = () => {
  const { showNotification } = useNotificationStore();
  const { exitAccount } = useUserStore();

  const logout = async () => {
    const { isSuccess, message } = await apiLogoutUser();

    if (isSuccess) {
      exitAccount();
      showNotification(message);
    } else {
      showNotification(message, ERROR_ICON);
    }
  };

  return { logout };
};
