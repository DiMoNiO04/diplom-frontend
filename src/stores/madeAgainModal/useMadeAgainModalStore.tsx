import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { TMadeAgainModalState, TMadeAgainModalStore } from './types';

const initialState: TMadeAgainModalState = {
  isOpen: false,
};

export const useMadeAgainModalStore = create<TMadeAgainModalStore>()(
  devtools((set) => ({
    ...initialState,
    openModal: () => set({ isOpen: true }, false, 'MadeAgainModal/openModal'),
    closeModal: () => set({ isOpen: false }, false, 'MadeAgainModal/closeModal'),
  }))
);
