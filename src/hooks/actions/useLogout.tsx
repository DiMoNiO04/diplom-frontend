import { useRouter } from 'next/navigation';

import { apiAuthLogoutUser } from '@/actions/auth';
import { useNotificationStore } from '@/stores/notificationMsg';
import { useUserStore } from '@/stores/user';
import { ERROR_ICON } from '@/utils/consts';

export const useLogout = () => {
  const { showNotification } = useNotificationStore();
  const { exitAccount } = useUserStore();
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

  return { logout };
};
