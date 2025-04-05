import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { TNotificationState, TNotificationStore } from './types';

const NOTIFICATION_TIME = 2000;
let timeoutId: NodeJS.Timeout;

const initialState: TNotificationState = {
  isShow: false,
  text: '',
  icon: '',
};

export const useNotificationStore = create<TNotificationStore>()(
  devtools((set) => ({
    ...initialState,
    showNotification: (text, icon = '/icons/success.svg') => {
      clearTimeout(timeoutId);
      set({ isShow: true, text, icon }, false, 'Notification/showNotification');
      timeoutId = setTimeout(() => {
        set({ ...initialState }, false, 'Notification/hideNotification');
      }, NOTIFICATION_TIME);
    },
  }))
);
