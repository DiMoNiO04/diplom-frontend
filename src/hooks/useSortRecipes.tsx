import { useState } from 'react';

import { ESortRecipes } from '@/data';
import { IRecipe, ISelectOption } from '@/utils/interfaces';

export const useSortRecipes = (recipes: IRecipe[], initialOption: ISelectOption) => {
  const [selectedSortOption, setSelectedSortOption] = useState<ISelectOption>(initialOption);

  const sortRecipesHandler = (recipes: IRecipe[], option: ISelectOption) => {
    switch (option.value) {
      case ESortRecipes.NEWEST:
        return recipes.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      case ESortRecipes.OLDEST:
        return recipes.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
      case ESortRecipes.ALPHABETICAL_A_Z:
        return recipes.sort((a, b) => a.title.localeCompare(b.title));
      case ESortRecipes.ALPHABETICAL_Z_A:
        return recipes.sort((a, b) => b.title.localeCompare(a.title));
      case ESortRecipes.COOKING_TIME_MIN:
        return recipes.sort((a, b) => a.cookingTime - b.cookingTime);
      case ESortRecipes.COOKING_TIME_MAX:
        return recipes.sort((a, b) => b.cookingTime - a.cookingTime);
      case ESortRecipes.CALORIES_MIN:
        return recipes.sort((a, b) => a.calories - b.calories);
      case ESortRecipes.CALORIES_MAX:
        return recipes.sort((a, b) => b.calories - a.calories);
      default:
        return recipes;
    }
  };

  const sortedRecipes = sortRecipesHandler([...recipes], selectedSortOption);

  const onChangeSelect = (value: ISelectOption) => setSelectedSortOption(value);

  return { sortedRecipes, selectedSortOption, onChangeSelect };
};
