interface IUserInfo {
  id: string;
  username: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  patronymic: string | null;
}

type TUserState = {
  isAuth: boolean;
  user: IUserInfo | null;
};

type TUserActions = {
  setUser: (user: IUserInfo | null, isAuth: boolean) => void;
  exitAccount: () => void;
};

type TUserStore = TUserState & TUserActions;

export type { IUserInfo, TUserActions, TUserState, TUserStore };
