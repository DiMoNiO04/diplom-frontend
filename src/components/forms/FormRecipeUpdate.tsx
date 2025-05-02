import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { helperTexts } from '@/data';
import { useRecipeUpdate } from '@/hooks/actions';
import { ICategoriesAndRecipeEdit } from '@/utils/interfaces';
import { IFormRecipeData, schemaRecipe } from '@/utils/validations';

import { FormInfoNote } from '../blocks';
import { Button } from '../ui/btns';
import { ControllerInput, ControllerMultiSelect, ControllerTextarea } from '../ui/controllers';

export const FormRecipeUpdate = ({ recipe: defaultValues, categories, idRecipe }: ICategoriesAndRecipeEdit) => {
  const {
    control,
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

  const { updateRecipe } = useRecipeUpdate();

  const onSubmit = async (data: IFormRecipeData) => updateRecipe(data, idRecipe, reset);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5">
      <FormInfoNote />

      <div className="flex flex-col gap-y-8">
        <div className="grid grid-cols-2 gap-12 max-md:flex max-md:flex-col max-md:gap-6">
          <ControllerInput<IFormRecipeData>
            name="title"
            control={control}
            label="Название*"
            placeholder="Название"
            error={errors.title?.message}
            withBorder
          />
          <ControllerInput<IFormRecipeData>
            name="cookingTime"
            control={control}
            label="Время приготовления*"
            placeholder="Время приготовления (мин)*"
            type="number"
            error={errors.cookingTime?.message}
            withBorder
          />
          <ControllerInput<IFormRecipeData>
            name="calories"
            control={control}
            label="Количество калорий*"
            placeholder="Количество калорий*"
            type="number"
            error={errors.calories?.message}
            withBorder
          />
          <ControllerMultiSelect<IFormRecipeData>
            name="categories"
            control={control}
            options={categories}
            label="Категории*"
            placeholder="Выберите категории*"
            error={errors.categories?.message}
          />
          <ControllerTextarea<IFormRecipeData>
            name="shortDescription"
            control={control}
            label="Краткое описание*"
            placeholder="Краткое описание*"
            error={errors.shortDescription?.message}
            helperText={helperTexts.shortDescription}
          />
          <ControllerTextarea<IFormRecipeData>
            name="description"
            control={control}
            label="Описание*"
            placeholder="Описание*"
            error={errors.description?.message}
            helperText={helperTexts.description}
          />
          <ControllerTextarea<IFormRecipeData>
            name="ingredients"
            control={control}
            label="Список ингредиентов*"
            placeholder="Список ингредиентов*"
            error={errors.ingredients?.message}
            helperText={helperTexts.ingredients}
          />
          <ControllerTextarea<IFormRecipeData>
            name="instructions"
            control={control}
            label="Инструкция по приготовлению*"
            placeholder="Инструкция по приготовлению*"
            error={errors.instructions?.message}
            helperText={helperTexts.instruction}
          />
          {/* <Controller
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
          /> */}
        </div>

        <Button type="submit" text="Обновить рецепт" variant="orange" />
      </div>
    </form>
  );
};
