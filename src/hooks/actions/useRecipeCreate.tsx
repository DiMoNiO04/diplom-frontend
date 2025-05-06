import { useRouter } from 'next/navigation';

import { apiCreateRecipe } from '@/actions/recipes';
import { useNotificationStore } from '@/stores/notificationMsg';
import { ERROR_ICON } from '@/utils/consts';
import { EUrls } from '@/utils/urls';
import { IFormRecipeData } from '@/utils/validations';

export const useRecipeCreate = () => {
  const { showNotification } = useNotificationStore();
  const router = useRouter();

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

  return { createRecipe };
};
