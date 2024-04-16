import { authMiddleware } from '@clerk/nextjs'
import { redirect } from 'next/navigation';

// export default authMiddleware({
//   publicRoutes: ['/', '/api/getAuthenticatedUserId'],
// })
export default authMiddleware({
  publicRoutes: ['/', '/pricing', '/home', '/api/getAuthenticatedUserId', '/api/webhooks/stripe', '/api/github-oauth', '/api/github-ids', '/api/data/events', '/sign-in'],
  afterAuth(auth, req, evt) {
    // Handle users who aren't authenticated
    // if (!auth.userId && !auth.isPublicRoute) {
    //   return redirect("/sign-in");
    // }

    // if (auth.userId && auth.isPublicRoute) {
    //   return redirect("/sign-in");
    // }
  },

  // if (!auth.userId && !auth.isPublicRoute) {
  //     return redirectToSignIn({ returnBackUrl: req.url });
  //   }

});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}



