import { categoriesData } from '@/data';
import { EUrls } from '@/utils/urls';

import { CardsItems, TitleSectionBlock } from '../blocks';

const PER_PAGE_CATEGORIES: number = 5;

export const PopularCategories = () => {
  const initialCategories = categoriesData.slice(0, PER_PAGE_CATEGORIES);

  return (
    <section className="mb-20">
      <div className="custom-container">
        <TitleSectionBlock title="Категории" linkUrl={EUrls.CATEGORIES} />
        <CardsItems type="category" cards={initialCategories} nothingMsg="Категорий нет!" />
      </div>
    </section>
  );
};
