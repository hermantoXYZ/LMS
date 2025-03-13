import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  return NextResponse.next();
}

// Skip auth routes from middleware to avoid Edge runtime issues
export const config = {
  matcher: ["/((?!api/auth).*)"],
};