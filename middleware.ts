// Task 5 Update

export { auth as middleware } from "@/auth";

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|logo.png|about|$).*)",
  ],
};