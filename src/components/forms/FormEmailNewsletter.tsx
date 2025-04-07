'use client';

import clsx from 'clsx';
import { FormEvent, useState } from 'react';

import { useNotificationStore } from '@/stores/notificationMsg';

import { Button } from '../ui/btns';

export const FormEmailNewsletter = () => {
  const [email, setEmail] = useState<string>('');
  const { showNotification } = useNotificationStore();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log('Подписка на рассылку с email:', email);

    showNotification('Проверьте почту!', '/icons/checkEmail.svg');

    setEmail('');
  };

  return (
    <form
      className={clsx(
        'rounded-md bg-white p-1 flex gap-4 items-center',
        'max-sm:flex max-sm:flex-col max-sm:bg-transparent max-sm:gap-4 max-sm:p-0 max-sm:w-full'
      )}
      onSubmit={handleSubmit}
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoComplete="off"
        placeholder="Email"
        name="email"
        className={clsx(
          'font-unbounded size-full border-none pl-4 w-80 placeholder:font-onest',
          'max-sm:w-full max-sm:bg-white max-sm:p-4 max-sm:box-border max-sm:rounded-md'
        )}
      />
      <Button text="Подписаться" variant="orange" type="submit" className="max-sm:w-full" />
    </form>
  );
};
