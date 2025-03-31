import clsx from 'clsx';

import { ISelectOption } from '@/utils/interfaces';

interface ISelectList {
  options: ISelectOption[];
  selectedOption: ISelectOption | null;
  onSelect: (options: ISelectOption) => void;
}

export const SelectList = ({ options, selectedOption, onSelect }: ISelectList) => {
  return (
    <ul
      className={clsx(
        'shadow-customLight border-black scrollbar-hide max-h-60 min-w-full overflow-auto rounded-lg border bg-white',
        'absolute left-0 top-12 z-50 '
      )}
    >
      {options.map((option) => (
        <li
          key={option.value}
          onClick={() => onSelect(option)}
          className={clsx('shrink-0 cursor-pointer px-6 py-2 transition-all duration-300 ease-out', {
            'bg-orange text-white': selectedOption?.value === option.value,
            'hover:bg-orange hover:text-white hover:opacity-70 ': selectedOption?.value !== option.value,
          })}
        >
          {option.text}
        </li>
      ))}
    </ul>
  );
};
