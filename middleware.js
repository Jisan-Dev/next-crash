import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

// const user = true;
// const coo = 'next-superhero123';

export const middleware = async (request) => {
  console.log('request from middleware => ', request.url);
  // if (request.nextUrl.pathname.startsWith('/about')) {
  //   return NextResponse.rewrite(new URL('/categories', request.url));
  // }

  // const cookies = request.cookies.get('token');
  // if (!cookies || cookies.value !== coo) return NextResponse.redirect(new URL('/login', request.url));
  const token = cookies(request).get('next-auth.session-token');
  console.log('token from middleware => ', token);
  if (!token) {
    return NextResponse.redirect(new URL('/api/auth/signin', request.url));
  }
  return NextResponse.next(); // if user available then go to desired private route

  // return NextResponse.redirect(new URL('/posts', request.url));
  // return NextResponse.rewrite(new URL('/posts', request.url));
};

export const config = {
  matcher: ['/dashboard/:path*'], // all related to dashboard
  // matcher: ['/user', '/about'],
  // matcher: '/user',
};
