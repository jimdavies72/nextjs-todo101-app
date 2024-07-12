import { withMiddlewareAuthRequired } from "@auth0/nextjs-auth0/edge";
import { NextRequest, NextResponse } from "next/server";

export default function middleware() {
  console.log("hello world");
  withMiddlewareAuthRequired();
  const response = NextResponse.next();
  return response;
}

//export default withMiddlewareAuthRequired();

export const config = {
  matcher: ["/profile/:path*", "/tasks/:path*", "/test/:path*"],
};