import { BtnText } from '@/components/ui';

export const ProfileConnectedAccounts = () => {
  return (
    <div className="mb-24">
      <h3 className="font-unbounded mb-4 text-lg font-medium">Подключенные аккаунты</h3>
      <div className="flex items-center justify-between mb-6 pb-3 border-b border-gray-300">
        <div className="flex flex-col gap-y-2">
          <img src="/icons/facebookLogoFull.svg" alt="" />
          <div className="text-greyLight text-sm">Suzan Miller</div>
        </div>
        <BtnText text="Отключить" variant="black" />
      </div>
      <div className="flex items-center justify-between mb-6 pb-3 border-b border-gray-300">
        <div className="flex flex-col gap-y-2">
          <img src="/icons/googleLogoFull.svg" alt="" />
          <div className="text-greyLight text-sm">Suzan@gmail.com</div>
        </div>
        <BtnText text="Отключить" variant="black" />
      </div>
    </div>
  );
};
