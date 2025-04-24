import { FormLogin } from '@/components/forms';
import { ModalTitle } from '@/components/ui';

import { ModalAuthNoAccount } from './ModalAuthNoAccount';

export const ModalAuthLogin = () => {
  return (
    <div>
      <ModalTitle title="Вход" />
      <FormLogin />
      <ModalAuthNoAccount type="login" />
    </div>
  );
};
