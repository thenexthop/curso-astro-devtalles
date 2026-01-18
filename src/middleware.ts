import { defineMiddleware } from "astro:middleware";
import { auth } from "@/lib/auth";

const protectedRoutes = ["/protected"];
const notSignedInRoutes = ["/login", "/register"];

export const onRequest = defineMiddleware(async ({ url, request, locals, redirect }, next) => {

    const isAuthed = await auth.api
        .getSession({
            headers: request.headers,
        })
    if (isAuthed) {
        locals.user = isAuthed.user;
        locals.session = isAuthed.session;
    } else {
        locals.user = null;
        locals.session = null;
    }

    if (!isAuthed && protectedRoutes.includes(url.pathname)) {
        return redirect("/login");
    }

    if (isAuthed && notSignedInRoutes.includes(url.pathname)) {
        return redirect("/");
    }

    return next();
})