import { apiRegisterUser } from '@/actions/auth';
import { useAuthModalStore } from '@/stores/authModal';
import { EAuthContent } from '@/stores/authModal';
import { useNotificationStore } from '@/stores/notificationMsg';
import { ERROR_ICON } from '@/utils/consts';
import { IFormRegData } from '@/utils/validations';

export const useRegisterUser = () => {
  const { setEmail, setTabContent } = useAuthModalStore();
  const { showNotification } = useNotificationStore();

  const register = async (data: IFormRegData, reset: () => void) => {
    const { isSuccess, message } = await apiRegisterUser(data);

    if (isSuccess) {
      setEmail(data.email);
      setTabContent(EAuthContent.SUCCESS_REG);
      reset();
    } else {
      showNotification(message, ERROR_ICON);
    }
  };

  return register;
};
