import { useEffect, useState } from 'react';

import { BREAKPOINT_MOB } from '@/utils/consts';

export const useIsMobile = (breakpoint = BREAKPOINT_MOB) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isMobile;
};
