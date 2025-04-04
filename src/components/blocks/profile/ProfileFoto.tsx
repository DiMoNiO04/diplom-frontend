'use client';

import Image from 'next/image';
import { ChangeEvent, useRef, useState } from 'react';

import { Button } from '@/components/ui';

export const ProfileFoto = () => {
  const [avatar, setAvatar] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveAvatar = () => setAvatar(null);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="flex items-center gap-x-6 mb-8">
      <div className="size-20 rounded-full border border-black overflow-hidden flex items-center justify-center">
        {avatar ? (
          <Image src={avatar} width={80} height={80} alt="User avatar" className="object-cover" />
        ) : (
          <Image src="/icons/user.svg" width={80} height={80} alt="Default avatar" />
        )}
      </div>

      <input type="file" accept="image/*" ref={fileInputRef} className="hidden" onChange={handleImageChange} />

      <Button text="Изменить фото" variant="orange" size="sm" onClick={handleUploadClick} />
      <Button text="Удалить фото" size="sm" onClick={handleRemoveAvatar} />
    </div>
  );
};
