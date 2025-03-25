import { curatedCollectionsData } from '@/data/curatedCollections';
import { EUrls } from '@/utils/urls';

import { TitleSectionBlock } from '../blocks';
import { CardCuratedCollection } from '../cards/CardCuratedCollection';

export const CuratedCollections = () => {
  return (
    <section className="mb-24">
      <div className="custom-container">
        <TitleSectionBlock title="Избранные коллекции" linkUrl={EUrls.COLLECTIONS} />
        <div className="grid grid-cols-3 gap-8">
          {curatedCollectionsData.map((card) => (
            <CardCuratedCollection key={card.slug} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};
