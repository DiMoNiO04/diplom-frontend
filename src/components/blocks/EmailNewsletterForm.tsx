'use client';

import { FormEvent, useState } from 'react';

import { Button } from '../ui';

export const EmailNewsletterForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log('Подписка на рассылку с email:', email);
  };

  return (
    <form className="rounded-md bg-white p-1 flex gap-4 items-center" onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoComplete="off"
        placeholder="Email Address"
        name="email"
        className="font-unbounded size-full border-none pl-4 w-80 placeholder:font-onest"
      />
      <Button text="Подписаться" variant="orange" type="submit" />
    </form>
  );
};
