import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { TConfirmModalStore } from './types';

const initialState = {
  isOpen: false,
  message: '',
  onConfirm: () => {},
  onCancel: () => {},
  reverseButtons: true,
};

export const useConfirmModalStore = create<TConfirmModalStore>()(
  devtools((set) => ({
    ...initialState,
    openModal: (message, onConfirm, onCancel, reverseButtons = false) =>
      set({ isOpen: true, message, onConfirm, onCancel, reverseButtons }, false, 'ConfirmModal/openModal'),
    closeModal: () => set(initialState, false, 'ConfirmModal/closeModal'),
  }))
);
