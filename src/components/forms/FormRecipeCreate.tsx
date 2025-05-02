import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { useNotificationStore } from '@/stores/notificationMsg';
import { ICategoriesAndCollectionsProps } from '@/utils/interfaces';
import { EUrls } from '@/utils/urls';
import { IFormRecipeData, schemaRecipe } from '@/utils/validations';

import { FormInfoNote } from '../blocks';
import { Button } from '../ui/btns';
import { ControllerInput, ControllerMultiSelect, ControllerTextarea } from '../ui/controllers';

export const FormRecipeCreate = ({ categories, collections }: ICategoriesAndCollectionsProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormRecipeData>({
    resolver: yupResolver(schemaRecipe),
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const router = useRouter();
  const { showNotification } = useNotificationStore();

  const onSubmit = async (data: IFormRecipeData) => {
    console.log(data);

    reset();
    showNotification('Рецепт создан!');

    router.push(EUrls.MY_RECIPES);
  };

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
          <ControllerMultiSelect<IFormRecipeData>
            name="collections"
            control={control}
            options={collections}
            label="Коллекции*"
            placeholder="Выберите коллекции*"
            error={errors.collections?.message}
          />
          <ControllerTextarea<IFormRecipeData>
            name="description"
            control={control}
            label="Описание*"
            placeholder="Описание*"
            error={errors.description?.message}
          />
          <ControllerTextarea<IFormRecipeData>
            name="ingredients"
            control={control}
            label="Список ингредиентов*"
            placeholder="Список ингредиентов*"
            error={errors.ingredients?.message}
          />
          <ControllerTextarea<IFormRecipeData>
            name="instructions"
            control={control}
            label="Инструкция по приготовлению*"
            placeholder="Инструкция по приготовлению*"
            error={errors.instructions?.message}
          />
          {/* <Controller
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
          /> */}
        </div>

        <Button type="submit" text="Создать рецепт" variant="orange" />
      </div>
    </form>
  );
};
