import { Control, Controller, FieldValues, Path } from 'react-hook-form';

import { InputTextarea } from '../inputs';

interface IControllerTextareaProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  placeholder: string;
  error?: string;
  withBorder?: boolean;
}

export const ControllerTextarea = <T extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  error,
  withBorder = true,
}: IControllerTextareaProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <InputTextarea {...field} withBorder={withBorder} label={label} placeholder={placeholder} error={error} />
      )}
    />
  );
};
