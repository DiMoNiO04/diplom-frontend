import { Title } from '../ui';

interface IPrivacyPolicy {
  content: string;
}

const PrivacyPolicyContent = ({ content }: IPrivacyPolicy) => {
  return (
    <section className="my-24">
      <div className="custom-container">
        <Title title="Политика конфиденциальности" isBorder />
        <div className="privacy-content" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </section>
  );
};

export { PrivacyPolicyContent };
export type { IPrivacyPolicy };
