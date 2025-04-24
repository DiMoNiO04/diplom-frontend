import { apiGetCollections } from '@/actions/collections';
import { EUrls } from '@/utils/urls';

import { CardsItems, TitleSectionBlock } from '../blocks';

const CARDS_PER_PAGE: number = 6;

export const CuratedCollections = async () => {
  const { results: cards } = await apiGetCollections();
  const initialCollections = cards.slice(0, CARDS_PER_PAGE);

  return (
    <section className="mb-20 max-lg:mb-16">
      <div className="custom-container">
        <TitleSectionBlock title="Избранные коллекции" linkUrl={EUrls.COLLECTIONS} />
        <CardsItems cards={initialCollections} type={'collection'} nothingMsg={''} hideOnMobileAfter={4} />
      </div>
    </section>
  );
};
