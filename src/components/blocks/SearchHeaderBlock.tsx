'use client';

import clsx from 'clsx';
import { ChangeEvent } from 'react';

import { SearchInputBlock } from '../blocks';
import { Title } from '../ui';

interface ISearchHeaderBlockProps {
  title: string;
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
}

export const SearchHeaderBlock = ({ title, placeholder, value, onChange, onClear }: ISearchHeaderBlockProps) => {
  return (
    <div
      className={clsx(
        'flex justify-between items-end mb-16 border-b border-gray-300',
        'max-md:flex-col max-md:mb-12 max-md:justify-start max-md:items-start'
      )}
    >
      <Title title={title} className="pb-8" />
      <SearchInputBlock placeholder={placeholder} value={value} onChange={onChange} onClear={onClear} />
    </div>
  );
};
