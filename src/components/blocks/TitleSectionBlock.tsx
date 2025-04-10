import { ILink, ITitle } from '@/utils/interfaces';

import { LinkTitleSection, Title } from '../ui';

interface ITitleSectionBlocKProps extends Partial<ILink>, ITitle {}

export const TitleSectionBlock = ({ title, linkUrl, linkTxt = 'Смотреть все' }: ITitleSectionBlocKProps) => {
  return (
    <div
      className={`
        flex justify-between items-center mb-10 gap-10 
        max-lg:mb-8 max-sm:gap-2 max-sm:flex-col max-sm:items-start
      `}
    >
      <Title title={title} type="h2" />
      {linkTxt && linkUrl && <LinkTitleSection linkTxt={linkTxt} linkUrl={linkUrl} />}
    </div>
  );
};
