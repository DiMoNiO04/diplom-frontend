'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useConfirmModalStore } from '@/stores/confirmModal';
import { useNotificationStore } from '@/stores/notificationMsg';
import { getImageUrl } from '@/utils/functions';
import { IRecipe } from '@/utils/interfaces';
import { EUrls } from '@/utils/urls';

import { IconDelete, IconEdit } from '../icons';

export const CardMyRecipe = ({ documentId, title, img }: IRecipe) => {
  const router = useRouter();

  const linkUrlRecipe: string = `${EUrls.RECIPES}/${documentId}`;

  const { openModal } = useConfirmModalStore();
  const { showNotification } = useNotificationStore();

  const handleBtnYes = () => showNotification('Рецепт удален!');

  const handleOpenModalDeleteRecipe = () => {
    openModal(`Вы уверены что хотите удалить рецепт "${name}"?`, handleBtnYes);
  };

  const handleEditBtn = () => router.replace(`${EUrls.RECIPES}${EUrls.EDIT_RECIPE}/${documentId}/`);

  return (
    <div className="flex flex-col gap-2 relative w-fit">
      <div className="absolute top-3 right-3 flex items-center gap-x-2 z-20">
        <button
          onClick={handleOpenModalDeleteRecipe}
          type="button"
          className={clsx(
            'size-8 flex items-center justify-center rounded-md bg-white',
            'transition-colors duration-300 hover:bg-whiteLight'
          )}
        >
          <IconDelete className="fill-greyLight" />
        </button>
        <button
          type="button"
          onClick={handleEditBtn}
          className={clsx(
            'size-8 flex items-center justify-center rounded-md bg-white',
            'transition-colors duration-300 hover:bg-whiteLight'
          )}
        >
          <IconEdit className="stroke-greyLight" />
        </button>
      </div>

      <Link href={linkUrlRecipe} className="group flex flex-col gap-2 relative w-fit group">
        <div className="rounded-md w-full aspect-[350/265] overflow-hidden transition-transform duration-300 group-hover:scale-105">
          <Image src={getImageUrl(img[0].url)} alt="" width={350} height={265} className="size-full object-cover" />
        </div>
        <div className="text-lg leading-6 font-medium transition-colors duration-300 group-hover:text-orange">
          {title}
        </div>
      </Link>
    </div>
  );
};
