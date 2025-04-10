import { ITitleWithTexts } from '@/utils/interfaces';

import { TextDef, Title } from '../ui';

export const Operating = ({ title, texts }: ITitleWithTexts) => {
  return (
    <section className="mb-20 max-lg:mb-16">
      <div className="custom-container">
        <div className="flex flex-col gap-y-10 max-w-2xl max-lg:max-w-full max-lg:gap-y-8">
          <Title title={title} type="h2" />
          {texts.length > 0 && (
            <div className="flex flex-col gap-y-4 max-lg:gap-2">
              {texts.map(({ text }) => (
                <TextDef key={text} size="sm" title={text} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
