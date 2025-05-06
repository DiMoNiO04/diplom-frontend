import { apiGetUsersTeam } from '@/actions/user';

import { CardsItems } from '../blocks';
import { Title } from '../ui';

const COUNT_TEAM_MEMBER: number = 12;

export const TalentTeam = async () => {
  const allUsers = await apiGetUsersTeam();
  const teamData = allUsers.filter((user) => user.blocked !== true).slice(0, COUNT_TEAM_MEMBER);

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
