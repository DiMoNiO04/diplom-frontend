'use client';

import clsx from 'clsx';

import { useHeader } from '@/hooks';

import { HeaderMenu, HeaderSearch, HeaderUserProfile } from '../blocks/header';
import { Logo } from '../ui';

export const Header = () => {
  const { isScrolled } = useHeader();

  return (
    <header
      className={clsx(
        'fixed top-0 lef-0 w-full shadow-none h-24 bg-white z-50 transition-colors duration-300',
        'transition-all duration-300',
        isScrolled && 'shadow-customSlide bg-whiteDark'
      )}
    >
      <div className="custom-container">
        <div className="flex items-center justify-between py-5">
          <Logo />
          <HeaderMenu />
          <div className="flex items-center justify-between gap-8">
            <HeaderSearch />
            <HeaderUserProfile />
          </div>
        </div>
      </div>
    </header>
  );
};
