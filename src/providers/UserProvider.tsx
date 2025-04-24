'use client';

import { ReactNode, useEffect, useState } from 'react';

import { apiGetUserInfo } from '@/actions/user';
import { useUserStore } from '@/stores/user';

interface IUserProviderProps {
  children: ReactNode;
  token?: string;
}

export const UserProvider = ({ children, token }: IUserProviderProps) => {
  const { setUser } = useUserStore();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (token) {
      const fetchUserInfo = async () => {
        try {
          const user = await apiGetUserInfo();
          if (user) {
            setUser(user, true);
          }
        } catch (error) {
          console.error(error);
        }
      };

      fetchUserInfo();
    } else {
      setUser(null, false);
    }

    setReady(true);
  }, [token, setUser]);

  if (!ready) return null;

  return <>{children}</>;
};
