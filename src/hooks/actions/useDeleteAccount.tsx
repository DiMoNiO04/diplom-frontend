import { useRouter } from 'next/navigation';

import { apiUserDelete } from '@/actions/user';
import { useNotificationStore } from '@/stores/notificationMsg';
import { useUserStore } from '@/stores/user';
import { ERROR_ICON } from '@/utils/consts';
import { EUrls } from '@/utils/urls';

export const useDeleteAccount = () => {
  const router = useRouter();
  const { showNotification } = useNotificationStore();
  const { exitAccount } = useUserStore();

  const deleteAccount = async () => {
    const userId = useUserStore.getState().user?.id;

    if (!userId) return;

    const { isSuccess, message } = await apiUserDelete(userId);

    if (isSuccess) {
      showNotification(message);
      exitAccount();
      router.replace(EUrls.HOME);
    } else {
      showNotification(message, ERROR_ICON);
    }
  };

  return { deleteAccount };
};
