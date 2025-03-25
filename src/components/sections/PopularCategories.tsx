import { categoriesData } from '@/data';
import { EUrls } from '@/utils/urls';

import { TitleSectionBlock } from '../blocks';
import { CardCategorie } from '../cards';

export const PopularCategories = () => {
  return (
    <section className="mb-24">
      <div className="custom-container">
        <TitleSectionBlock title="Категории" linkTxt="Смотреть все" linkUrl={EUrls.CATEGORIES} />
        <div className="grid grid-cols-6 gap-8">
          {categoriesData.slice(0, 6).map((card) => (
            <CardCategorie key={card.name} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};
