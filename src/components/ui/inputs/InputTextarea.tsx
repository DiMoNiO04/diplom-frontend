import clsx from 'clsx';
import { cloneElement, CSSProperties, isValidElement, ReactElement, ReactNode, TextareaHTMLAttributes } from 'react';

import { ErrorMsgInput } from './ErrorMsgInput';

interface IInputTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  icon?: ReactNode;
  label?: string;
  withBorder?: boolean;
}

const InputTextarea = ({
  label,
  withBorder = false,
  placeholder,
  error,
  icon,
  value = '',
  disabled,
  onChange,
  rows = 5,
}: IInputTextareaProps) => {
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
          withBorder ? 'border p-1 rounded-md' : 'border-b',
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
            'w-full p-3 box-border text-left transition-colors duration-300 ease-out focus:outline-none resize-none',
            {
              'text-black placeholder:text-greyLight cursor-not-allowed': isDisabled,
              'text-red placeholder:text-red': isError,
              'pl-10': icon,
            }
          )}
        />
        {icon && <div className="absolute left-2 top-3">{iconElement}</div>}
      </div>

      {!isDisabled && <ErrorMsgInput error={error} />}
    </div>
  );
};

export { InputTextarea };
export type { IInputTextareaProps };
