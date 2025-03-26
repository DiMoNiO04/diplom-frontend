import Link from 'next/link';

export const FooterCopyright = () => {
  return (
    <div className="flex items-center justify-between pt-6 border-t border-gray-300">
      <p className="text-xs">© 2025 YummyNom — Все права защищены</p>
      <div className="text-xs">
        Разработка и продвижение сайта —{' '}
        <Link
          href={'mailto:dima.razumov.04@gmail.com'}
          className="italic transition-colors duration-300 ease-out hover:text-orange"
        >
          dima.razumov.04@gmail.com
        </Link>
      </div>
    </div>
  );
};
