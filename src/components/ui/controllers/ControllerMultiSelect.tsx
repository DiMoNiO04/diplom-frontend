import { Control, Controller, FieldValues, Path } from 'react-hook-form';

import { MultiSelect } from '../selects/MultiSelect';

interface IControllerMultiSelectProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  options: { documentId: string; title: string }[];
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
            value: item.documentId,
            text: item.title,
          }))}
          label={label}
          isForm
          placeholder={placeholder}
          error={error}
          value={
            Array.isArray(field.value)
              ? field.value.map((v: string) => ({
                  value: v,
                  text: options.find((o) => o.documentId === v)?.title || `${v}`,
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
