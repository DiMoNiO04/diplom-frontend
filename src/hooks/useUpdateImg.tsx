/* eslint-disable @typescript-eslint/no-explicit-any */

import { ChangeEvent, useRef, useState } from 'react';

import { apiFileUpload } from '@/actions/files';
import { EMsgActions } from '@/actions/utils';
// import { apiFileDelete } from '@/actions/files';
import { useNotificationStore } from '@/stores/notificationMsg';
import { ERROR_ICON } from '@/utils/consts';
import { IImage } from '@/utils/interfaces';

export const useUpdateImg = (initialAvatar: IImage | null, nameValue: string, setValue: any) => {
  const [img, setImg] = useState(initialAvatar);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const { showNotification } = useNotificationStore();

  const handleImgChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      try {
        const uploadResult = await apiFileUpload(file);

        if (uploadResult && uploadResult[0]?.url) {
          setImg(uploadResult[0]);
          setValue(nameValue, uploadResult[0]);
        }
      } catch (error) {
        console.error(EMsgActions.FAILED_UPLOAD_FILE, error);
        showNotification(EMsgActions.FAILED_UPLOAD_FILE, ERROR_ICON);
      }
    }
  };

  // const handleRemoveImg = async () => {
  //   if (img?.id) {
  //     try {
  //       await apiFileDelete(img.id);
  //       setImg(null);
  //       setValue(nameValue, null);
  //       showNotification(EMsgActions.SUCCESS_DELETE_FILE);
  //     } catch (error) {
  //       console.error(EMsgActions.FAILED_DELETE_FILE, error);
  //       showNotification(EMsgActions.FAILED_DELETE_FILE);
  //     }
  //   }
  // };

  const handleRemoveImg = () => {
    setImg(null);
    setValue(nameValue, null);
  };

  const handleUploadClick = () => fileInputRef.current?.click();

  return {
    img,
    fileInputRef,
    handleImgChange,
    handleRemoveImg,
    // handleRemoveImgLocale,
    handleUploadClick,
  };
};
