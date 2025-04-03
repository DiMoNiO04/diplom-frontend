import { DeleteIcon, LogOutIcon } from '@/components/icons';
import { BtnText } from '@/components/ui';

export const ProfileActions = () => {
  return (
    <div className="flex items-center justify-between">
      <BtnText text="Выйти" icon={<LogOutIcon />} variant="black" />
      <BtnText
        text="Удалить аккаунт"
        icon={<DeleteIcon className="fill-orange group-hover:fill-black" />}
        variant="orange"
      />
    </div>
  );
};
