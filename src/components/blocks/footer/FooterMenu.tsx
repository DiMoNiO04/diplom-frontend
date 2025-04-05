import Link from 'next/link';

import { menuFooterData } from '@/data';

export const FooterMenu = () => {
  return (
    <div className="flex flex-col gap-8">
      {menuFooterData.map(({ title, links }) => (
        <div key={title} className="flex flex-col gap-3">
          <div className="font-unbounded text-lg">{title}</div>
          <ul className="flex gap-8">
            {links.map((link) => (
              <li key={link.text} className="text-def text-grey transition-colors duration-300 hover:text-orange">
                <Link href={link.href}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
