import { auth } from "./auth";

const privateRoutes = ["/"];

export default auth(async (req) => {
  const isLoggedIn = !!req.auth;
  const { nextUrl } = req;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;

  const isPrivateRoute = privateRoutes.includes(nextUrl.pathname);
  const isAuthRoute = nextUrl.pathname.includes("/sign-in");
  const isApiRoute = nextUrl.pathname.includes("/api");

  if (isApiRoute) return;

  if (isLoggedIn && isAuthRoute) {
    return Response.redirect(`${baseUrl}`);
  }

  if (isAuthRoute && !isLoggedIn) return;

  if (!isLoggedIn && isPrivateRoute) {
    return Response.redirect(`${baseUrl}/sign-in`);
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
