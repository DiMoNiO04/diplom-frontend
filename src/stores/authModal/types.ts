const EAuthContent = {
  LOGIN: 'login',
  REG: 'reg',
  PASSWORD_REC: 'passwordRec',
  PASSWORD_NEW: 'passwordNew',
  CLOSE: 'close',
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
