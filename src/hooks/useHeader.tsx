import { useEffect, useState } from 'react';

interface IUseHeaderReturn {
  isScrolled: boolean;
  isOpenBurger: boolean;
  handleBurgerToggle: () => void;
}

export const useHeader = (): IUseHeaderReturn => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isOpenBurger, setIsOpenBurger] = useState<boolean>(false);

  const handleBurgerToggle = () => setIsOpenBurger(!isOpenBurger);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { isScrolled, isOpenBurger, handleBurgerToggle };
};
