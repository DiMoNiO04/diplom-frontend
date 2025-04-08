import { teamData } from '@/data';

import { CardsItems } from '../blocks';
import { Title } from '../ui';

export const TalentTeam = () => {
  return (
    <section className="mb-20 max-lg:mb-16">
      <div className="custom-container">
        <div className="flex flex-col gap-y-10">
          <Title title="Невероятная команда талантливых поваров и гурманов" type="h2" />
          <CardsItems cards={teamData} type={'team'} nothingMsg={'Авторов нет!'} hideOnMobileAfter={6} />
        </div>
      </div>
    </section>
  );
};
