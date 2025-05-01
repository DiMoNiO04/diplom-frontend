import clsx from 'clsx';

import { ISelectOption } from '@/utils/interfaces';

interface ISelectList {
  options: ISelectOption[];
  selectedOption: ISelectOption | ISelectOption[] | null;
  isForm?: boolean;
  isMulti?: boolean;
  onSelect: (option: ISelectOption) => void;
}

export const SelectList = ({ options, selectedOption, isForm, isMulti, onSelect }: ISelectList) => {
  const isSelected = (option: ISelectOption): boolean => {
    if (isMulti && Array.isArray(selectedOption)) {
      return selectedOption.some((o) => o.value === option.value);
    }
    return (selectedOption as ISelectOption | null)?.value === option.value;
  };

  return (
    <ul
      className={clsx(
        'shadow-customLight border-black scrollbar-hide max-h-60 min-w-full overflow-auto rounded-lg border bg-white',
        'absolute left-0 top-12 z-50',
        isForm && 'top-20'
      )}
    >
      {options.map((option) => (
        <li
          key={option.value}
          onClick={() => onSelect(option)}
          className={clsx(
            'shrink-0 cursor-pointer px-6 py-2 transition-all duration-300 ease-out',
            isSelected(option) ? 'bg-orange text-white' : 'hover:bg-orange hover:opacity-70'
          )}
        >
          {option.text}
        </li>
      ))}
    </ul>
  );
};
