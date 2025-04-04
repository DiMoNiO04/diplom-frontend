'use client';

import { MouseEvent, useState } from 'react';

import { IconCopy } from '@/components/icons';

import { NotificationMsg } from '../NotificationMsg';

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
      <button onClick={handleCopy} className="group flex items-center gap-x-2 hover:text-black">
        <IconCopy />
        <span className="font-unbounded text-orange transition duration-300 group-hover:text-black">
          Скопировать ссылку
        </span>
      </button>
      <NotificationMsg text="Ссылка скопирована" icon="/icons/linkSimple.svg" isShow={isCopied} />
    </>
  );
};
