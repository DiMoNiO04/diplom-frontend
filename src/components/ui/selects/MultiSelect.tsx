'use client';

import clsx from 'clsx';

import { IconArrowCarretRounded, IconClose } from '@/components/icons';
import { useMultiSelect } from '@/hooks/useMultiSelect';
import { ISelectBase, ISelectOption } from '@/utils/interfaces';

import { ErrorMsgInput } from '../inputs/ErrorMsgInput';
import { SelectList } from './SelectList';

interface IMultiSelect extends ISelectBase {
  value: ISelectOption[];
  onChange: (value: ISelectOption[]) => void;
}

export const MultiSelect = ({
  options,
  value,
  placeholder,
  error,
  className,
  label,
  isForm,
  onChange,
}: IMultiSelect) => {
  const { selectedOptions, isOpen, selectRef, handleSelect, toggleOpen } = useMultiSelect(value);

  const handleSelectChange = (option: ISelectOption) => {
    const updated = selectedOptions.some((o) => o.value === option.value)
      ? selectedOptions.filter((o) => o.value !== option.value)
      : [...selectedOptions, option];

    handleSelect(updated);
    onChange(updated);
  };

  const removeOption = (optionToRemove: ISelectOption) => {
    const updated = selectedOptions.filter((o) => o.value !== optionToRemove.value);
    handleSelect(updated);
    onChange(updated);
  };

  const hasOptions = options.length > 0;

  return (
    <div className={clsx('relative flex flex-col gap-y-1 flex-shrink-0', className)} ref={selectRef}>
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
            'truncate whitespace-nowrap overflow-hidden',
            'flex-1',
            selectedOptions.length === 0 && 'text-greyLight',
            error && 'text-red'
          )}
        >
          {selectedOptions.length > 0 ? selectedOptions.map((o) => o.text).join(', ') : placeholder}
        </div>

        {hasOptions && (
          <div className={clsx('ml-2 transition-transform duration-300', isOpen && 'rotate-180')}>
            <IconArrowCarretRounded />
          </div>
        )}
      </div>

      {hasOptions && isOpen && (
        <SelectList
          isForm={isForm}
          options={options}
          selectedOption={selectedOptions}
          isMulti
          onSelect={handleSelectChange}
        />
      )}

      {selectedOptions.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {selectedOptions.map((option) => (
            <div
              key={option.value}
              className={`
                flex items-center gap-2 rounded-full bg-orange/10 px-3 py-1 text-sm text-orange border border-orange  
              `}
            >
              {option.text}
              <button
                onClick={() => removeOption(option)}
                className="text-orange hover:text-red transition"
                type="button"
              >
                <IconClose size={16} color="#ff642f" />
              </button>
            </div>
          ))}
        </div>
      )}

      <ErrorMsgInput error={error} />
    </div>
  );
};
