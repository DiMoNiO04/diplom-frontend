'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface INotificationMsgProps {
  text: string;
  icon: string;
  isShow: boolean;
}

export const NotificationMsg = ({ text, icon, isShow }: INotificationMsgProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    if (isShow) {
      setIsVisible(true);
    } else {
      setTimeout(() => setIsVisible(false), 500);
    }
  }, [isShow]);

  return (
    <div
      className={clsx(
        'fixed inset-x-0 bottom-16 z-50 flex select-none justify-center transition-opacity duration-300 ease-in-out max-lg:bottom-10',
        isVisible ? 'opacity-100' : 'opacity-0',
        isVisible ? 'pointer-events-auto' : 'pointer-events-none'
      )}
    >
      <div
        className={'border-divider flex items-center gap-x-2 rounded-2xl border bg-white px-5 py-3 shadow-customLight'}
      >
        <Image src={icon} alt="" width={20} height={20} />
        <span className="font-unbounded">{text}</span>
      </div>
    </div>
  );
};
