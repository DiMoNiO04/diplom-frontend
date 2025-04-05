import { collectionsData } from '@/data';
import { EUrls } from '@/utils/urls';

import { TitleSectionBlock } from '../blocks';
import { CardCollection } from '../cards/';

const CARDS_PER_PAGE: number = 6;

export const CuratedCollections = () => {
  const initialCollections = collectionsData.slice(0, CARDS_PER_PAGE);

  return (
    <section className="mb-20">
      <div className="custom-container">
        <TitleSectionBlock title="Избранные коллекции" linkUrl={EUrls.COLLECTIONS} />
        <div className="grid grid-cols-3 gap-8">
          {initialCollections.map((card) => (
            <CardCollection key={card.slug} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};
