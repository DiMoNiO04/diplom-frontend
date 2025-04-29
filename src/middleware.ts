import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { protectedPaths } from './utils/consts';
import { EUrls } from './utils/urls';

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedPaths.some((protectedPath) => path.startsWith(protectedPath));

  const jwtToken = (await cookies()).get('jwt')?.value;

  if (isProtectedRoute && !jwtToken) {
    return NextResponse.redirect(new URL(EUrls.HOME, req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.map$).*)'],
};
