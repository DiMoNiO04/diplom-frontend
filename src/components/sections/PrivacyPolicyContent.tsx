import { Title } from '../ui';

interface IPrivacyPolicy {
  title: string;
  content: string;
}

const PrivacyPolicyContent = ({ title, content }: IPrivacyPolicy) => {
  return (
    <section className="my-20 max-lg:my-16">
      <div className="custom-container">
        <Title title={title} isBorder />
        <div className="privacy-content" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </section>
  );
};

export { PrivacyPolicyContent };
export type { IPrivacyPolicy };
