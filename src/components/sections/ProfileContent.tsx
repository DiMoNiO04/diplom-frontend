import { ProfileActions, ProfileConnectedAccounts, ProfileNewsletter } from '../blocks/profile';
import { Button, Title } from '../ui';

export const ProfileContent = () => {
  return (
    <section className="my-20">
      <div className="custom-container">
        <div className="flex items-center justify-between border-b border-gray-400 mb-16 pb-8">
          <Title title="Личный кабинет" />
          <Button text="Сохранить" variant="orange" />
        </div>
        <div className="max-w-4xl">
          <ProfileConnectedAccounts />
          <ProfileNewsletter />
          <ProfileActions />
        </div>
      </div>
    </section>
  );
};
