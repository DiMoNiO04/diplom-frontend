import { API_EMAIL_NEWSLETTER_TEMPLATE, EMsgActions, REVALIDATE_DAY_TIME } from '../utils';

interface IEmailNewsletterTemplate {
  title: string;
  description: string;
  infoText: string;
}

async function apiGetEmailNewsletterTemplate(): Promise<IEmailNewsletterTemplate> {
  const res = await fetch(API_EMAIL_NEWSLETTER_TEMPLATE, {
    next: { revalidate: REVALIDATE_DAY_TIME },
  });

  if (!res.ok) {
    throw new Error(EMsgActions.FAILED_FETCH);
  }

  const data = await res.json();

  return data;
}

export { apiGetEmailNewsletterTemplate };
export type { IEmailNewsletterTemplate };
