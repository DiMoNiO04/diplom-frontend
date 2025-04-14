import { Title } from '../ui';

interface IPrivacyPolicyProps {
  title: string;
  content: string;
}

export const PrivacyPolicyContent = ({ title, content }: IPrivacyPolicyProps) => {
  return (
    <section className="my-20 max-lg:my-16">
      <div className="custom-container">
        <Title title={title} isBorder />
        <div className="privacy-content" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </section>
  );
};
