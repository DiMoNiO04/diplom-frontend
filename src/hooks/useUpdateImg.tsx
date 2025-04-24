import { ChangeEvent, useRef, useState } from 'react';

export const useUpdateImg = () => {
  const [img, setImg] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImgChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImg(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImg = () => setImg(null);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return { img, fileInputRef, handleImgChange, handleRemoveImg, handleUploadClick };
};
