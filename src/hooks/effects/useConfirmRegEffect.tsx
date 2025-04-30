'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import { EAuthContent, useAuthModalStore } from '@/stores/authModal';
import { useNotificationStore } from '@/stores/notificationMsg';

export const useConfirmRegEffect = () => {
  const searchParams = useSearchParams();
  const confirmation = searchParams.get('confirm-reg');
  const auth = searchParams.get('auth');

  const { openModal, setTabContent } = useAuthModalStore();
  const { showNotification } = useNotificationStore();

  useEffect(() => {
    if (confirmation !== null && auth !== null) {
      showNotification('Регистрация успешно подтверждена!', '/icons/success.svg');
      openModal(EAuthContent.SUCCESS_REG);
      setTabContent(EAuthContent.LOGIN);
    }
  }, [confirmation, auth, showNotification, openModal, setTabContent]);
};
