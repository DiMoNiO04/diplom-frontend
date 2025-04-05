import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href={'/'} className="w-36">
      <img src="/logo.svg" alt="" />
    </Link>
  );
};
