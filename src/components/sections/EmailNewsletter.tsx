import { getEmailNewsletterTemplate } from '@/actions/blocks';

import { EmailNewsletterClient } from '../blocks';

export const EmailNewsletter = async () => {
  const data = await getEmailNewsletterTemplate();

  return <EmailNewsletterClient {...data} />;
};
