import { Metadata } from 'next';

import { apiGetAboutPage } from '@/actions/pages';
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
  const { seo } = await apiGetAboutPage();
  return createMetadata(seo);
}

export default async function AboutPage() {
  const { title, aboutMain, simpleRecipes, operating } = await apiGetAboutPage();

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
