type TUserState = {
  isAuth: boolean;
};

type TUserActions = {
  setUser: (user: TUserState) => void;
  exitAccount: () => void;
};

type TUserStore = TUserState & TUserActions;

export type { TUserActions, TUserState, TUserStore };
