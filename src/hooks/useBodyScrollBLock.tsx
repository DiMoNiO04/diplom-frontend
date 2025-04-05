import { useEffect } from 'react';

export const useBodyScrollBLock = (isLocked: boolean) => {
  useEffect(() => {
    const body = document.body;
    const header = document.querySelector('header');

    if (isLocked) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      body.style.overflow = 'hidden';
      body.style.paddingRight = `${scrollbarWidth}px`;
      header!.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      body.style.overflow = '';
      body.style.paddingRight = '';
      header!.style.paddingRight = '';
    }

    return () => {
      body.style.overflow = '';
      body.style.paddingRight = '';
      header!.style.paddingRight = '';
    };
  }, [isLocked]);
};
