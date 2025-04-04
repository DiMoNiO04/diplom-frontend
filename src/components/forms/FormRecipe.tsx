import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';

import { IFormRecipeData, schemaRecipe } from '@/utils/validations';

import { ImageUpload } from '../blocks';
import { Button, Input, InputTextarea } from '../ui';

interface IRecipeForm {
  actionType: 'create' | 'update';
}

export const FormRecipe = ({ actionType }: IRecipeForm) => {
  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormRecipeData>({
    mode: 'onChange',
    resolver: yupResolver(schemaRecipe),
  });

  const onSubmit = async (data: IFormRecipeData) => {
    alert(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5">
      <p className="italic text-orange">* Все поля обязательны для заполнения</p>

      <div className="max-w-5xl flex flex-col gap-y-8">
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
            render={() => (
              <ImageUpload
                label="Фото блюда*"
                error={errors.img?.message}
                onChange={(files) => {
                  setValue('img', files, { shouldValidate: true });
                }}
              />
            )}
          />
        </div>

        <Button type="submit" text="Создать рецепт" />
      </div>
    </form>
  );
};
