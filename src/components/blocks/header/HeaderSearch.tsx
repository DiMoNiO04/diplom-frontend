'use client';

import { useState } from 'react';

import { IconSearch } from '@/components/icons';
import { useBodyScrollBLock } from '@/hooks';
import { IRecipesProps } from '@/utils/interfaces';

import { HeaderSearchPanel } from './HeaderSearchPanel';

export const HeaderSearch = ({ recipes }: IRecipesProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const handleSearchToggle = () => setIsSearchOpen((prev) => !prev);

  useBodyScrollBLock(isSearchOpen);

  return (
    <>
      <button type="button" onClick={handleSearchToggle} className="group max-lg:size-6">
        <IconSearch size={24} className="group-hover:stroke-orange" />
      </button>
      <HeaderSearchPanel recipes={recipes} onClose={handleSearchToggle} isOpen={isSearchOpen} />
    </>
  );
};
