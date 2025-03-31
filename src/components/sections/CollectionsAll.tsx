import { collectionsData } from '@/data';

import { CollectionsCardsList, LoadMoreCollections } from '../blocks';

const RECIPES_PER_PAGE: number = 15;

export const CollectionsAll = () => {
  const initialCollections = collectionsData.slice(0, RECIPES_PER_PAGE);
  const remainingCollections = collectionsData.slice(RECIPES_PER_PAGE);

  return (
    <section className="mb-24 mt-16">
      <div className="custom-container">
        <h1 className="pb-8 mb-16 border-b border-gray-300 font-unbounded text-4xl">Коллекции</h1>
        <CollectionsCardsList cards={initialCollections} nothingMsg="Коллекций в данный момент нет" />
        <LoadMoreCollections remainingCollections={remainingCollections} perPage={RECIPES_PER_PAGE} />
      </div>
    </section>
  );
};
