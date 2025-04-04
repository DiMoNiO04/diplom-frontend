import { FormPasswordForgot } from '@/components/forms';
import { BtnNavigation } from '@/components/ui/btns';
import { EAuthContent, useAuthModalStore } from '@/stores/authModal';

export const ModalAuthPasswordForgot = () => {
  const { setTabContent } = useAuthModalStore();

  const handleClickBackBtn = () => setTabContent(EAuthContent.LOGIN);

  return (
    <div>
      <div className="font-unbounded text-2xl mb-4">Восстановление пароля</div>
      <BtnNavigation type={'button'} text={'Вернуться'} rotateArrow={true} onClick={handleClickBackBtn} />
      <FormPasswordForgot />
    </div>
  );
};
