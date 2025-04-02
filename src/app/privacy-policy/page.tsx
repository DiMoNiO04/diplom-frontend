import { PrivacyPolicyContent } from '@/components/sections';
import { IPrivacyPolicy } from '@/components/sections/PrivacyPolicyContent';
import { mockPrivacyPolicyPage } from '@/data';

async function getPrivacyPolicyPage(): Promise<IPrivacyPolicy> {
  return mockPrivacyPolicyPage;
}

export default async function PrivacyPolicyPage() {
  const { content } = await getPrivacyPolicyPage();

  return (
    <>
      <PrivacyPolicyContent content={content} />
    </>
  );
}
