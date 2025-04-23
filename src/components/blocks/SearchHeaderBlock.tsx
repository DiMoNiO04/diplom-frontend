'use client';

import clsx from 'clsx';
import { ChangeEvent } from 'react';

import { Title } from '../ui';
import { SearchInputBlock } from '.';

interface ISearchHeaderBlockProps {
  title: string;
  placeholder: string;
  value: string;
  isVisibleSearch?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
}

export const SearchHeaderBlock = ({
  title,
  placeholder,
  value,
  isVisibleSearch = true,
  onChange,
  onClear,
}: ISearchHeaderBlockProps) => {
  return (
    <div
      className={clsx(
        'flex justify-between items-end mb-16 border-b border-gray-300',
        'max-md:flex-col max-md:mb-12 max-md:justify-start max-md:items-start'
      )}
    >
      <Title title={title} className="pb-8" />
      {isVisibleSearch && (
        <SearchInputBlock placeholder={placeholder} value={value} onChange={onChange} onClear={onClear} />
      )}
    </div>
  );
};
