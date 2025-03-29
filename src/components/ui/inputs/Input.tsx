import clsx from 'clsx';
import { cloneElement, InputHTMLAttributes, isValidElement, ReactElement, ReactNode } from 'react';

import { ErrorMsgInput } from './ErrorMsgInput';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  icon?: ReactNode;
}

const Input = ({ placeholder, error, type, icon, value = '', onChange }: IInputProps) => {
  const iconElement = isValidElement(icon) ? cloneElement(icon as ReactElement, { color: error && '#F85A81' }) : null;

  return (
    <div className="relative flex flex-col gap-y-0.5">
      <div
        className={clsx(
          'relative border-b border-gray-300 transition-colors duration-300',
          error ? 'border-red' : 'focus-within:border-black'
        )}
      >
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoComplete="off"
          className={clsx(
            'text-black placeholder:text-lightGrey w-full p-3 pl-10 box-border text-left',
            'transition-colors duration-300 ease-out focus:outline-none',
            { 'text-red placeholder:text-red': error }
          )}
        />
        {icon && <div className="absolute left-2 top-1/2 -translate-y-1/2">{iconElement}</div>}
      </div>
      <ErrorMsgInput error={error} />
    </div>
  );
};

export { Input };
export type { IInputProps };
