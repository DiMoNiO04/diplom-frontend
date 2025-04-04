import { FormLogin } from '@/components/forms';
import { IconFacebook, IconGoogle } from '@/components/icons';
import { Button } from '@/components/ui/btns';

import { ModalAuthNoAccount } from './ModalAuthNoAccount';

export const ModalAuthLogin = () => {
  return (
    <div>
      <div className="font-unbounded text-2xl mb-4">Вход</div>
      <FormLogin />
      <div className="flex flex-col gap-y-2 mt-8">
        <div className="text-def font-medium">Войти через</div>
        <div className="grid grid-cols-2 gap-x-4">
          <Button text="Facebook" size="sm" icon={<IconFacebook />} />
          <Button text="Google" size="sm" icon={<IconGoogle />} />
        </div>
      </div>
      <ModalAuthNoAccount type="login" />
    </div>
  );
};
