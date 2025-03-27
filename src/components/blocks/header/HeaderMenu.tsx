import Link from 'next/link';

import { menuHeaderData } from '@/data';

export const HeaderMenu = () => {
  return (
    <nav>
      <ul className="flex items-center justify-center gap-12">
        {menuHeaderData.map((link) => (
          <li key={link.link} className="text-lg font-unbounded transition-colors duration-300 hover:text-orange">
            <Link href={link.link}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
