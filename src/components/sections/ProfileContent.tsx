'use client';

import { ProfileActions, ProfileChangePassword, ProfileConnectedAccounts, ProfileNewsletter } from '../blocks/profile';
import { FormProfile } from '../forms';
import { Button, Title } from '../ui';

export const ProfileContent = () => {
  return (
    <section className="my-20">
      <div className="custom-container">
        <div className="flex items-center justify-between border-b border-gray-400 mb-16 pb-8">
          <Title title="Личный кабинет" />
          <Button text="Сохранить" type="submit" variant="orange" form="profile" />
        </div>
        <div className="max-w-4xl">
          <div className="mb-24">
            <FormProfile />
            <ProfileChangePassword />
          </div>
          <ProfileConnectedAccounts />
          <ProfileNewsletter />
          <ProfileActions />
        </div>
      </div>
    </section>
  );
};
