import { collectionsData } from '@/data';
import { EUrls } from '@/utils/urls';

import { CardsItems, TitleSectionBlock } from '../blocks';

const CARDS_PER_PAGE: number = 6;

export const CuratedCollections = () => {
  const initialCollections = collectionsData.slice(0, CARDS_PER_PAGE);

  return (
    <section className="mb-20 max-lg:mb-16">
      <div className="custom-container">
        <TitleSectionBlock title="Избранные коллекции" linkUrl={EUrls.COLLECTIONS} />
        <CardsItems cards={initialCollections} type={'collection'} nothingMsg={''} hideOnMobileAfter={4} />
      </div>
    </section>
  );
};
