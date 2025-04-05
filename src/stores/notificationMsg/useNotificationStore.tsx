import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { TNotificationState, TNotificationStore } from './types';

const initialState: TNotificationState = {
  isShow: false,
  text: '',
  icon: '',
};

export const useNotificationStore = create<TNotificationStore>()(
  devtools((set) => ({
    ...initialState,
    showNotification: (text, icon) => set({ isShow: true, text, icon }, false, 'Notification/showNotification'),
    hideNotification: () => set({ ...initialState }, false, 'Notification/hideNotification'),
  }))
);
