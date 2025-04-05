'use client';

import { MouseEvent } from 'react';

import { IconCopy } from '@/components/icons';
import { useNotificationStore } from '@/stores/notificationMsg';
import { NOTIFICATION_TIME } from '@/utils/consts';

import { BtnText } from './BtnText';

export const BtnCopy = () => {
  const { showNotification, hideNotification } = useNotificationStore();

  const handleCopy = async (e: MouseEvent) => {
    e.preventDefault();

    try {
      const currentUrl = window.location.href;
      await navigator.clipboard.writeText(currentUrl);

      showNotification('Ссылка скопирована', '/icons/linkSimple.svg');

      setTimeout(() => {
        hideNotification();
      }, NOTIFICATION_TIME);
    } catch (error) {
      console.error('Ошибка при копировании URL:', error);
    }
  };

  return <BtnText text="Скопировать ссылку" variant="orange" onClick={handleCopy} icon={<IconCopy />} />;
};
