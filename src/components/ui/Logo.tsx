import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href={'/'} className="w-32 flex-shrink-0">
      <img src="/logo.svg" alt="" />
    </Link>
  );
};
