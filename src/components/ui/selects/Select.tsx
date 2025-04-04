'use client';

import clsx from 'clsx';

import { ArrowCarretRoundedIcon } from '@/components/icons';
import { useSelect } from '@/hooks';
import { ISelectOption } from '@/utils/interfaces';

import { ErrorMsgInput } from '../inputs/ErrorMsgInput';
import { SelectList } from './SelectList';

interface ISelect {
  value?: ISelectOption | null;
  onChange: (value: ISelectOption) => void;
  options: ISelectOption[];
  placeholder?: string;
  error?: string;
  className?: string;
  label?: string;
  isForm?: boolean;
}

export const Select = ({ options, label, isForm, value, onChange, placeholder, error, className }: ISelect) => {
  const { selectedOption, isOpen, selectRef, handleSelect, toggleOpen } = useSelect(value);

  const handleSelectChange = (option: ISelectOption) => {
    handleSelect(option);
    onChange(option);
  };

  const hasOptions = options && options.length > 0;

  return (
    <div className={clsx('relative flex flex-col gap-y-1', className)} ref={selectRef}>
      {label && <label className="font-medium">{label}</label>}

      <div
        tabIndex={0}
        className={clsx(
          'flex w-full items-center justify-between gap-x-4 rounded-md border bg-white',
          'transition-colors duration-300 ease-out',
          hasOptions ? 'cursor-pointer' : 'cursor-default opacity-70',
          isForm ? 'p-3' : 'border-black px-5 py-1.5',
          error && 'border-red',
          'focus:border-black'
        )}
        onClick={hasOptions ? toggleOpen : undefined}
      >
        <div
          className={clsx(
            'text-def transition-colors duration-300',
            !selectedOption?.text && !value?.text && 'text-greyLight',
            error && 'text-red'
          )}
        >
          {selectedOption?.text || value?.text || placeholder}
        </div>

        {hasOptions && (
          <div className={clsx('transition-transform duration-300', isOpen && 'rotate-180')}>
            <ArrowCarretRoundedIcon />
          </div>
        )}
      </div>

      {hasOptions && isOpen && (
        <SelectList isForm={isForm} options={options} selectedOption={selectedOption} onSelect={handleSelectChange} />
      )}

      <ErrorMsgInput error={error} />
    </div>
  );
};
