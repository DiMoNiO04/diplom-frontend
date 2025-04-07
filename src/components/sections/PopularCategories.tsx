import { categoriesData } from '@/data';
import { EUrls } from '@/utils/urls';

import { CardsItems, TitleSectionBlock } from '../blocks';

const PER_PAGE_CATEGORIES: number = 6;

export const PopularCategories = () => {
  const initialCategories = categoriesData.slice(0, PER_PAGE_CATEGORIES);

  return (
    <section className="mb-20 max-lg:mb-16">
      <div className="custom-container">
        <TitleSectionBlock title="Категории" linkUrl={EUrls.CATEGORIES} />
        <CardsItems type="categoryMain" cards={initialCategories} nothingMsg="Категорий нет!" />
      </div>
    </section>
  );
};
