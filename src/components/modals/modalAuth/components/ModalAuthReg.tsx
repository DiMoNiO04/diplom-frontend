import { FormReg } from '@/components/forms';
import { ModalTitle } from '@/components/ui';

import { ModalAuthNoAccount } from './ModalAuthNoAccount';

export const ModalAuthReg = () => {
  return (
    <div>
      <ModalTitle title="Регистрация" />
      <FormReg />
      <ModalAuthNoAccount type="reg" />
    </div>
  );
};
