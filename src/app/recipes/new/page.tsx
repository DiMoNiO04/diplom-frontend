import { NewRecipe } from '@/components/sections';
import { Breadcrumbs } from '@/components/ui';
import { breadcrumbsNewRecipePage } from '@/utils/breadcrumbs';

export default function NewRecipePage() {
  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbsNewRecipePage} />
      <NewRecipe />;
    </>
  );
}
