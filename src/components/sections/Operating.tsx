import { Title } from '../ui';

export const Operating = () => {
  return (
    <section className="mb-20">
      <div className="custom-container">
        <div className="flex flex-col gap-y-10 max-w-2xl">
          <Title title="Наши кухни в Минске, Москве и Берлине" type="h2" />
          <div className="flex flex-col gap-y-4">
            <p className="text-sm text-greyLight">
              Мы работаем в Минске, Москве и Берлине — городах с богатыми гастрономическими традициями. Вдохновляясь их
              культурой, мы создаем блюда, сочетающие классику и современные кулинарные тренды.
            </p>
            <p className="text-sm text-greyLight">
              В Минске мы придерживаемся традиционной восточноевропейской кухни, в Москве — экспериментируем с мировыми
              вкусами, а в Берлине сочетаем локальные продукты с глобальными трендами.
            </p>
            <p className="text-sm text-greyLight">
              Мы готовим не просто еду, а создаем атмосферу уюта и наслаждения вкусом. Присоединяйтесь к нашему
              гастрономическому путешествию!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
