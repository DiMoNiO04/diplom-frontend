import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

const protectedRoutes = ['/categories/'];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const cookie = (await cookies()).get('jwt')?.value;

  if (isProtectedRoute && !cookie) {
    console.log('Redirecting to /recipes because JWT is missing');
    return NextResponse.redirect(new URL('/recipes', req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.map$).*)'],
};
