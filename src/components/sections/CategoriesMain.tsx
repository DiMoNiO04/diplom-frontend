import { apiGetCategories } from '@/actions/categories';
import { PER_VISIBLE_PAGE_CATEGORIES } from '@/utils/consts';
import { EUrls } from '@/utils/urls';

import { CardsItems, TitleSectionBlock } from '../blocks';

export const CategoriesMain = async () => {
  const { results } = await apiGetCategories();

  const initialCategories = results.slice(0, PER_VISIBLE_PAGE_CATEGORIES);

  return (
    <section className="mb-20 max-lg:mb-16">
      <div className="custom-container">
        <TitleSectionBlock title="Категории" linkUrl={EUrls.CATEGORIES} />
        <CardsItems type="categoryMain" cards={initialCategories} nothingMsg="Категорий нет!" />
      </div>
    </section>
  );
};
