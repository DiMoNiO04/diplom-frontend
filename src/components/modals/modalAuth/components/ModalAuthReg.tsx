import { FormReg } from '@/components/forms';

import { ModalAuthNoAccount } from './ModalAuthNoAccount';

export const ModalAuthReg = () => {
  return (
    <div>
      <div className="font-unbounded text-2xl mb-4">Регистрация</div>
      <FormReg />
      <ModalAuthNoAccount type="reg" />
    </div>
  );
};
