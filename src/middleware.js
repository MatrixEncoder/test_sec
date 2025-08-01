import { NextResponse } from "next/server";

export const config = {
  matcher: "/integrations/:path*",
};

export function middleware(request) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-createxyz-project-id", "c5e1087b-7aa3-4e1d-813c-adba2fcd8ea8");
  requestHeaders.set("x-createxyz-project-group-id", "41c515b7-242a-4a86-885f-37ec352baa52");


  request.nextUrl.href = `https://www.create.xyz/${request.nextUrl.pathname}`;

  return NextResponse.rewrite(request.nextUrl, {
    request: {
      headers: requestHeaders,
    },
  });
}