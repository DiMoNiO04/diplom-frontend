import { useRouter } from 'next/navigation';

import { useNotificationStore } from '@/stores/notificationMsg';
import { useUserStore } from '@/stores/user';
import { EUrls } from '@/utils/urls';

export const useLogout = () => {
  const router = useRouter();
  const { exitAccount } = useUserStore();
  const { showNotification } = useNotificationStore();

  const logout = (redirect = false) => {
    exitAccount();
    showNotification('Вы вышли из аккаунта!');
    if (redirect) {
      router.replace(EUrls.HOME);
    }
  };

  return { logout };
};
