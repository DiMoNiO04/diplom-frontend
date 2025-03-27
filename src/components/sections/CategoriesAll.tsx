import { categoriesData } from '@/data';

import { CardCategorie } from '../cards';

export const CategoriesAll = () => {
  return (
    <section className="mb-24 mt-16">
      <div className="custom-container">
        <h1 className="pb-8 mb-16 border-b border-gray-300 font-unbounded text-4xl">Категории</h1>
        <div className="grid grid-cols-5 gap-8">
          {categoriesData.map((card) => (
            <CardCategorie key={card.slug} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};
