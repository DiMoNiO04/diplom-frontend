import { getPrivacyPolicyPage } from '@/actions';
import { PrivacyPolicyContent } from '@/components/sections';

export default async function PrivacyPolicyPage() {
  const data = await getPrivacyPolicyPage();

  return <PrivacyPolicyContent {...data} />;
}
