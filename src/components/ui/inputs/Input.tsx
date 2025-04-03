import clsx from 'clsx';
import { cloneElement, CSSProperties, InputHTMLAttributes, isValidElement, ReactElement, ReactNode } from 'react';

import { ErrorMsgInput } from './ErrorMsgInput';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  icon?: ReactNode;
}

const Input = ({ placeholder, error, type, icon, value = '', disabled, onChange }: IInputProps) => {
  const isDisabled: boolean = Boolean(disabled);
  const isError: boolean = Boolean(error) && !isDisabled;

  const iconElement = isValidElement(icon)
    ? cloneElement(icon as ReactElement<{ style?: CSSProperties }>, {
        style: { color: isDisabled ? '#000000' : isError ? '#F85A81' : undefined },
      })
    : null;

  return (
    <div className="relative flex flex-col gap-y-0.5">
      <div
        className={clsx(
          'relative border-b transition-colors duration-300',
          isDisabled ? 'border-black' : isError ? 'border-red' : 'focus-within:border-black'
        )}
      >
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          autoComplete="off"
          className={clsx(
            'w-full p-3 pl-10 box-border text-left transition-colors duration-300 ease-out focus:outline-none',
            {
              'text-black placeholder:text-gray-400 border-black cursor-not-allowed': isDisabled,
              'text-red placeholder:text-red': isError,
            }
          )}
        />
        {icon && <div className="absolute left-2 top-1/2 -translate-y-1/2">{iconElement}</div>}
      </div>
      {!isDisabled && <ErrorMsgInput error={error} />}
    </div>
  );
};

export { Input };
export type { IInputProps };
