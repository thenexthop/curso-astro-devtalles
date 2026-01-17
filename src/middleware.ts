import { defineMiddleware } from "astro:middleware";
import { firebase } from "./Firebase/config";

const protectedRoutes = ["/protected"];
const notSignedInRoutes = ["/login", "/register"];

export const onRequest = defineMiddleware(({ url, request, locals, redirect }, next) => {
    const user = firebase.auth.currentUser
    const isLoggedIn = !!user

    locals.isLoggedIn = isLoggedIn

    if (user) {
        locals.user = {
            uid: user.uid,
            email: user.email!,
            name: user.displayName ?? "No disponible",
            avatar: user.photoURL ?? "",
            emailVerified: user.emailVerified
        }
    }

    if (isLoggedIn && notSignedInRoutes.includes(url.pathname)) {
        return redirect("/");
    }

    if (!isLoggedIn && protectedRoutes.includes(url.pathname)) {
        return redirect("/login");
    }

    return next();
})