import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { EAuthContent, TAuthModalState, TAuthModalStore } from './types';

const initialState: TAuthModalState = {
  isOpen: false,
  tabContent: 'login',
  email: null,
};

export const useAuthModalStore = create<TAuthModalStore>()(
  devtools((set) => ({
    ...initialState,
    openModal: (tab = EAuthContent.LOGIN) => set({ isOpen: true, tabContent: tab }, false, 'AuthModal/openModal'),
    closeModal: () => set({ isOpen: false }, false, 'AuthModal/closeModal'),
    setTabContent: (tabContent: EAuthContent) => set({ tabContent }, false, 'AuthModal/setTabContent'),
    setEmail: (email: string | null) => set({ email }, false, 'AuthModal/setEmail'),
  }))
);
