import Image from 'next/image';

import { TextDef, Title } from '../ui';

export const AboutMain = () => {
  return (
    <section className="mb-20 max-lg:my-16">
      <div className="custom-container">
        <Title title="О нас" isBorder />
        <div className="flex flex-col gap-y-10">
          <Title
            title="Мы — команда энтузиастов, объединённых любовью к кулинарии и гастрономическим открытиям."
            type="h2"
          />
          <Image
            src="/img/templates/about.webp"
            alt="О нас"
            width={1440}
            height={590}
            priority
            className="w-full h-auto object-cover"
          />
          <div className="grid grid-cols-2 gap-x-10">
            <TextDef
              title="
              Готовить — это искусство, а еда — это не просто необходимость, а источник удовольствия. 
              Мы экспериментируем с ингредиентами, ищем новые вкусовые сочетания и делимся лучшими рецептами 
              с вами. От ароматных супов до изысканных десертов — здесь вы найдёте всё, что вдохновит 
              вас на кулинарные шедевры.
            "
            />
            <TextDef
              title="
              Присоединяйтесь к нашему сообществу гурманов, пробуйте новые рецепты и наслаждайтесь 
              каждым приготовленным блюдом!
            "
            />
          </div>
        </div>
      </div>
    </section>
  );
};
