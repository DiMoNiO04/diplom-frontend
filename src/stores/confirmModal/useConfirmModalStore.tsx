import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { TConfirmModalState, TConfirmModalStore } from './types';

const initialState: TConfirmModalState = {
  isOpen: false,
  message: '',
  reverseButtons: true,
  onConfirm: () => {},
  onCancel: () => {},
};

export const useConfirmModalStore = create<TConfirmModalStore>()(
  devtools((set) => ({
    ...initialState,
    openModal: (message, onConfirm, onCancel, reverseButtons = false) =>
      set({ isOpen: true, message, reverseButtons, onConfirm, onCancel }, false, 'ConfirmModal/openModal'),
    closeModal: () => {
      set({ isOpen: false }, false, 'ConfirmModal/closeModal');

      setTimeout(() => {
        set(initialState, false, 'ConfirmModal/reset');
      }, 500);
    },
  }))
);
