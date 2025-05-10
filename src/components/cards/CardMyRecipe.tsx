'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { apiFileDelete } from '@/actions/files';
import { useRecipe } from '@/hooks/actions';
import { useConfirmModalStore } from '@/stores/confirmModal';
import { getImageUrl } from '@/utils/functions';
import { IRecipe } from '@/utils/interfaces';
import { EUrls } from '@/utils/urls';

import { CardNewInfo } from '../blocks';
import { IconDelete, IconEdit } from '../icons';

export const CardMyRecipe = ({ documentId, createdAt, title, img: images }: IRecipe) => {
  const router = useRouter();

  const linkUrlRecipe: string = `${EUrls.RECIPES}/${documentId}`;

  const { openModal } = useConfirmModalStore();
  const { deleteRecipe } = useRecipe();

  const handleDeleteRecipe = () => {
    deleteRecipe(documentId);

    images.forEach(async (img) => await apiFileDelete(img.id));
  };

  const handleEditBtn = () => router.replace(`${EUrls.RECIPES}/${documentId}/${EUrls.EDIT_RECIPE}/`);
  const handleOpenModalDeleteRecipe = () =>
    openModal(`Вы уверены что хотите удалить рецепт "${title}"?`, handleDeleteRecipe);

  if (!images && !title) return null;

  return (
    <div className="flex flex-col gap-2 relative w-fit">
      <CardNewInfo createdAt={createdAt} />
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
        <div
          className={`
          rounded-md w-full aspect-[306/231] overflow-hidden transition-transform duration-300 group-hover:scale-105  
        `}
        >
          {images && (
            <Image src={getImageUrl(images[0].url)} alt="" width={306} height={231} className="object-cover h-full" />
          )}
        </div>
        {title && (
          <div className="text-lg leading-6 font-medium transition-colors duration-300 group-hover:text-orange">
            {title}
          </div>
        )}
      </Link>
    </div>
  );
};
