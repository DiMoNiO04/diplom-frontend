import { ReactNode } from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

import { InputCheckbox } from '../inputs';

interface IControllerInputCheckboxProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: ReactNode;
  id: string;
  className?: string;
  error?: string;
}

export const ControllerInputCheckbox = <T extends FieldValues>({
  name,
  control,
  label,
  id,
  error,
  className,
}: IControllerInputCheckboxProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <InputCheckbox {...field} id={id} checked={field.value} label={label} className={className} error={error} />
      )}
    />
  );
};
