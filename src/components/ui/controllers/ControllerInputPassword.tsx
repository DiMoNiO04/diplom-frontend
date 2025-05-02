import { Control, Controller, FieldValues, Path } from 'react-hook-form';

import { InputPassword } from '../inputs';

interface IControllerInputPasswordProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  placeholder: string;
  error?: string;
}

export const ControllerInputPassword = <T extends FieldValues>({
  name,
  control,
  placeholder,
  error,
}: IControllerInputPasswordProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <InputPassword {...field} onBlur={field.onBlur} placeholder={placeholder} error={error} />}
    />
  );
};
