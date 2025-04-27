import { apiDeleteFile } from '@/actions/files';
import { apiUpdateUser } from '@/actions/user';
import { apiGetUserInfo } from '@/actions/user';
import { useNotificationStore } from '@/stores/notificationMsg';
import { IUserInfo, useUserStore } from '@/stores/user';
import { ERROR_ICON } from '@/utils/consts';
import { IImage } from '@/utils/interfaces';

export const useUpdateUser = () => {
  const { showNotification } = useNotificationStore();
  const { setUser } = useUserStore();

  const updateUser = async (data: IUserInfo, initialAvatar: IImage | null) => {
    const userId = useUserStore.getState().user?.id;

    if (userId) {
      if (initialAvatar && !data.avatar) {
        await apiDeleteFile(initialAvatar.id);
      }

      const { isSuccess, message } = await apiUpdateUser(userId, data);

      if (isSuccess) {
        showNotification(message);

        const user = await apiGetUserInfo();
        setUser(user, true);
      } else {
        showNotification(message, ERROR_ICON);
      }
    }
  };

  return { updateUser };
};
