import { NextResponse } from 'next/server';
import { getProfileFromToken } from './lib/getProfileFromToken';

export async function middleware(req) {
  const { pathname } = req.nextUrl;
  if (pathname.startsWith('/auth') || pathname.startsWith('/api') || pathname.startsWith('/_next') || pathname.startsWith('/favicon.ico') ) {
    return NextResponse.next();
  }

  const accessToken = req.cookies.get('sb-access-token')?.value;
  if (!accessToken) {
    return NextResponse.redirect(new URL('/auth/signin', req.url));
  }

  try {
    const profile = await getProfileFromToken(accessToken);
    if (!profile) return NextResponse.redirect(new URL('/auth/signin', req.url));
    // admin route protection
    if (pathname.startsWith('/admin') && profile.role !== 'admin') {
      return NextResponse.redirect(new URL('/unauthorized', req.url));
    }
    return NextResponse.next();
  } catch (err) {
    return NextResponse.redirect(new URL('/auth/signin', req.url));
  }
}

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*', '/profile/:path*', '/templates/:path*']
};
