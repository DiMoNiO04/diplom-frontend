'use client';

import clsx from 'clsx';
import { useState } from 'react';

import { IconHidePassword, IconPasswordKey, IconShowPassword } from '@/components/icons';

import { ErrorMsgInput } from './ErrorMsgInput';
import { IInputProps } from './Input';

export const InputPassword = ({ placeholder, error, value = '', onChange }: IInputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <div className="relative flex flex-col gap-y-0.5">
      <div
        className={clsx(
          'relative border-b border-gray-300 transition-colors duration-300',
          error ? 'border-red' : 'focus-within:border-black'
        )}
      >
        <div className="absolute left-2 top-1/2 -translate-y-1/2">
          <IconPasswordKey color={error && '#f85a81'} />
        </div>
        <input
          type={showPassword ? 'text' : 'password'}
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
        <div onClick={toggleShowPassword} className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer">
          {showPassword ? <IconShowPassword /> : <IconHidePassword />}
        </div>
      </div>
      <ErrorMsgInput error={error} />
    </div>
  );
};
