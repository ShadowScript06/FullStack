import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "change_this_secret";

// Middleware function
export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Skip public routes (login, register)
  if (pathname.startsWith("/auth") || pathname.startsWith("/api/auth")) {
    return NextResponse.next();
  }

  // Get token from cookie
  const token = req.cookies.get("token")?.value;

  if (!token) {
    // Redirect to login if no token
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  try {
    // Verify token
    const payload = jwt.verify(token, JWT_SECRET) as { userId: string; email: string };

    // Create a response clone so we can add headers
    const res = NextResponse.next();

    // Add userId header for downstream API routes
    res.headers.set("x-user-id", payload.userId);

    return res;
  } catch (err) {
    console.error("Invalid token:", err);
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }
}

// Apply middleware only to dashboard and endpoints
export const config = {
  matcher: ["/dashboard/:path*", "/api/endpoints/:path*"],
};