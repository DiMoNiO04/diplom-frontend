type TUser = {
  id: number;
  username: string;
  email: string;
  documentId?: string;
  firstName?: string | null;
  lastName?: string | null;
};

type TUserState = {
  isAuth: boolean;
  user: TUser | null;
};

type TUserActions = {
  setUser: (user: TUser) => void;
  setAuth: (isAuth: boolean) => void;
  exitAccount: () => void;
};

type TUserStore = TUserState & TUserActions;

export type { TUserActions, TUserState, TUserStore };
