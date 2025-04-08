import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { TUserState, TUserStore } from './types';

const initialState: TUserState = {
  isAuth: false,
};

export const useUserStore = create<TUserStore>()(
  devtools((set) => ({
    ...initialState,

    setUser: (user) => set(() => ({ ...user })),
    exitAccount: () => set(() => ({ isAuth: false })),
  }))
);
