'use client';

import { sortRecipes } from '@/data';
import { ICategory, ISelectOption } from '@/utils/interfaces';

import { Select } from '../ui/selects/Select';

export const CategoryContent = ({ recipes, description, name }: Omit<ICategory, 'slug' | 'fullImage'>) => {
  const hasRecipes: boolean = recipes.length > 0;

  const onChangeSelect = (value: ISelectOption) => alert(`Выбрана сортировка ${value.value}`);

  return (
    <section>
      <div className="custom-container">
        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-y-2 max-w-2xl">
            <div className="flex items-end gap-x-4">
              <h1 className="font-unbounded text-4xl">{name}</h1>
              {hasRecipes && <div className="font-onest italic text-sm">{recipes.length} рецепта(-ов)</div>}
            </div>
            {description && <p className="text-lg text-greyLight">{description}</p>}
          </div>
          <Select onChange={onChangeSelect} value={sortRecipes[0]} options={sortRecipes} className="w-52" />
        </div>
      </div>
    </section>
  );
};
