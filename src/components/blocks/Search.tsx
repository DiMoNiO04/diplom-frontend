'use client';

import { useState } from 'react';

import { useBodyScrollBLock } from '@/hooks';

import { SearchIcon } from '../icons';

export const Search = () => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const handleSearchToggle = () => setIsSearchOpen((prev) => !prev);

  useBodyScrollBLock(isSearchOpen);

  return (
    <>
      <button type="button" onClick={handleSearchToggle} className="group">
        <SearchIcon size={24} className="group-hover:stroke-orange" />
      </button>
    </>
  );
};
