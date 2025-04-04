import clsx from 'clsx';
import { cloneElement, CSSProperties, InputHTMLAttributes, isValidElement, ReactElement, ReactNode } from 'react';

import { ErrorMsgInput } from './ErrorMsgInput';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  icon?: ReactNode;
  label?: string;
  withBorder?: boolean;
}

const Input = ({
  label,
  withBorder = false,
  placeholder,
  error,
  type,
  icon,
  value = '',
  disabled,
  onChange,
}: IInputProps) => {
  const isDisabled: boolean = Boolean(disabled);
  const isError: boolean = Boolean(error) && !isDisabled;

  const iconElement = isValidElement(icon)
    ? cloneElement(icon as ReactElement<{ style?: CSSProperties }>, {
        style: { color: isDisabled ? '#000000' : isError ? '#F85A81' : undefined },
      })
    : null;

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
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          autoComplete="off"
          className={clsx(
            'w-full p-3 box-border text-left transition-colors duration-300 ease-out focus:outline-none',
            {
              'text-black placeholder:text-greyLight cursor-not-allowed': isDisabled,
              'text-red placeholder:text-red': isError,
              'pl-10': icon,
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
