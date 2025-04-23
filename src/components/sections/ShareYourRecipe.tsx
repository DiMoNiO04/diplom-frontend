import { apiGetShareRecipeTemplate } from '@/actions/blocks';

import { ShareYourRecipeClient } from '../blocks';

export const ShareYourRecipe = async () => {
  const data = await apiGetShareRecipeTemplate();
  return <ShareYourRecipeClient {...data} />;
};
