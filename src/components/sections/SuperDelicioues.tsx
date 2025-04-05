import { superDeliciouesData } from '@/data';

import { TitleSectionBlock } from '../blocks';
import { CardSuperdelicious } from '../cards';

export const SuperDelicioues = () => {
  return (
    <section className="mb-20">
      <div className="custom-container">
        <TitleSectionBlock title="Самые вкусные" />
        <div className="grid grid-cols-3 gap-8">
          {superDeliciouesData.map((card) => (
            <CardSuperdelicious key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};
