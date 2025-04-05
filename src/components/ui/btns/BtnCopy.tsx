'use client';

import { MouseEvent } from 'react';

import { IconCopy } from '@/components/icons';
import { useNotificationStore } from '@/stores/notificationMsg';

import { BtnText } from './BtnText';

export const BtnCopy = () => {
  const { showNotification } = useNotificationStore();

  const handleCopy = async (e: MouseEvent) => {
    e.preventDefault();

    try {
      const currentUrl = window.location.href;
      await navigator.clipboard.writeText(currentUrl);
      showNotification('Ссылка скопирована!', '/icons/linkSimple.svg');
    } catch (error) {
      console.error('Ошибка при копировании URL:', error);
    }
  };

  return <BtnText text="Скопировать ссылку" variant="orange" onClick={handleCopy} icon={<IconCopy />} />;
};
