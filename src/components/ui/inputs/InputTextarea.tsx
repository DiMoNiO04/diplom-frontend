import clsx from 'clsx';
import { TextareaHTMLAttributes } from 'react';

import { ErrorMsgInput } from './ErrorMsgInput';

interface IInputTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  label?: string;
  withBorder?: boolean;
}

const InputTextarea = ({
  error,
  label,
  withBorder = false,
  placeholder,
  value = '',
  disabled,
  onChange,
  rows = 5,
}: IInputTextareaProps) => {
  const isDisabled: boolean = Boolean(disabled);
  const isError: boolean = Boolean(error) && !isDisabled;

  return (
    <div className="flex flex-col gap-y-1 relative">
      {label && <label className="font-medium">{label}</label>}

      <div
        className={clsx(
          'relative transition-colors duration-300',
          withBorder ? 'border rounded-md' : 'border-b',
          isDisabled ? 'border-black' : isError ? 'border-red' : 'focus-within:border-black'
        )}
      >
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          rows={rows}
          className={clsx(
            'w-full h-full p-3 text-left  resize-none rounded-md',
            'transition-colors duration-300 ease-out focus:outline-none',
            {
              'text-black placeholder:text-greyLight cursor-not-allowed': isDisabled,
              'text-red placeholder:text-red': isError,
            }
          )}
        />
      </div>

      {!isDisabled && <ErrorMsgInput error={error} />}
    </div>
  );
};

export { InputTextarea };
export type { IInputTextareaProps };
