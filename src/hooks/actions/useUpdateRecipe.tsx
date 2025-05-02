import { useRouter } from 'next/navigation';

import { apiUpdateRecipe } from '@/actions/recipes/recipeUpdate';
import { useNotificationStore } from '@/stores/notificationMsg';
import { ERROR_ICON } from '@/utils/consts';
import { EUrls } from '@/utils/urls';
import { IFormRecipeData } from '@/utils/validations';

export const useRecipeUpdate = () => {
  const { showNotification } = useNotificationStore();
  const router = useRouter();

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

  return { updateRecipe };
};
