import { useRef, useState } from 'react';

import { useClickOutside } from '@/hooks/useClickOutside';
import { ISelectOption } from '@/utils/interfaces';

export const useMultiSelect = (defaultOptions: ISelectOption[]) => {
  const [selectedOptions, setSelectedOptions] = useState<ISelectOption[]>(defaultOptions ?? []);
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null!);

  useClickOutside({ refs: [selectRef], callback: () => setIsOpen(false) });

  const handleSelect = (newOptions: ISelectOption[]) => {
    setSelectedOptions(newOptions);
  };

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return {
    selectedOptions,
    isOpen,
    selectRef,
    handleSelect,
    toggleOpen,
  };
};
