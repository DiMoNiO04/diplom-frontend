import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';

import { categoriesData } from '@/data';
import { useNotificationStore } from '@/stores/notificationMsg';
import { IFormRecipeData, schemaRecipe } from '@/utils/validations';

import { FormInfoNote, ImageUpload } from '../blocks';
import { Button } from '../ui/btns';
import { Input, InputTextarea } from '../ui/inputs';
import { Select } from '../ui/selects';

export const FormRecipeCreate = () => {
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
  });

  const { showNotification } = useNotificationStore();

  const onSubmit = async (data: IFormRecipeData) => {
    console.log(data);
    reset();
    showNotification('Рецепт создан!');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5">
      <FormInfoNote />

      <div className="flex flex-col gap-y-8">
        <div className="grid grid-cols-2 gap-12 max-md:flex max-md:flex-col max-md:gap-6">
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input {...field} withBorder label="Название*" placeholder="Название" error={errors.name?.message} />
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
                options={categoriesData.map((category) => ({
                  value: category.slug,
                  text: category.name,
                }))}
                label="Категория*"
                isForm
                placeholder="Выберите категорию*"
                error={errors.category?.message}
                value={field.value ? { value: field.value, text: field.value } : null}
                onChange={(selected) => field.onChange(selected.value)}
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
                value={field.value}
                onChange={(files) => {
                  setValue('img', files, { shouldValidate: true });
                }}
              />
            )}
          />
        </div>

        <Button type="submit" text="Создать рецепт" variant="orange" />
      </div>
    </form>
  );
};
