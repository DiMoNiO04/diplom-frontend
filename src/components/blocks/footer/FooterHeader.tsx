import { Logo } from '../../ui';

export const FooterHeader = () => {
  return (
    <div className="flex flex-col gap-3 max-w-72">
      <Logo />
      <p className="italic text-grey text-sm">
        Найдите вдохновение для ваших кулинарных шедевров с нашими простыми и вкусными рецептами. Поделитесь любовью к
        готовке с нами!
      </p>
    </div>
  );
};
