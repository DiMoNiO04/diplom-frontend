import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { TConfirmModalStore } from './types';

const initialState = {
  isOpen: false,
  message: '',
  onConfirm: () => {},
  onCancel: () => {},
};

export const useConfirmModalStore = create<TConfirmModalStore>()(
  devtools((set) => ({
    ...initialState,
    openModal: (message, onConfirm, onCancel) =>
      set({ isOpen: true, message, onConfirm, onCancel }, false, 'ConfirmModal/openModal'),
    closeModal: () => set(initialState, false, 'ConfirmModal/closeModal'),
  }))
);
