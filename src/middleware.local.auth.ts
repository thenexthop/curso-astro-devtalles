// Demostración de autenticación básica local
// Este middleware no va a funcionar por el nombre del archivo.
// Tampoco es seguro. Es solo para fines educativos

import type { MiddlewareNext } from "astro";
import { defineMiddleware } from "astro:middleware";

const protectedRoutes = ["/protected"];

export const onRequest = defineMiddleware(({ url, request }, next) => {

    const authHeaders = request.headers.get("authorization") ?? ""

    if (protectedRoutes.includes(url.pathname)) {

        return checkLocalAuth(authHeaders, next);

    }

    return next();
})

const checkLocalAuth = (authHeaders: string, next: MiddlewareNext) => {

    if (authHeaders) {

        const authValue = authHeaders.split(" ").at(-1) ?? "user:pass"
        const [user, pass] = atob(authValue).split(":")
        console.log("Usuario:", user);
        console.log("Contraseña:", pass);

        if (user === "admin" && pass === "admin123") {
            return next();
        }

    }

    return Response.json(
        { message: "Requiere autorización." },
        {
            status: 401,
            headers: {
                "Content-Type": "application/json",
                'WWW-Authenticate': 'Basic realm="Secure Area"'
            }
        }
    )
}