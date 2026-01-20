import { clerkMiddleware, createRouteMatcher } from '@clerk/astro/server';

const isProtectedRoute = createRouteMatcher([
    '/dashboard(.*)',
    '/protected(.*)',
]);

export const onRequest = clerkMiddleware((auth, context) => {
    if (!auth().userId && isProtectedRoute(context.request)) {
        return auth().redirectToSignIn();
    }
});