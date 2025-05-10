import { apiGetCollections } from '@/actions/collections';
import { PER_VISIBLE_CURRATED_COLLECTION } from '@/utils/consts';
import { EUrls } from '@/utils/urls';

import { CardsItems, TitleSectionBlock } from '../blocks';

export const CuratedCollections = async () => {
  const { results: cards } = await apiGetCollections();
  const initialCollections = cards.slice(0, PER_VISIBLE_CURRATED_COLLECTION);

  return (
    <section className="mb-20 max-lg:mb-16">
      <div className="custom-container">
        <TitleSectionBlock title="Избранные коллекции" linkUrl={EUrls.COLLECTIONS} />
        <CardsItems cards={initialCollections} type={'collection'} nothingMsg={''} hideOnMobileAfter={4} />
      </div>
    </section>
  );
};
