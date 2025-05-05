import { Control, Controller, FieldValues, Path } from 'react-hook-form';

import { MultiImageUploadInternal } from '../inputs/MultiImageUpload';

interface IControllerMultiImageUpload<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  error?: string;
}

export const ControllerMultiImageUpload = <T extends FieldValues>({
  name,
  control,
  label,
  error,
}: IControllerMultiImageUpload<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <MultiImageUploadInternal<T> name={name} value={value} onChange={onChange} label={label} error={error} />
      )}
    />
  );
};
