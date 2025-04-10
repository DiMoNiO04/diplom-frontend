type TNotificationState = {
  isShow: boolean;
  text: string;
  icon?: string;
};

type TNotificationActions = {
  showNotification: (text: string, icon?: string) => void;
};

type TNotificationStore = TNotificationState & TNotificationActions;

export type { TNotificationActions, TNotificationState, TNotificationStore };
