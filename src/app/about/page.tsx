import {
  AboutMain,
  EmailNewsletter,
  Operating,
  ShareYourRecipe,
  SimpleRecipes,
  TalentTeam,
} from '@/components/sections';

export default function AboutPagePage() {
  return (
    <>
      <AboutMain />
      <SimpleRecipes />
      <ShareYourRecipe />
      <TalentTeam />
      <Operating />
      <EmailNewsletter />
    </>
  );
}
