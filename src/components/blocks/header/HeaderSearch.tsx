'use client';

import { useState } from 'react';

import { IconSearch } from '@/components/icons';
import { useBodyScrollBLock } from '@/hooks';

import { HeaderSearchPanel } from './HeaderSearchPanel';

export const HeaderSearch = () => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const handleSearchToggle = () => setIsSearchOpen((prev) => !prev);

  useBodyScrollBLock(isSearchOpen);

  return (
    <>
      <button type="button" onClick={handleSearchToggle} className="group">
        <IconSearch size={24} className="group-hover:stroke-orange" />
      </button>
      <HeaderSearchPanel onClose={handleSearchToggle} isOpen={isSearchOpen} />
    </>
  );
};
