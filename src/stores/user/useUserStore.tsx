import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { TUserState, TUserStore } from './types';

const initialState: TUserState = {
  isAuth: false,
  user: null,
};

export const useUserStore = create<TUserStore>()(
  devtools((set) => ({
    ...initialState,

    setUser: (user) =>
      set(
        () => ({
          isAuth: true,
          user,
        }),
        false,
        'User/setUser'
      ),

    setAuth: () => set(() => ({ isAuth: true }), false, 'User/setAuth'),

    exitAccount: () => set(() => ({ ...initialState }), false, 'User/exitAccount'),
  }))
);
