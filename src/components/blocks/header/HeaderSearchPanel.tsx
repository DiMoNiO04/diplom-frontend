import clsx from 'clsx';
import { MouseEvent } from 'react';

import { CardSearchPanel } from '@/components/cards';
import { IconClose } from '@/components/icons';
import { NothingMsg } from '@/components/ui';
import { Button } from '@/components/ui/btns';
import { useSearch } from '@/hooks';
import { PER_VISIBLE_SEARCH_RECIPES } from '@/utils/consts';
import { IRecipe, IRecipesProps } from '@/utils/interfaces';
import { EUrls } from '@/utils/urls';

interface IHeaderSearchPanelProps extends IRecipesProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HeaderSearchPanel = ({ isOpen, onClose, recipes }: IHeaderSearchPanelProps) => {
  const { searchQuery, filteredData, handleSearchChange } = useSearch<IRecipe>({
    data: recipes,
    filterKey: 'title',
  });

  const visibleSearchResult: IRecipe[] = filteredData.slice(0, PER_VISIBLE_SEARCH_RECIPES);
  const hasSearchResult: boolean = filteredData.length > 0;
  const hasVisibleMoreBtn: boolean = hasSearchResult && filteredData.length > PER_VISIBLE_SEARCH_RECIPES;
  const linkUrl: string = searchQuery ? `${EUrls.SEARCH}?title=${searchQuery}` : `${EUrls.SEARCH}`;

  const handleViewAllClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onClose();
    window.location.href = linkUrl;
  };

  return (
    <div
      className={clsx(
        'fixed inset-0 z-50 bg-whiteDark shadow-customSlide transition-transform duration-300',
        isOpen ? 'translate-y-0' : '-translate-y-full'
      )}
    >
      <div className="custom-container h-full py-12 flex flex-col max-md:py-10">
        <div className="flex items-center justify-between border-b border-black pb-2 mb-8 max-md:mb-4">
          <input
            type="text"
            placeholder="Поиск рецепта по названию..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full font-unbounded placeholder:font-onest bg-transparent focus:outline-none"
          />
          <button type="button" onClick={onClose} className="size-6 group">
            <IconClose className="group-hover:stroke-greyLight transition-colors" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-hide">
          {hasSearchResult ? (
            <div className="grid grid-cols-2 gap-x-8 max-md:grid-cols-1" onClick={onClose}>
              {visibleSearchResult.map((card) => (
                <CardSearchPanel key={card.id} {...card} />
              ))}
            </div>
          ) : (
            <NothingMsg title="По данному запросу рецептов не найдено!" />
          )}
        </div>

        {hasVisibleMoreBtn && (
          <div className="mt-6 flex justify-center">
            <Button size="sm" text={`Посмотреть все ${filteredData.length} результата`} onClick={handleViewAllClick} />
          </div>
        )}
      </div>
    </div>
  );
};
