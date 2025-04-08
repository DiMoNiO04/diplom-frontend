import clsx from 'clsx';
import { ChangeEvent, MouseEvent, useState } from 'react';

import { CardSearchPanel } from '@/components/cards';
import { IconClose } from '@/components/icons';
import { NothingMsg } from '@/components/ui';
import { Button } from '@/components/ui/btns';
import { recipesData } from '@/data';
import { useDebounce } from '@/hooks';
import { IRecipe } from '@/utils/interfaces';
import { EUrls } from '@/utils/urls';

interface IHeaderSearchPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const DELAY_DEBOUNCE: number = 300;
const PER_VISIBLE_RESULT: number = 16;

export const HeaderSearchPanel = ({ isOpen, onClose }: IHeaderSearchPanelProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const { debouncedValue } = useDebounce({ value: searchQuery, delay: DELAY_DEBOUNCE });

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => setSearchQuery(event.target.value);

  const visibleSearchResult: IRecipe[] = recipesData.slice(0, PER_VISIBLE_RESULT);
  const hasSearchResult: boolean = recipesData.length > 0;
  const hasVisibleMoreBtn: boolean = hasSearchResult && recipesData.length > visibleSearchResult.length;
  const linkUrl: string = debouncedValue ? `${EUrls.SEARCH}?query=${debouncedValue}` : `${EUrls.SEARCH}`;

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
      <div className="custom-container h-full py-12 flex flex-col">
        <div className="flex items-center justify-between border-b border-black pb-2 mb-8">
          <input
            type="text"
            placeholder="Поиск рецепта по названию..."
            value={searchQuery}
            onChange={handleSearchInputChange}
            className="w-full font-unbounded placeholder:font-onest bg-transparent focus:outline-none"
          />
          <button type="button" onClick={onClose} className="size-6 group">
            <IconClose className="group-lg:hover:stroke-greyLight transition-colors" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-hide">
          {hasSearchResult ? (
            <div className="grid grid-cols-2 gap-x-8">
              {visibleSearchResult.map((card) => (
                <CardSearchPanel key={card.id} {...card} />
              ))}
            </div>
          ) : (
            <NothingMsg title="По данному запросу рецептов не найдено" />
          )}
        </div>

        {hasVisibleMoreBtn && (
          <div className="mt-6 flex justify-center">
            <Button size="sm" text={`Посмотреть все ${recipesData.length} результата`} onClick={handleViewAllClick} />
          </div>
        )}
      </div>
    </div>
  );
};
