import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { useNotificationStore } from '@/stores/notificationMsg';
import { EUrls } from '@/utils/urls';
import { IFormRecipeData, schemaRecipe } from '@/utils/validations';

import { FormInfoNote, ImageUpload } from '../blocks';
import { Button } from '../ui/btns';
import { Input, InputTextarea } from '../ui/inputs';
import { Select } from '../ui/selects';
import { MultiSelect } from '../ui/selects/MultiSelect';

interface IFormRecipeUpdateProps {
  defaultValues: IFormRecipeData;
}

export const FormRecipeUpdate = ({ defaultValues }: IFormRecipeUpdateProps) => {
  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormRecipeData>({
    resolver: yupResolver(schemaRecipe),
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);

  const router = useRouter();

  const { showNotification } = useNotificationStore();

  const onSubmit = async (data: IFormRecipeData) => {
    console.log('Обновленные данные:', data);
    showNotification('Рецепт обновлен!');
    router.replace(EUrls.MY_RECIPES);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5">
      <FormInfoNote />

      <div className="flex flex-col gap-y-8">
        <div className="grid grid-cols-2 gap-12 max-md:flex max-md:flex-col max-md:gap-6">
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <Input {...field} withBorder label="Название*" placeholder="Название" error={errors.title?.message} />
            )}
          />
          <Controller
            name="cookingTime"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                withBorder
                label="Время приготовления*"
                type="number"
                placeholder="Время приготовления (мин)*"
                error={errors.cookingTime?.message}
              />
            )}
          />
          <Controller
            name="calories"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                withBorder
                label="Количество калорий*"
                type="number"
                placeholder="Количество калорий*"
                error={errors.calories?.message}
              />
            )}
          />
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={categories.map((category) => ({
                  value: category.slug,
                  text: category.title,
                }))}
                label="Категории*"
                isForm
                placeholder="Выберите категории*"
                error={errors.category?.message}
                value={field.value ? { value: field.value, text: field.value } : null}
                onChange={(selected) => field.onChange(selected.value)}
              />
            )}
          />
          <Controller
            name="collection"
            control={control}
            render={({ field }) => (
              <MultiSelect
                options={collections.map((c) => ({ value: c.slug, text: c.title }))}
                label="Коллекции*"
                isForm
                placeholder="Выберите коллекции*"
                error={errors.category?.message}
                value={
                  Array.isArray(field.value)
                    ? field.value.map((v) => ({
                        value: v,
                        text: collections.find((c) => c.slug === v)?.title || v,
                      }))
                    : []
                }
                onChange={(selected) => {
                  const slugs = selected.map((o) => o.value);
                  field.onChange(slugs);
                }}
              />
            )}
          />
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <InputTextarea
                withBorder
                label="Описание*"
                {...field}
                placeholder="Описание*"
                error={errors.description?.message}
              />
            )}
          />
          <Controller
            name="ingredients"
            control={control}
            render={({ field }) => (
              <InputTextarea
                withBorder
                label="Список ингредиентов*"
                {...field}
                placeholder="Список ингредиентов*"
                error={errors.ingredients?.message}
              />
            )}
          />
          <Controller
            name="instructions"
            control={control}
            render={({ field }) => (
              <InputTextarea
                withBorder
                label="Инструкция по приготовлению*"
                {...field}
                placeholder="Инструкция по приготовлению*"
                error={errors.instructions?.message}
              />
            )}
          />
          <Controller
            name="img"
            control={control}
            render={({ field }) => (
              <ImageUpload
                label="Фото блюда*"
                error={errors.img?.message}
                value={field.value || []}
                onChange={(urls) => setValue('img', urls, { shouldValidate: true })}
              />
            )}
          />
        </div>

        <Button type="submit" text="Обновить рецепт" variant="orange" />
      </div>
    </form>
  );
};
