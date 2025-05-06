import { cookies } from 'next/headers';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

import { protectedPaths } from '@/utils/consts';
import { EUrls } from '@/utils/urls';

import { UserProvider } from './UserProvider';

export const TokenProvider = async ({ children }: { children: React.ReactNode }) => {
  const token = (await cookies()).get('jwt')?.value;
  const currentPath = (await headers()).get('x-next-url') || '';

  const isProtectedRoute = protectedPaths.some((path) => currentPath.endsWith(path));

  if (!token && isProtectedRoute) {
    redirect(EUrls.HOME);
  }

  return <UserProvider token={token}>{children}</UserProvider>;
};
