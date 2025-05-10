import { Title } from '../ui';

interface IPrivacyPolicyProps {
  title: string;
  content: string;
}

export const PrivacyPolicyContent = ({ title, content }: IPrivacyPolicyProps) => {
  return (
    <section className="my-12 mb-20 max-lg:mb-16 max-lg:my-12">
      <div className="custom-container">
        <Title title={title} isBorder />
        <div className="privacy-content" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </section>
  );
};
