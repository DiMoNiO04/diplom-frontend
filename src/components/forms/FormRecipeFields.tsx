import { Control, FieldErrors } from 'react-hook-form';

import { helperTexts } from '@/data';
import { ICategory } from '@/utils/interfaces';
import { IFormRecipeData } from '@/utils/validations';

import { FormInfoNote } from '../blocks';
import { Button } from '../ui/btns';
import { ControllerInput, ControllerMultiSelect, ControllerTextarea } from '../ui/controllers';
import { ControllerMultiImageUpload } from '../ui/controllers/ControllerImageUpload';

interface FormRecipeFieldsProps {
  control: Control<IFormRecipeData>;
  errors: FieldErrors<IFormRecipeData>;
  categories: ICategory[];
}

export const FormRecipeFields = ({ control, errors, categories }: FormRecipeFieldsProps) => (
  <>
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
        <ControllerMultiImageUpload name="img" control={control} label="Фото блюда*" error={errors.img?.message} />
      </div>
      <Button type="submit" text="Сохранить" variant="orange" />
    </div>
  </>
);
