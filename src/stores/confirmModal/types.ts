type TConfirmModalState = {
  isOpen: boolean;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  reverseButtons?: boolean;
};

type TConfirmModalActions = {
  openModal: (message: string, onConfirm: () => void, onCancel: () => void, reverseButtons?: boolean) => void;
  closeModal: () => void;
};

type TConfirmModalStore = TConfirmModalState & TConfirmModalActions;

export type { TConfirmModalActions, TConfirmModalState, TConfirmModalStore };
