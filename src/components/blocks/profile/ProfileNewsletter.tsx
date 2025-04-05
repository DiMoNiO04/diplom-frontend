import { Title } from '@/components/ui';
import { Button } from '@/components/ui/btns';
import { useConfirmModalStore } from '@/stores/confirmModal';

export const ProfileNewsletter = () => {
  const { openModal } = useConfirmModalStore();

  const handleBtnYesUnsubscribe = () => alert('Вы отписались');
  const handleBtnNoUnsubscribe = () => alert('Вы не не отписались');
  const handleOpenModalUnsubscribe = () =>
    openModal(
      'Вы уверены что хотите отписаться от еженедельной рассылки?',
      handleBtnYesUnsubscribe,
      handleBtnNoUnsubscribe
    );

  return (
    <div className="mb-16 pb-4 border-b border-greyLight">
      <Title type="h3" title="Подписка на рассылку" />
      <div className="flex items-center justify-between gap-x-4">
        <div>В настоящее время вы подписаны на нашу рассылку</div>
        <Button text="Отписаться" size="sm" onClick={handleOpenModalUnsubscribe} />
      </div>
    </div>
  );
};
