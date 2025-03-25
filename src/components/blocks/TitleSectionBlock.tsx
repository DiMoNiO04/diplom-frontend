import { ILink, ITitle } from '@/utils/interfaces';

import { LinkTitleSection, SecondTitle } from '../ui';

interface ITitleSectionBlocKProps extends Partial<ILink>, ITitle {}

export const TitleSectionBlock = ({ title, linkUrl, linkTxt }: ITitleSectionBlocKProps) => {
  return (
    <div className="flex justify-between items-center mb-10 gap-10">
      <SecondTitle title={title} />
      {linkTxt && linkUrl && <LinkTitleSection linkTxt={linkTxt} linkUrl={linkUrl} />}
    </div>
  );
};
