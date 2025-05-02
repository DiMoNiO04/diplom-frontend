import { Control, Controller, FieldValues, Path } from 'react-hook-form';

import { MultiSelect } from '../selects/MultiSelect';

interface IControllerMultiSelectProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  options: { id: number; title: string }[];
  label: string;
  placeholder: string;
  error?: string;
}

export const ControllerMultiSelect = <T extends FieldValues>({
  name,
  control,
  options,
  label,
  placeholder,
  error,
}: IControllerMultiSelectProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <MultiSelect
          {...field}
          options={options.map((item) => ({
            value: item.id,
            text: item.title,
          }))}
          label={label}
          isForm
          placeholder={placeholder}
          error={error}
          value={
            Array.isArray(field.value)
              ? field.value.map((v: unknown) => ({
                  value: v,
                  text: options.find((o) => o.id === Number(v))?.title || `${v}`,
                }))
              : []
          }
          onChange={(selected) => {
            const ids = selected.map((o) => o.value);
            field.onChange(ids);
          }}
        />
      )}
    />
  );
};
