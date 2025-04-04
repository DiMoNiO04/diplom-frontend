import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';

import { categoriesData } from '@/data';
import { IFormRecipeData, schemaRecipe } from '@/utils/validations';

import { ImageUpload } from '../blocks';
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
    mode: 'onChange',
    resolver: yupResolver(schemaRecipe),
  });

  const onSubmit = async (data: IFormRecipeData) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5">
      <div className="flex flex-col gap-y-1 mb-4">
        <p className="italic text-orange">* Все поля обязательны для заполнения</p>
        <p className="text-greyLight">
          Для разделения на пункты использовать <span className="text-orange">;</span>
        </p>
      </div>

      <div className="flex flex-col gap-y-8">
        <div className="grid grid-cols-2 gap-12">
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
