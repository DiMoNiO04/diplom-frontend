/* eslint-disable @typescript-eslint/no-explicit-any */

import { ChangeEvent, useRef, useState } from 'react';

import { apiFileUpload } from '@/actions/files';
import { EMsgActions } from '@/actions/utils';
import { useNotificationStore } from '@/stores/notificationMsg';
import { ERROR_ICON } from '@/utils/consts';
import { IImage } from '@/utils/interfaces';

export const useUpdateImages = (initialImages: IImage[] = [], nameValue: string, setValue: any) => {
  const [images, setImages] = useState<IImage[]>(initialImages);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { showNotification } = useNotificationStore();

  const handleImagesChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    try {
      const uploads = await Promise.all(Array.from(files).map((file) => apiFileUpload(file).then((res) => res?.[0])));
      const filteredUploads = uploads.filter(Boolean) as IImage[];
      const updatedImages = [...images, ...filteredUploads];
      setImages(updatedImages);
      setValue(nameValue, updatedImages);
    } catch (error) {
      console.error(EMsgActions.FAILED_UPLOAD_FILE, error);
      showNotification(EMsgActions.FAILED_UPLOAD_FILE, ERROR_ICON);
    }
  };

  const handleRemoveImage = (index: number) => {
    const updated = images.filter((_, i) => i !== index);
    setImages(updated);
    setValue(nameValue, updated);
  };

  const handleUploadClick = () => fileInputRef.current?.click();

  return {
    images,
    fileInputRef,
    handleImagesChange,
    handleRemoveImage,
    handleUploadClick,
  };
};
