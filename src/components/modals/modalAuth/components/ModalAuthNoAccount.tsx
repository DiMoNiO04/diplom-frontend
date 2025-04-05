import { BtnText } from '@/components/ui/btns';
import { EAuthContent } from '@/stores/authModal';
import { useAuthModalStore } from '@/stores/authModal/useAuthModalStore';

type TModalAuthNoAccount = 'login' | 'reg';

interface IModalAuthNoAccountProps {
  type: TModalAuthNoAccount;
}

export const ModalAuthNoAccount = ({ type }: IModalAuthNoAccountProps) => {
  const { setTabContent } = useAuthModalStore();

  const handleClickBtn = () => setTabContent(type === 'login' ? EAuthContent.REG : EAuthContent.LOGIN);

  return (
    <div className="font-onest text-sm text-black mt-8 flex items-center justify-center gap-x-1">
      {type === 'login' ? 'Еще нет аккаунта?' : 'Уже есть аккаунт?'}
      <BtnText variant="orange" text={type === 'login' ? 'Зарегистрироваться' : 'Войти'} onClick={handleClickBtn} />
    </div>
  );
};
