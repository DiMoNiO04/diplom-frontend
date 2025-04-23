'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import { EAuthContent, useAuthModalStore } from '@/stores/authModal';
import { useNotificationStore } from '@/stores/notificationMsg';

export const useResetPasswordEffect = () => {
  const searchParams = useSearchParams();
  const confirmationResetPass = searchParams.get('reset-password');
  const codeValue = searchParams.get('code')?.valueOf;

  const { openModal, setTabContent } = useAuthModalStore();
  const { showNotification } = useNotificationStore();

  useEffect(() => {
    if (confirmationResetPass !== null && codeValue !== null) {
      openModal(EAuthContent.PASSWORD_NEW);
    }
  }, [confirmationResetPass, codeValue, showNotification, openModal, setTabContent]);
};
