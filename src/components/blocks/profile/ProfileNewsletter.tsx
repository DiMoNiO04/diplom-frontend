import { Title } from '@/components/ui';
import { Button } from '@/components/ui/btns';
import { useConfirmModalStore } from '@/stores/confirmModal';
import { useNotificationStore } from '@/stores/notificationMsg';

export const ProfileNewsletter = () => {
  const { openModal } = useConfirmModalStore();
  const { showNotification } = useNotificationStore();

  const handleBtnYesUnsubscribe = () => showNotification('Вы отписались от рассылки!');

  const handleOpenModalUnsubscribe = () =>
    openModal('Вы уверены что хотите отписаться от еженедельной рассылки?', handleBtnYesUnsubscribe);

  return (
    <div className="mb-16 pb-4 border-b border-greyLight max-md:mb-12">
      <Title type="h3" title="Подписка на рассылку" />
      <div className="flex items-center justify-between gap-x-4">
        <div>В настоящее время вы подписаны на нашу рассылку</div>
        <Button text="Отписаться" size="sm" onClick={handleOpenModalUnsubscribe} />
      </div>
    </div>
  );
};
