import { useRouter } from 'next/navigation';

import { apiCreateRecipe, apiDeleteRecipe, apiUpdateRecipe } from '@/actions/recipes';
import { useNotificationStore } from '@/stores/notificationMsg';
import { ERROR_ICON } from '@/utils/consts';
import { EUrls } from '@/utils/urls';
import { IFormRecipeData } from '@/utils/validations';

export const useRecipe = () => {
  const { showNotification } = useNotificationStore();
  const router = useRouter();

  const deleteRecipe = async (idRecipe: string) => {
    const { isSuccess, message } = await apiDeleteRecipe(idRecipe);

    if (isSuccess) {
      showNotification(message);
      router.refresh();
    } else {
      showNotification(message, ERROR_ICON);
    }
  };

  const createRecipe = async (data: IFormRecipeData, reset: () => void) => {
    const { isSuccess, message } = await apiCreateRecipe(data);

    if (isSuccess) {
      showNotification(message);
      reset();
      router.push(EUrls.MY_RECIPES);
    } else {
      showNotification(message, ERROR_ICON);
    }
  };

  const updateRecipe = async (data: IFormRecipeData, idRecipe: string, reset: () => void) => {
    const { isSuccess, message } = await apiUpdateRecipe(data, idRecipe);

    if (isSuccess) {
      showNotification(message);
      reset();
      router.push(EUrls.MY_RECIPES);
    } else {
      showNotification(message, ERROR_ICON);
    }
  };

  return { deleteRecipe, createRecipe, updateRecipe };
};
