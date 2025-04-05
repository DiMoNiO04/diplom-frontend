import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { TChangePasswordModalState, TChangePasswordModalStore } from './types';

const initialState: TChangePasswordModalState = {
  isOpen: false,
};

export const useChangePasswordModalStore = create<TChangePasswordModalStore>()(
  devtools((set) => ({
    ...initialState,
    openModal: () => set({ isOpen: true }, false, 'ChangePasswordModal/openModal'),
    closeModal: () => set(initialState, false, 'ChangePasswordModal/closeModal'),
  }))
);
