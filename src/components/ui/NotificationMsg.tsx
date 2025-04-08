'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { useNotificationStore } from '@/stores/notificationMsg';

export const NotificationMsg = () => {
  const { isShow, text, icon } = useNotificationStore();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(isShow ? true : false);
  }, [isShow]);

  if (!icon || !text) return null;

  return (
    <div
      className={clsx(
        'fixed inset-x-0 bottom-16 z-50 flex select-none justify-center max-lg:bottom-10',
        'transition-opacity duration-300 ease-in-out',
        isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      )}
    >
      <div
        className="
        border-divider flex items-center gap-x-2 rounded-2xl border bg-white px-5 py-3 shadow-customLight
      "
      >
        {icon && <Image src={icon} alt="" width={20} height={20} />}
        <span className="font-unbounded max-sm:text-sm">{text}</span>
      </div>
    </div>
  );
};
