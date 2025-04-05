import { RefObject, useEffect } from 'react';

interface IClickOutsideProps {
  refs: RefObject<HTMLElement>[];
  callback?: () => void;
}

export const useClickOutside = ({ refs, callback }: IClickOutsideProps) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const isClickInside = refs.some((ref) => ref.current && ref.current.contains(event.target as Node));

      if (!isClickInside && callback) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [refs, callback]);
};
