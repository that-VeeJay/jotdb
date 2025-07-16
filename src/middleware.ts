import { auth } from "./lib/auth";
import { PRIVATE_ROUTES, AUTH_ROUTES, BASE_URL } from "./lib/constants";

export default auth((req) => {
  const { nextUrl } = req;
  const pathname = nextUrl.pathname;

  const isLoggedIn = !!req.auth;
  const isPrivateRoute = PRIVATE_ROUTES.includes(pathname);
  const isAuthRoute = AUTH_ROUTES.some((route) => pathname.startsWith(route));
  const isApiRoute = pathname.includes("/api");

  // Skip middleware for API routes
  if (isApiRoute) return;

  // Redirect logged-in users away from sign-in/up pages
  if (isLoggedIn && isAuthRoute) return Response.redirect(`${BASE_URL}/`);

  // Allow access to sign-in/up if not logged in
  if (isAuthRoute && !isLoggedIn) return;

  // Redirect unauthenticated users away from private routes
  if (!isLoggedIn && isPrivateRoute)
    return Response.redirect(`${BASE_URL}/sign-in`);
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
