import Image from 'next/image';

import { getImageUrl } from '@/utils/functions';
import { IUser } from '@/utils/interfaces';

import { IconUser } from '../icons';

export const CardTeam = ({ firstName, lastName, avatar, username }: IUser) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-4 rounded-full size-40 border border-grey overflow-hidden max-sm:mb-2">
        {avatar ? <Image src={getImageUrl(avatar.url)} alt="" width={160} height={160} /> : <IconUser size={160} />}
      </div>
      <h3 className="mb-1 text-black text-center font-unbounded">
        {lastName && firstName ? (
          <>
            {firstName} {lastName} <br /> <span className="text-orange">({username})</span>
          </>
        ) : (
          <>{username}</>
        )}
      </h3>
    </div>
  );
};
