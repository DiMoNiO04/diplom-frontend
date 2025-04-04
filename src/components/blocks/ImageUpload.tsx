'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { ChangeEvent, useEffect, useState } from 'react';

import { CloseIcon } from '../icons';
import { ErrorMsgInput } from '../ui/inputs/ErrorMsgInput';

interface IImageUploadProps {
  label?: string;
  error?: string;
  onChange: (files: File[]) => void;
  value?: File[];
}

export const ImageUpload = ({ label, error, onChange, value }: IImageUploadProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);

  useEffect(() => {
    if (!value || value.length === 0) {
      setFiles([]);
      setPreviews([]);
    }
  }, [value]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(event.target.files || []);

    if (newFiles.length) {
      const updatedFiles = [...files, ...newFiles];
      setFiles(updatedFiles);
      setPreviews([...previews, ...newFiles.map((file) => URL.createObjectURL(file))]);
      onChange(updatedFiles);
    }

    event.target.value = '';
  };

  const removeImage = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    const updatedPreviews = previews.filter((_, i) => i !== index);

    setFiles(updatedFiles);
    setPreviews(updatedPreviews);
    onChange(updatedFiles);
  };

  return (
    <div className="flex flex-col gap-2 col-span-2 relative">
      {label && <label className="font-medium">{label}</label>}

      <div
        className={clsx(
          'relative flex items-center justify-center border p-4 rounded-md ',
          'cursor-pointer transition-colors duration-300 hover:bg-whiteDark',
          error && 'border-red'
        )}
      >
        <p className={clsx(error ? 'text-red' : 'text-greyLight')}>Выбрать изображения</p>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          className="absolute inset-0 opacity-0 cursor-pointer"
        />
      </div>

      {previews.length > 0 && (
        <div className="flex items-center gap-4 flex-wrap">
          {previews.map((src, index) => (
            <div key={index} className="relative w-28 h-28 group">
              <Image
                src={src}
                alt="Preview"
                className="w-full h-full object-cover rounded-md border transition duration-300 group-hover:opacity-75"
                width={112}
                height={112}
              />

              <button
                type="button"
                className={clsx(
                  'absolute top-1 right-1 bg-white text-white rounded-full size-5 flex items-center justify-center',
                  'transition duration-300 opacity-0 group-hover:opacity-100 hover:bg-gray-300'
                )}
                onClick={() => removeImage(index)}
              >
                <CloseIcon size={12} />
              </button>
            </div>
          ))}
        </div>
      )}

      <ErrorMsgInput error={error} />
    </div>
  );
};
