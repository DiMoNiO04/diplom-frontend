'use client';

import { MouseEvent, useState } from 'react';

import { IconCopy } from '@/components/icons';

import { NotificationMsg } from '../NotificationMsg';
import { BtnText } from './BtnText';

export const BtnCopy = () => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleCopy = async (e: MouseEvent) => {
    e.preventDefault();

    try {
      const currentUrl = window.location.href;
      await navigator.clipboard.writeText(currentUrl);
      setIsCopied(true);

      setTimeout(() => setIsCopied(false), 1200);
    } catch (error) {
      console.error('Ошибка при копировании URL:', error);
    }
  };

  return (
    <>
      <BtnText text="Скопировать ссылку" variant="orange" onClick={handleCopy} icon={<IconCopy />} />
      <NotificationMsg text="Ссылка скопирована" icon="/icons/linkSimple.svg" isShow={isCopied} />
    </>
  );
};
