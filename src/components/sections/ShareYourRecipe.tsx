import { getShareRecipeTemplate } from '@/actions/blocks';

import { ShareYourRecipeClient } from '../blocks';

export const ShareYourRecipe = async () => {
  const data = await getShareRecipeTemplate();
  return <ShareYourRecipeClient {...data} />;
};
