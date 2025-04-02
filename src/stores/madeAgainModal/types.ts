type TMadeAgainModalState = {
  isOpen: boolean;
};

type TMadeAgainModalActions = {
  openModal: () => void;
  closeModal: () => void;
};

type TMadeAgainModalStore = TMadeAgainModalState & TMadeAgainModalActions;

export type { TMadeAgainModalActions, TMadeAgainModalState, TMadeAgainModalStore };
