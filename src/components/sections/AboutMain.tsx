import Image from 'next/image';

import { Title } from '../ui';

export const AboutMain = () => {
  return (
    <section className="my-24">
      <div className="custom-container">
        <Title title="О нас" className="pb-8 border-b border-gray-300 mb-16" />
        <div className="flex flex-col gap-y-10">
          <Title
            title="Мы — команда энтузиастов, объединённых любовью к кулинарии и гастрономическим открытиям."
            type="h2"
          />
          <Image src="/img/templates/about.webp" alt="" width={1440} height={590} priority />
          <div className="grid grid-cols-2 gap-x-10">
            <p className="text-greyLight">
              Готовить — это искусство, а еда — это не просто необходимость, а источник удовольствия. Мы
              экспериментируем с ингредиентами, ищем новые вкусовые сочетания и делимся лучшими рецептами с вами. От
              ароматных супов до изысканных десертов — здесь вы найдёте всё, что вдохновит вас на кулинарные шедевры.
            </p>
            <p className="text-greyLight">
              Присоединяйтесь к нашему сообществу гурманов, пробуйте новые рецепты и наслаждайтесь каждым приготовленным
              блюдом!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
