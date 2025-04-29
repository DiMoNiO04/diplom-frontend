import { apiFetch } from '../api';
import { API_EMAIL_NEWSLETTER_TEMPLATE, REVALIDATE_DAY_TIME } from '../utils';

export interface IEmailNewsletterTemplate {
  title: string;
  description: string;
  infoText: string;
}

export const apiGetEmailNewsletterTemplate = (): Promise<IEmailNewsletterTemplate> =>
  apiFetch<IEmailNewsletterTemplate>(API_EMAIL_NEWSLETTER_TEMPLATE, {
    next: { revalidate: REVALIDATE_DAY_TIME },
  });
