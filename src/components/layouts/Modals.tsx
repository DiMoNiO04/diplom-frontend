import { Suspense } from 'react';

import { ModalAuth, ModalChangePassword, ModalConfirm } from '../modals';

export const Modals = () => {
  return (
    <>
      <Suspense fallback={null}>
        <ModalAuth />
      </Suspense>
      <ModalConfirm />
      <ModalChangePassword />
    </>
  );
};
