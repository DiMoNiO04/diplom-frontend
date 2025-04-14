'use client';

import clsx from 'clsx';
import { useState } from 'react';

import { useBodyScrollBLock, useHeader, useIsMobile } from '@/hooks';
import { BREAKPOINT_MOB } from '@/utils/consts';

import { HeaderMenu, HeaderSearch, HeaderUserProfile } from '../blocks/header';
import { Logo } from '../ui';
import { BtnBurger } from '../ui/btns';

export const Header = () => {
  const { isScrolled } = useHeader();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const isMobile = useIsMobile(BREAKPOINT_MOB);

  const toggleMenu = () => {
    if (isMobile) {
      setIsMenuOpen((prev) => !prev);
    }
  };

  useBodyScrollBLock(isMenuOpen);

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 w-full shadow-none h-24 bg-white z-50 transition-colors duration-300 max-lg:h-20',
        isScrolled && 'shadow-customSlide bg-whiteDark',
        isMenuOpen ? 'bg-whiteDark' : 'bg-white'
      )}
    >
      <div className="custom-container">
        <div className="flex items-center justify-between py-5 max-md:py-3.5">
          <Logo />
          <HeaderMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
          <div className="flex items-center justify-between gap-8 max-lg:gap-5">
            <HeaderSearch />
            <HeaderUserProfile />
            <BtnBurger isOpen={isMenuOpen} toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>
    </header>
  );
};
