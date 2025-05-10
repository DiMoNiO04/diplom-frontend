'use client';

import { IUserInfo } from '@/stores/user';

import { ProfileActions, ProfileAsideMenu, ProfileChangePassword, ProfileNewsletter } from '../blocks/profile';
import { FormProfile } from '../forms';
import { Title } from '../ui';
import { Button } from '../ui/btns';

export const ProfileContent = (dataUser: IUserInfo) => {
  return (
    <section className="my-12 mb-20 max-lg:mb-16 max-lg:my-12">
      <div className="custom-container">
        <Title title="Личный кабинет" isBorder />
        <div className="grid grid-cols-[3fr_1.2fr] gap-16 relative max-md:grid-cols-1 max-md:gap-12 max-lg:gap-8">
          <div className="flex-shrink-0 max-md:order-1">
            <div className="mb-24 max-md:mb-16">
              <FormProfile {...dataUser} />
              <ProfileChangePassword />
              <Button text="Сохранить" type="submit" variant="orange" form="profile" className="max-sm:w-full mt-5" />
            </div>
            <ProfileNewsletter />
            <ProfileActions />
          </div>
          <ProfileAsideMenu />
        </div>
      </div>
    </section>
  );
};
