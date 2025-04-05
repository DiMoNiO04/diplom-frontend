'use client';

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
    <section className="my-20">
      <div className="custom-container">
        <div className="flex items-center justify-between border-b border-gray-400 mb-16 pb-8">
          <Title title="Личный кабинет" />
          <Button text="Сохранить" type="submit" variant="orange" form="profile" onClick={onBtnClick} />
        </div>
        <div className="flex gap-x-20 relative">
          <div className="max-w-5xl w-full flex-shrink-0">
            <div className="mb-24">
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
