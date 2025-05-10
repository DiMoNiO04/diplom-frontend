import { useRouter } from 'next/navigation';

import { apiFileDelete } from '@/actions/files';
import { apiGetUserInfo, apiUserChangePassword, apiUserDelete, apiUserUpdate } from '@/actions/user';
import { useChangePasswordModalStore } from '@/stores/changePasswordModal';
import { useNotificationStore } from '@/stores/notificationMsg';
import { IUserInfo, useUserStore } from '@/stores/user';
import { ERROR_ICON } from '@/utils/consts';
import { IImage } from '@/utils/interfaces';
import { EUrls } from '@/utils/urls';
import { IFormChangePasswordData } from '@/utils/validations';

export const useUser = () => {
  const router = useRouter();
  const { showNotification } = useNotificationStore();
  const { closeModal } = useChangePasswordModalStore();
  const { exitAccount, setUser } = useUserStore();

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

  const changePassword = async (data: IFormChangePasswordData, reset: () => void) => {
    const { isSuccess, message } = await apiUserChangePassword(data);

    if (isSuccess) {
      closeModal();
      reset();
      showNotification(message);
    } else {
      showNotification(message, ERROR_ICON);
    }
  };

  const updateUser = async (data: IUserInfo, initialAvatar: IImage | null) => {
    const userId = useUserStore.getState().user?.id;

    if (userId) {
      if (initialAvatar && !data.avatar) {
        await apiFileDelete(initialAvatar.id);
      }

      const { isSuccess, message } = await apiUserUpdate(userId, data);

      if (isSuccess) {
        showNotification(message);

        const user = await apiGetUserInfo();
        setUser(user, true);
      } else {
        showNotification(message, ERROR_ICON);
      }
    }
  };

  return { deleteAccount, changePassword, updateUser };
};
