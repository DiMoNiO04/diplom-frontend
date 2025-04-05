import { FormPasswordForgot } from '@/components/forms';
import { ModalTitle } from '@/components/ui';
import { BtnNavigation } from '@/components/ui/btns';
import { EAuthContent, useAuthModalStore } from '@/stores/authModal';

export const ModalAuthPasswordForgot = () => {
  const { setTabContent } = useAuthModalStore();

  const handleClickBackBtn = () => setTabContent(EAuthContent.LOGIN);

  return (
    <div>
      <ModalTitle title="Восстановление пароля" />
      <BtnNavigation type={'button'} text={'Вернуться'} rotateArrow={true} onClick={handleClickBackBtn} />
      <FormPasswordForgot />
    </div>
  );
};
