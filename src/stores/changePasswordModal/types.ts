type TChangePasswordModalState = {
  isOpen: boolean;
};

type TChangePasswordModalActions = {
  openModal: () => void;
  closeModal: () => void;
};

type TChangePasswordModalStore = TChangePasswordModalState & TChangePasswordModalActions;

export type { TChangePasswordModalActions, TChangePasswordModalState, TChangePasswordModalStore };
