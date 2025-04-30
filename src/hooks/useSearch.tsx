/* eslint-disable @typescript-eslint/no-explicit-any */

import { ChangeEvent, useState } from 'react';

import { DELAY_DEBOUNCE } from '@/utils/consts';

import { useDebounce } from './useDebounce';

interface UseSearchProps<T> {
  data: T[];
  delay?: number;
  filterKey: keyof T;
}

export const useSearch = <T extends { [key: string]: any }>({
  data,
  delay = DELAY_DEBOUNCE,
  filterKey,
}: UseSearchProps<T>) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { debouncedValue } = useDebounce({ value: searchQuery, delay });

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => setSearchQuery(event.target.value);
  const handleClearSearch = () => setSearchQuery('');

  const filteredData = data.filter((item) => item[filterKey].toLowerCase().includes(debouncedValue.toLowerCase()));

  return {
    searchQuery,
    filteredData,
    handleSearchChange,
    handleClearSearch,
  };
};
