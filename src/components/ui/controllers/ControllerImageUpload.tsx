import { Control, Controller, FieldValues, Path } from 'react-hook-form';

import { ImageUpload } from '@/components/blocks';

interface IControllerImageUploadProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  error?: string;
  label: string;
}

export const ControllerImageUpload = <T extends FieldValues>({
  name,
  control,
  error,
  label,
}: IControllerImageUploadProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => (
        <ImageUpload label={label} error={error} value={value || []} onChange={(urls) => onChange(urls)} />
      )}
    />
  );
};
