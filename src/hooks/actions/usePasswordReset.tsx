import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { apiAuthResetPassword } from '@/actions/auth';
import { useAuthModalStore } from '@/stores/authModal';
import { useNotificationStore } from '@/stores/notificationMsg';
import { ERROR_ICON } from '@/utils/consts';
import { IFormResetPasswordData } from '@/utils/validations';

export const usePasswordReset = () => {
  const { closeModal } = useAuthModalStore();
  const { showNotification } = useNotificationStore();

  const searchParams = useSearchParams();
  const [code, setCode] = useState<string | null>(searchParams.get('code'));

  useEffect(() => {
    const code = searchParams.get('code');
    if (code) {
      setCode(code);
    }
  }, [searchParams]);

  const resetPassword = async (data: Omit<IFormResetPasswordData, 'code'>, reset: () => void) => {
    if (code) {
      const dataResetPassword: IFormResetPasswordData = { ...data, code };
      const { isSuccess, message } = await apiAuthResetPassword(dataResetPassword);

      if (isSuccess) {
        closeModal();
        reset();
        showNotification(message);
      } else {
        showNotification(message, ERROR_ICON);
      }
    }
  };

  return { resetPassword, code };
};
