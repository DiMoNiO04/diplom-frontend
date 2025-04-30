import { MyRecipesContent } from '@/components/sections';
import { Breadcrumbs } from '@/components/ui';
import { breadcrumbsMyRecipesPage } from '@/utils/breadcrumbs';

export default function MyRecipesPage() {
  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbsMyRecipesPage} />
      <MyRecipesContent />;
    </>
  );
}
