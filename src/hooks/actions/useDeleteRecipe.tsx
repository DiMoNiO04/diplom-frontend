import { useRouter } from 'next/navigation';

import { apiDeleteRecipe } from '@/actions/recipes/recipeDelete';
import { useNotificationStore } from '@/stores/notificationMsg';
import { ERROR_ICON } from '@/utils/consts';

export const useDeleteRecipe = () => {
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

  return { deleteRecipe };
};
