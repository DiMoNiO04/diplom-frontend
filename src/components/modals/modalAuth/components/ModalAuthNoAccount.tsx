import clsx from 'clsx';

import { EAuthContent } from '@/stores/authModal';
import { useAuthModalStore } from '@/stores/authModal/useAuthModalStore';

type TModalAuthNoAccount = 'login' | 'reg';

interface IModalAuthNoAccountProps {
  type: TModalAuthNoAccount;
}

export const ModalAuthNoAccount = ({ type }: IModalAuthNoAccountProps) => {
  const { setTabContent } = useAuthModalStore();

  const handleClickBtn = () => setTabContent(type === 'login' ? EAuthContent.LOGIN : EAuthContent.REG);

  return (
    <div className="font-onest text-sm text-black mt-8 flex items-center justify-center gap-x-1">
      {type === 'login' ? 'Еще нет аккаунта?' : 'Уже есть аккаунт?'}
      <button
        tabIndex={-1}
        onClick={handleClickBtn}
        type="button"
        className={clsx('text-sm text-orange', 'transition-all duration-300 hover:border-transparent hover:text-black')}
      >
        {type === 'login' ? 'Зарегистрироваться' : 'Войти'}
      </button>
    </div>
  );
};
