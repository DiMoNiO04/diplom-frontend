import clsx from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';

import { ErrorMsgInput } from './ErrorMsgInput';

interface ICheckboxInput extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: ReactNode;
  error: string | undefined;
}

export const InputCheckbox = ({ id, label, error, checked, onChange }: ICheckboxInput) => {
  return (
    <div className={'relative flex flex-col gap-y-0.5'}>
      <div className={clsx('custom-checkbox flex gap-x-3', { 'custom-checkbox--error': error })}>
        <input type="checkbox" id={id} checked={checked} onChange={onChange} />
        <label htmlFor={id} className="text-sm text-lightGrey select-none">
          {label}
        </label>
      </div>
      <ErrorMsgInput error={error} />
    </div>
  );
};
