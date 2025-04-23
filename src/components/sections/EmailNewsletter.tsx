import { apiGetEmailNewsletterTemplate } from '@/actions/blocks';

import { EmailNewsletterClient } from '../blocks';

export const EmailNewsletter = async () => {
  const data = await apiGetEmailNewsletterTemplate();

  return <EmailNewsletterClient {...data} />;
};
