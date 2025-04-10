import { API_EMAIL_NEWSLETTER_TEMPLATE, REVALIDATE_DAY_TIME } from './consts';

interface IEmailNewsletterTemplate {
  title: string;
  description: string;
  infoText: string;
}

async function getEmailNewsletterTemplate(): Promise<IEmailNewsletterTemplate> {
  const res = await fetch(API_EMAIL_NEWSLETTER_TEMPLATE, {
    next: { revalidate: REVALIDATE_DAY_TIME },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch Email Newsletter Template');
  }

  const data = await res.json();

  return data;
}

export { getEmailNewsletterTemplate };
export type { IEmailNewsletterTemplate };
