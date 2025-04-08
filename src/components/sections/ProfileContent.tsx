'use client';

import clsx from 'clsx';

import { useNotificationStore } from '@/stores/notificationMsg';

import {
  ProfileActions,
  ProfileAsideMenu,
  ProfileChangePassword,
  ProfileConnectedAccounts,
  ProfileFoto,
  ProfileNewsletter,
} from '../blocks/profile';
import { FormProfile } from '../forms';
import { Title } from '../ui';
import { Button } from '../ui/btns';

export const ProfileContent = () => {
  const { showNotification } = useNotificationStore();

  const onBtnClick = () => showNotification('Данные успешно изменены!');

  return (
    <section className="my-20 max-lg:my-16">
      <div className="custom-container">
        <div
          className={clsx(
            'flex items-center justify-between pb-8 border-b border-gray-300 mb-16',
            'max-lg:pb-6 max-lg:mb-12 max-sm:flex-col max-sm:items-start max-sm:gap-4'
          )}
        >
          <Title title="Личный кабинет" />
          <Button
            text="Сохранить"
            type="submit"
            variant="orange"
            form="profile"
            onClick={onBtnClick}
            className="max-sm:w-full"
          />
        </div>
        <div className="grid grid-cols-[3fr_1.2fr] gap-16 relative max-md:grid-cols-1 max-md:gap-12 max-lg:gap-8">
          <div className="flex-shrink-0 max-md:order-1">
            <div className="mb-24 max-md:mb-16">
              <ProfileFoto />
              <FormProfile />
              <ProfileChangePassword />
            </div>
            <ProfileConnectedAccounts />
            <ProfileNewsletter />
            <ProfileActions />
          </div>
          <ProfileAsideMenu />
        </div>
      </div>
    </section>
  );
};
