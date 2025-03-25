import { EUrls } from '@/utils/urls';

import { TitleSectionBlock } from '../blocks';

export const PopularCategories = () => {
  return (
    <section>
      <div className="custom-container">
        <TitleSectionBlock title="Категории" linkTxt="Смотреть все" linkUrl={EUrls.CATEGORIES} />
      </div>
    </section>
  );
};
