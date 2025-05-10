'use client';

import { Title } from '@/components/ui';
import { useUserStore } from '@/stores/user';

import { PrivacyPolicyNote } from '../PrivacyPolicyNote';
import { SubscribeNewsletter } from '../SubscribeNewsletter';

export const ProfileNewsletter = () => {
  const isSubscribeUser = useUserStore.getState().user!.isSubscribe;

  return (
    <div className="mb-16 pb-4 border-b border-greyLight max-md:mb-12">
      <Title type="h3" title="Подписка на рассылку новых рецептов" />
      {isSubscribeUser ? (
        <div className="flex items-center justify-between gap-x-4">
          <div>В настоящее время вы подписаны на рассылку новых рецептов!</div>
          <SubscribeNewsletter />
        </div>
      ) : (
        <div className="flex flex-col items-start gap-y-4">
          <div>В настоящее время вы не подписаны на рассылку новых рецептов!</div>
          <SubscribeNewsletter className="border border-black w-fit" />
          <PrivacyPolicyNote />
        </div>
      )}
    </div>
  );
};
