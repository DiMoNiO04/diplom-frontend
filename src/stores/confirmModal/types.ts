type TConfirmModalState = {
  isOpen: boolean;
  message: string;
  reverseButtons?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};

type TConfirmModalActions = {
  openModal: (message: string, onConfirm: () => void, onCancel: () => void, reverseButtons?: boolean) => void;
  closeModal: () => void;
};

type TConfirmModalStore = TConfirmModalState & TConfirmModalActions;

export type { TConfirmModalActions, TConfirmModalState, TConfirmModalStore };
