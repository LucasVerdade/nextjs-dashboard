import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone()
  if (req.nextUrl.pathname !== "/login") {
    const hasAccessToken =  !(typeof req.cookies?.['access_token'] === "undefined");
    
    if (hasAccessToken)
    return NextResponse.next();
    
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }
}