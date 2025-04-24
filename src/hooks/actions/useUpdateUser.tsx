import { apiUpdateUser } from '@/actions/user';
import { useNotificationStore } from '@/stores/notificationMsg';
import { IUserInfo, useUserStore } from '@/stores/user';
import { ERROR_ICON } from '@/utils/consts';

export const useUpdateUser = () => {
  const { showNotification } = useNotificationStore();

  const updateUser = async (data: IUserInfo) => {
    const userId = useUserStore.getState().user?.id;

    if (userId) {
      const { isSuccess, message } = await apiUpdateUser(userId, data);

      if (isSuccess) {
        showNotification(message);
      } else {
        showNotification(message, ERROR_ICON);
      }
    }
  };

  return { updateUser };
};
