import { Metadata } from 'next';

import { getAboutPage } from '@/actions';
import {
  AboutMain,
  EmailNewsletter,
  Operating,
  ShareYourRecipe,
  SimpleRecipes,
  TalentTeam,
} from '@/components/sections';
import { createMetadata } from '@/utils/seo';

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getAboutPage();
  return createMetadata(seo);
}

export default async function AboutPage() {
  const { title, aboutMain, simpleRecipes, operating } = await getAboutPage();

  return (
    <>
      <AboutMain mainTitle={title} {...aboutMain} />
      <SimpleRecipes {...simpleRecipes} />
      <ShareYourRecipe />
      <TalentTeam />
      <Operating {...operating} />
      <EmailNewsletter />
    </>
  );
}
