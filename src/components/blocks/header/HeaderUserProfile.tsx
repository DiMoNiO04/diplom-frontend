'use client';

import { Button } from '@/components/ui/btns';
import { useAuthModalStore } from '@/stores/authModal';
import { useUserStore } from '@/stores/user';

import { HeaderUserMenu } from './HeaderUserMenu';

export const HeaderUserProfile = () => {
  const { openModal } = useAuthModalStore();

  const { isAuth } = useUserStore();

  const onOpen = () => openModal('login');

  return (
    <div className="relative">{isAuth ? <HeaderUserMenu /> : <Button text="Войти" size="lg" onClick={onOpen} />}</div>
  );
};
