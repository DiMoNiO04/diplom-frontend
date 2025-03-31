import { categoriesData } from '@/data';
import { EUrls } from '@/utils/urls';

import { TitleSectionBlock } from '../blocks';
import { CardsListCategories } from '../blocks/cardsList';

const PER_PAGE_CATEGORIES: number = 5;

export const PopularCategories = () => {
  const initialCategories = categoriesData.slice(0, PER_PAGE_CATEGORIES);

  return (
    <section className="mb-24">
      <div className="custom-container">
        <TitleSectionBlock title="Категории" linkUrl={EUrls.CATEGORIES} />
        <CardsListCategories cards={initialCategories} nothingMsg="Категорий нет" />
      </div>
    </section>
  );
};
