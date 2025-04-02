'use client';

import { useMadeAgainModalStore } from '@/stores/madeAgainModal';

import { Button, Title } from '../ui';

export const AlreadyMade = () => {
  const { openModal } = useMadeAgainModalStore();

  return (
    <section className="mb-20">
      <div className="custom-container">
        <div className="border-b-8 border-orange pb-8 flex flex-col gap-y-8">
          <Title title="Сделали бы это снова?" type="h2" />
          <Button text="Поделитесь своим отзывом" className="w-fit" onClick={openModal} />
        </div>
      </div>
    </section>
  );
};
