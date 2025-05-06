import { useRouter } from 'next/navigation';

import { apiReviewDelete } from '@/actions/reviews';
import { apiReviewCreate, IReviewCreateData } from '@/actions/reviews/reviewCreate';
import { useNotificationStore } from '@/stores/notificationMsg';
import { ERROR_ICON } from '@/utils/consts';

export const useReviews = () => {
  const { showNotification } = useNotificationStore();
  const router = useRouter();

  const deleteReview = async (idReview: string) => {
    const { isSuccess, message } = await apiReviewDelete(idReview);

    if (isSuccess) {
      showNotification(message);
      router.refresh();
    } else {
      showNotification(message, ERROR_ICON);
    }
  };

  const createReview = async (data: IReviewCreateData) => {
    const { isSuccess, message } = await apiReviewCreate(data);

    if (isSuccess) {
      showNotification(message);
      router.refresh();
    } else {
      showNotification(message, ERROR_ICON);
    }
  };

  return { deleteReview, createReview };
};
