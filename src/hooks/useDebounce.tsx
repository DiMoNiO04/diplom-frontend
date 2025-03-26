import { useEffect, useState } from 'react';

interface IUseDebounceProps {
  value: string;
  delay: number;
}

interface IUseDebounceReturn {
  debouncedValue: string;
}

export const useDebounce = ({ value, delay }: IUseDebounceProps): IUseDebounceReturn => {
  const [debouncedValue, setDebouncedValue] = useState<string>(value);

  useEffect(() => {
    const t = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(t);
    };
  }, [value, delay]);

  return { debouncedValue };
};
