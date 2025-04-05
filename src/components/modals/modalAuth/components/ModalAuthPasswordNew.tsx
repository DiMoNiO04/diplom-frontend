import { FormPasswordNew } from '@/components/forms';
import { ModalTitle } from '@/components/ui';

export const ModalAuthPasswordNew = () => {
  return (
    <div>
      <ModalTitle title="Новый пароль" />
      <FormPasswordNew />
    </div>
  );
};
