import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { TNotificationState, TNotificationStore } from './types';

const NOTIFICATION_TIME: number = 3000;

const initialState: TNotificationState = {
  isShow: false,
  text: '',
  icon: '/icons/success.svg',
};

export const useNotificationStore = create<TNotificationStore>()(
  devtools((set) => ({
    ...initialState,
    showNotification: (text, icon) => {
      set({ isShow: true, text, icon }, false, 'Notification/showNotification');
      setTimeout(() => {
        set({ ...initialState }, false, 'Notification/hideNotification');
      }, NOTIFICATION_TIME);
    },
  }))
);
