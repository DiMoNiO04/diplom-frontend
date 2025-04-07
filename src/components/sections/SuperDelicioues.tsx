import { superDeliciouesData } from '@/data';

import { CardsItems, TitleSectionBlock } from '../blocks';

export const SuperDelicioues = () => {
  return (
    <section className="mb-20 max-lg:mb-16">
      <div className="custom-container">
        <TitleSectionBlock title="Самые вкусные" />
        <CardsItems
          cards={superDeliciouesData}
          type={'superDelicious'}
          nothingMsg={'Рецептов нет!'}
          hideOnMobileAfter={4}
        />
      </div>
    </section>
  );
};
