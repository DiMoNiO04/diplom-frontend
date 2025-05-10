import { apiGetUsersTeam } from '@/actions/user';
import { VISIBLE_TEAM_MEMBERS } from '@/utils/consts';

import { CardsItems } from '../blocks';
import { Title } from '../ui';

export const TalentTeam = async () => {
  const allUsers = await apiGetUsersTeam();
  const teamData = allUsers.filter((user) => user.blocked !== true).slice(0, VISIBLE_TEAM_MEMBERS);

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
