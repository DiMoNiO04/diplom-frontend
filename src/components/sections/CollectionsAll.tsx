import { collectionsData } from '@/data';

import { CardCollection } from '../cards';

export const CollectionsAll = () => {
  return (
    <section className="mb-24 mt-16">
      <div className="custom-container">
        <h1 className="pb-8 mb-16 border-b border-gray-300 font-unbounded text-4xl">Коллекции</h1>
        <div className="grid grid-cols-3 gap-8">
          {collectionsData.map((card) => (
            <CardCollection key={card.slug} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};
