import { Metadata } from 'next';

import { getAboutPage, getEmailNewsletterTemplate, getShareRecipeTemplate } from '@/actions';
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
  const shareRecipeTemplate = await getShareRecipeTemplate();
  const emailNewsletterTemplate = await getEmailNewsletterTemplate();

  return (
    <>
      <AboutMain mainTitle={title} {...aboutMain} />
      <SimpleRecipes {...simpleRecipes} />
      <ShareYourRecipe {...shareRecipeTemplate} />
      <TalentTeam />
      <Operating {...operating} />
      <EmailNewsletter {...emailNewsletterTemplate} />
    </>
  );
}
