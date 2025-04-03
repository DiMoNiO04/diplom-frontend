import { Button } from '@/components/ui';

export const ProfileNewsletter = () => {
  return (
    <div className="mb-16 pb-4 border-b border-greyLight">
      <h3 className="font-unbounded mb-4 text-lg font-medium">Подписка на рассылку</h3>
      <div className="flex items-center justify-between gap-x-4">
        <div>В настоящее время вы подписаны на нашу рассылку</div>
        <Button text="Отписаться" size="sm" />
      </div>
    </div>
  );
};
