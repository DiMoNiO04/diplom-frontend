import { DeleteIcon, LogOutIcon } from '@/components/icons';

export const ProfileActions = () => {
  return (
    <div className="flex items-center justify-between">
      <button
        type="button"
        className="flex items-center gap-x-2 group hover:text-orange transition-colors duration-300"
      >
        <LogOutIcon className="group" />
        Sign out
      </button>
      <button
        type="button"
        className="flex items-center gap-x-2 group text-orange hover:text-black transition-colors duration-300"
      >
        <DeleteIcon className="group fill-orange group-hover:fill-black" />
        Delete Account
      </button>
    </div>
  );
};
