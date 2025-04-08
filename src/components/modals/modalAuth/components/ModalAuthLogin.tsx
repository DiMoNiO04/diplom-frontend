import { FormLogin } from '@/components/forms';
import { IconFacebook, IconGoogle } from '@/components/icons';
import { ModalTitle } from '@/components/ui';
import { Button } from '@/components/ui/btns';

import { ModalAuthNoAccount } from './ModalAuthNoAccount';

export const ModalAuthLogin = () => {
  return (
    <div>
      <ModalTitle title="Вход" />
      <FormLogin />
      <div className="flex flex-col gap-y-2 mt-8">
        <div className="text-def font-medium">Войти через</div>
        <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1 max-sm:gap-2">
          <Button text="Facebook" size="sm" icon={<IconFacebook />} />
          <Button text="Google" size="sm" icon={<IconGoogle />} />
        </div>
      </div>
      <ModalAuthNoAccount type="login" />
    </div>
  );
};
