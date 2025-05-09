import { useRouter } from 'next/navigation';

import { apiFavoriteAdd, apiFavoriteDelete, apiFavoritesDeleteAllUser } from '@/actions/favorites';
import { IFavoriteAddData } from '@/actions/favorites/favoritesAdd';
import { useNotificationStore } from '@/stores/notificationMsg';
import { ERROR_ICON } from '@/utils/consts';

export const useFavorite = () => {
  const { showNotification } = useNotificationStore();
  const router = useRouter();

  const deleteFavorite = async (idRecipe: string) => {
    const { isSuccess, message } = await apiFavoriteDelete(idRecipe);

    if (isSuccess) {
      showNotification(message);
      router.refresh();
    } else {
      showNotification(message, ERROR_ICON);
    }
  };

  const deleteAllFavorites = async () => {
    const { isSuccess, message } = await apiFavoritesDeleteAllUser();

    if (isSuccess) {
      showNotification(message);
      router.refresh();
    } else {
      showNotification(message, ERROR_ICON);
    }
  };

  const addFavorite = async (data: IFavoriteAddData) => {
    const { isSuccess, message } = await apiFavoriteAdd(data);

    if (isSuccess) {
      showNotification(message);
      router.refresh();
    } else {
      showNotification(message, ERROR_ICON);
    }
  };

  return { deleteAllFavorites, deleteFavorite, addFavorite };
};
