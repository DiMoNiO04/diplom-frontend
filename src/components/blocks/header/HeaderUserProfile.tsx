import { Button } from '@/components/ui';
import { useAuthModalStore } from '@/stores/authModal';

export const HeaderUserProfile = () => {
  const { openModal } = useAuthModalStore();

  const onOpen = () => openModal('login');

  return (
    <div className="relative">
      <Button text="Войти" size="lg" onClick={onOpen} />
    </div>
  );
};
