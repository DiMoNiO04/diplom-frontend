import { useRouter } from 'next/navigation';

import { apiGetUserInfo, apiUserSubscribe } from '@/actions/user';
import { useNotificationStore } from '@/stores/notificationMsg';
import { useUserStore } from '@/stores/user';
import { ERROR_ICON } from '@/utils/consts';

export const useSubscribeUser = () => {
  const { showNotification } = useNotificationStore();
  const router = useRouter();
  const { setUser } = useUserStore();

  const user = useUserStore.getState().user;

  const handleSubscription = async (isSubscribe: boolean) => {
    if (!user?.id || !user?.email) return;

    const { isSuccess, message } = await apiUserSubscribe(user.id, {
      isSubscribe,
      email: user.email,
    });

    showNotification(message, isSuccess ? undefined : ERROR_ICON);
    if (isSuccess) {
      router.refresh();

      const user = await apiGetUserInfo();
      setUser(user, true);
    }
  };

  const subscribeUser = () => handleSubscription(true);
  const unSubscribeUser = () => handleSubscription(false);

  return { subscribeUser, unSubscribeUser };
};
