import Image from 'next/image';
import { useEffect } from 'react';
import { FieldValues, Path } from 'react-hook-form';

import { IconClose } from '@/components/icons';
import { useUpdateImages } from '@/hooks/useUpdateImgs';
import { getImageUrl } from '@/utils/functions';
import { IImage } from '@/utils/interfaces';

import { Button } from '../btns';
import { ErrorMsgInput } from '../inputs';

interface MultiImageUploadInternalProps<T extends FieldValues> {
  name: Path<T>;
  value: IImage[];
  onChange: (value: IImage[]) => void;
  label?: string;
  error?: string;
}

export const MultiImageUploadInternal = <T extends FieldValues>({
  name,
  value,
  onChange,
  label,
  error,
}: MultiImageUploadInternalProps<T>) => {
  const { images, fileInputRef, handleImagesChange, handleRemoveImage, handleUploadClick } = useUpdateImages(
    value,
    name,
    onChange
  );

  useEffect(() => {
    onChange(images);
  }, [images, onChange]);

  return (
    <div className="flex flex-col gap-2 col-span-2 relative">
      {label && <label className="font-medium">{label}</label>}
      <div className="flex flex-wrap gap-1">
        {images.map((img, idx) => (
          <div key={idx} className="relative size-24 border rounded overflow-hidden">
            <Image src={getImageUrl(img.url)} alt="" width={96} height={96} className="size-full object-cover" />
            <button
              type="button"
              className="absolute top-0 right-0 p-1 bg-white rounded-bl"
              onClick={() => handleRemoveImage(idx)}
            >
              <IconClose size={16} />
            </button>
          </div>
        ))}
      </div>

      <input
        type="file"
        multiple
        accept="image/*"
        ref={fileInputRef}
        className="hidden"
        onChange={handleImagesChange}
      />

      <Button text="Добавить фото" type="button" onClick={handleUploadClick} variant="default" size="sm" />

      <ErrorMsgInput error={error} />
    </div>
  );
};
