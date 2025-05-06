import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { useRecipeUpdate } from '@/hooks/actions';
import { ICategoriesAndRecipeEdit } from '@/utils/interfaces';
import { IFormRecipeData, schemaRecipe } from '@/utils/validations';

import { FormRecipeFields } from './FormRecipeFields';

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
      <FormRecipeFields control={control} errors={errors} categories={categories} />
    </form>
  );
};
