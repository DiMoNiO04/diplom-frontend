import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { IUserInfo, TUserState, TUserStore } from './types';

const initialState: TUserState = {
  isAuth: false,
  user: null,
};

export const useUserStore = create<TUserStore>()(
  devtools((set) => ({
    ...initialState,

    setUser: (user: IUserInfo | null, isAuth: boolean) => set({ isAuth, user }, false, 'User/setUser'),

    exitAccount: () => set({ ...initialState }, false, 'User/exitAccount'),
  }))
);
