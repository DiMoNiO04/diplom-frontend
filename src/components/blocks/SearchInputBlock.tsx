import { ChangeEvent } from 'react';

import { IconClose } from '@/components/icons';

interface ISearchInputBlockProps {
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
}

export const SearchInputBlock = ({ placeholder, value, onChange, onClear }: ISearchInputBlockProps) => {
  return (
    <div className="relative w-64 flex items-center justify-between gap-x-4 pb-4">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="text-black placeholder:text-lightGrey box-border text-left w-full"
      />
      {value && (
        <button type="button" className="hover:text-black group" onClick={onClear}>
          <IconClose size={16} className="group-hover:stroke-greyLight transition-colors" />
        </button>
      )}
    </div>
  );
};
