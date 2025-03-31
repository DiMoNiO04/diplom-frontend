const EAuthContent = {
  LOGIN: 'login',
  REG: 'reg',
  PASSWORD_FORGOT: 'passwordForgot',
  PASSWORD_NEW: 'passwordNew',
  CLOSE: 'close',
  CHECK_EMAIL: 'checkEmail',
  CHANGE_PASSWORD: 'changePass',
  SUCCESS_REG: 'successReg',
} as const;

type EAuthContent = (typeof EAuthContent)[keyof typeof EAuthContent];

type TAuthModalState = {
  isOpen: boolean;
  tabContent: EAuthContent;
  email: string | null;
};

type TAuthModalActions = {
  openModal: (tab?: EAuthContent) => void;
  closeModal: () => void;
  setTabContent: (value: EAuthContent) => void;
  setEmail: (email: string) => void;
};

type TAuthModalStore = TAuthModalState & TAuthModalActions;

export { EAuthContent };
export type { TAuthModalActions, TAuthModalState, TAuthModalStore };
