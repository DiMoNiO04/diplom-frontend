import { teamData } from '@/data';

import { CardTeam } from '../cards';
import { Title } from '../ui';

export const TalentTeam = () => {
  return (
    <section className="mb-20 max-lg:mb-16">
      <div className="custom-container">
        <div className="flex flex-col gap-y-10">
          <Title title="Невероятная команда талантливых поваров и гурманов" type="h2" />
          <div className="grid grid-cols-6 gap-8">
            {teamData.map((card) => (
              <CardTeam key={card.id} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
