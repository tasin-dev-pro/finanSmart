import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes:['/']
});

export const config = {
    matcher: [
      "/((?!.+\\.[\\w]+$|_next).*)", // This excludes requests for static files and Next.js internal routes
      "/",
      "/(api|trpc)(.*)"
    ],
  };
