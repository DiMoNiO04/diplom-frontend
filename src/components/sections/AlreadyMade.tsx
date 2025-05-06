'use client';

import { useCallback, useEffect } from 'react';

import { useReviews } from '@/hooks/actions';
import { useAuthModalStore } from '@/stores/authModal';
import { useConfirmModalStore } from '@/stores/confirmModal';
import { useUserStore } from '@/stores/user';
import { DELAY_ONE_MIN } from '@/utils/consts';

import { Title } from '../ui';
import { Button } from '../ui/btns';

interface IAlreadyMadeProps {
  idRecipe: string;
  isRecipeInCookAgain: boolean;
  reviewId: string | null;
}

type IAnswerReview = 'yes' | 'no';

export const AlreadyMade = ({ idRecipe, isRecipeInCookAgain, reviewId }: IAlreadyMadeProps) => {
  const { openModal: openConfirmModal } = useConfirmModalStore();
  const { openModal: openAuthModal } = useAuthModalStore();
  const { isAuth } = useUserStore();
  const { createReview, deleteReview } = useReviews();

  const userId = useUserStore.getState().user?.id;

  const submitReview = useCallback(
    (type: IAnswerReview) => {
      createReview({
        recipeId: idRecipe,
        userId,
        reviewType: type,
      });
    },
    [createReview, idRecipe, userId]
  );

  const handleReviewYes = useCallback(() => submitReview('yes'), [submitReview]);
  const handleReviewNo = useCallback(() => submitReview('no'), [submitReview]);

  const confirmDeleteReview = () => {
    if (reviewId) {
      deleteReview(reviewId);
    }
  };

  const handleClickDeleteReview = () => {
    openConfirmModal('Вы уверены, что хотите удалить отзыв?', confirmDeleteReview, undefined, true);
  };

  const handleOpenReviewModal = useCallback(() => {
    openConfirmModal('Вы бы приготовили этот рецепт снова?', handleReviewYes, handleReviewNo, true);
  }, [openConfirmModal, handleReviewYes, handleReviewNo]);

  const handleClickReviewButton = () => {
    if (isAuth) {
      handleOpenReviewModal();
    } else {
      openAuthModal();
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isAuth && !isRecipeInCookAgain) {
        handleOpenReviewModal();
      }
    }, DELAY_ONE_MIN);

    return () => clearTimeout(timer);
  }, [isAuth, isRecipeInCookAgain, handleOpenReviewModal]);

  return (
    <section className="mb-20 max-lg:mb-16">
      <div className="custom-container">
        <div className="border-b-8 border-orange pb-8 flex flex-col gap-y-8 max-md:gap-y-6 max-md:pb-6">
          <Title title="Сделали бы это снова?" type="h2" />

          {isRecipeInCookAgain ? (
            <div className="flex flex-col gap-4">
              <p className="text-lg text-green">Спасибо! Вы уже делились отзывом об этом рецепте.</p>
              <Button
                text="Удалить отзыв"
                className="w-fit max-sm:w-full bg-red-500 hover:bg-red-600"
                onClick={handleClickDeleteReview}
              />
            </div>
          ) : (
            <Button text="Поделитесь своим отзывом" className="w-fit max-sm:w-full" onClick={handleClickReviewButton} />
          )}
        </div>
      </div>
    </section>
  );
};
