import { ReactNode } from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

import { Input } from '../inputs';

interface IControllerInputProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  placeholder: string;
  error?: string;
  withBorder?: boolean;
  type?: string;
  icon?: ReactNode;
}

export const ControllerInput = <T extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  error,
  withBorder = false,
  type = 'text',
  icon,
}: IControllerInputProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Input
          {...field}
          withBorder={withBorder}
          type={type}
          label={label}
          placeholder={placeholder}
          error={error}
          icon={icon}
        />
      )}
    />
  );
};
