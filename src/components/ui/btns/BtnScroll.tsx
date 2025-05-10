'use client';

import { IconArrowCarretRounded } from '@/components/icons';

export const BtnScroll = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
      size-12 flex items-center justify-center fixed rounded-full bottom-8 right-8 z-40 bg-orange
      transition-colors duration-300 hover:bg-orangeHover
      max-md:bottom-4 max-md:right-4 max-md:size-10
    `}
    >
      <IconArrowCarretRounded className="rotate-180" color="#fff" size={24} />
    </button>
  );
};
