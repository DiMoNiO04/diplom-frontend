import {
  AboutMain,
  EmailNewsletter,
  Operating,
  ShareYourRecipe,
  SimpleRecipes,
  TalentTeam,
} from '@/components/sections';

export default function AboutPage() {
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
