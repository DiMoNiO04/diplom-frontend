import { RefObject, useRef, useState } from 'react';

import { useClickOutside } from '@/hooks/useClickOutside';
import { ISelectOption } from '@/utils/interfaces';

interface IUseSelectReturn {
  selectedOption: ISelectOption | null;
  isOpen: boolean;
  selectRef: RefObject<HTMLDivElement>;
  handleSelect: (option: ISelectOption) => void;
  toggleOpen: () => void;
  closeSelect: () => void;
}

export const useSelect = (defaultOption?: ISelectOption | null): IUseSelectReturn => {
  const [selectedOption, setSelectedOption] = useState<ISelectOption | null>(defaultOption ?? null);
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null!);

  useClickOutside(selectRef, () => setIsOpen(false));

  const handleSelect = (option: ISelectOption) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const closeSelect = () => setIsOpen(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return {
    selectedOption,
    isOpen,
    selectRef,
    handleSelect,
    toggleOpen,
    closeSelect,
  };
};
