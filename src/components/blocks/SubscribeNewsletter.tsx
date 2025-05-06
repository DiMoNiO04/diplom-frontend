'use client';

import clsx from 'clsx';

import { useSubscribeUser } from '@/hooks/actions';
import { useAuthModalStore } from '@/stores/authModal';
import { useConfirmModalStore } from '@/stores/confirmModal';
import { useUserStore } from '@/stores/user';
import { IClassNameProps } from '@/utils/interfaces';

import { Button } from '../ui/btns';

export const SubscribeNewsletter = ({ className }: IClassNameProps) => {
  const { openModal: openModalAuth } = useAuthModalStore();
  const { openModal: openModalConfirm } = useConfirmModalStore();
  const { subscribeUser, unSubscribeUser } = useSubscribeUser();

  const isAuth = useUserStore.getState().isAuth;
  const email = useUserStore.getState().user?.email;
  const isSubscribe = useUserStore.getState().user?.isSubscribe;

  const handleAction = () => {
    const actionYes = isSubscribe ? unSubscribeUser : subscribeUser;
    const confirmText = isSubscribe
      ? `Отписаться от еженедельной рассылки на почту "${email}"?`
      : `Подписаться на еженедельную рассылку на почту "${email}"?`;

    openModalConfirm(confirmText, actionYes, undefined, !isSubscribe);
  };

  const handleClick = () => (isAuth ? handleAction() : openModalAuth());

  return (
    <div
      className={clsx(
        'rounded-md bg-white p-1 flex gap-4 items-center',
        'max-sm:flex max-sm:flex-col max-sm:bg-transparent max-sm:gap-4 max-sm:p-0 max-sm:w-full',
        className
      )}
    >
      <Button
        text={isSubscribe ? 'Отписаться' : 'Подписаться на еженедельную рассылку'}
        variant={isSubscribe ? 'default' : 'orange'}
        size="sm"
        className="max-sm:w-full"
        onClick={handleClick}
      />
    </div>
  );
};
