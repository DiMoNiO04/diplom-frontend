'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { useRecipe } from '@/hooks/actions';
import { useUserStore } from '@/stores/user';
import { ICategoriesProps } from '@/utils/interfaces';
import { IFormRecipeData, schemaRecipe } from '@/utils/validations';

import { FormRecipeFields } from './FormRecipeFields';

export const FormRecipeCreate = ({ categories }: ICategoriesProps) => {
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

  const { createRecipe } = useRecipe();

  const onSubmit = async (data: IFormRecipeData) => {
    const user = useUserStore.getState().user?.id;
    const createRecipeData = { ...data, user };
    createRecipe(createRecipeData, reset);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5">
      <FormRecipeFields control={control} errors={errors} categories={categories} />
    </form>
  );
};
