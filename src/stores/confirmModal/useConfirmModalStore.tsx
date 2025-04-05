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
      set({ isOpen: true, message, onConfirm, onCancel, reverseButtons }, false, 'ConfirmModal/openModal'),
    closeModal: () => set(initialState, false, 'ConfirmModal/closeModal'),
  }))
);
