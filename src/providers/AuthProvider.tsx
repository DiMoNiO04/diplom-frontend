'use client';

import { ReactNode, useEffect, useState } from 'react';

import { useUserStore } from '@/stores/user';

interface IAuthProviderProps {
  children: ReactNode;
  token?: string;
}

export const AuthProvider = ({ children, token }: IAuthProviderProps) => {
  const { setAuth } = useUserStore();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (token) {
      setAuth(true);
    }

    setReady(true);
  }, [token, setAuth]);

  if (!ready) return null;

  return <>{children}</>;
};
