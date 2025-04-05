'use client';

import { FormEvent, useState } from 'react';

import { useNotificationStore } from '@/stores/notificationMsg';
import { NOTIFICATION_TIME } from '@/utils/consts';

import { Button } from '../ui/btns';

export const FormEmailNewsletter = () => {
  const [email, setEmail] = useState<string>('');
  const { showNotification, hideNotification } = useNotificationStore();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log('Подписка на рассылку с email:', email);

    showNotification('Проверьте почту!', '/icons/checkEmail.svg');

    setTimeout(() => {
      hideNotification();
    }, NOTIFICATION_TIME);

    setEmail('');
  };

  return (
    <form className="rounded-md bg-white p-1 flex gap-4 items-center" onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoComplete="off"
        placeholder="Email"
        name="email"
        className="font-unbounded size-full border-none pl-4 w-80 placeholder:font-onest"
      />
      <Button text="Подписаться" variant="orange" type="submit" />
    </form>
  );
};
