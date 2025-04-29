import { getFailedMsg } from '@/utils/functions';

import { apiPost } from '../api';
import { API_REGISTER_USER, EMsgActions } from '../utils';

interface IFormRegDataApi {
  username: string;
  email: string;
  password: string;
}

export const apiRegisterUser = (data: IFormRegDataApi) =>
  apiPost<IFormRegDataApi>(API_REGISTER_USER, data).then((result) => {
    if (!result.isSuccess) {
      const message: string = getFailedMsg(result?.message);
      return { isSuccess: false, message };
    }

    return {
      isSuccess: true,
      message: EMsgActions.SUCCESS_REG,
    };
  });
