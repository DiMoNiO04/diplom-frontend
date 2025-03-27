import { useState } from 'react';

import { ModalAuth } from '@/components/modals';
import { Button } from '@/components/ui';

export const HeaderUserProfile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  return (
    <>
      <div className="relative">
        <Button text="Войти" size="lg" onClick={onOpen} />
      </div>

      <ModalAuth isOpen={isOpen} onClose={onClose} />
    </>
  );
};
