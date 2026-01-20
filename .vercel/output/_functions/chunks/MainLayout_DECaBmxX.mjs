import { e as createComponent, f as createAstro, m as maybeRenderHead, l as renderScript, r as renderTemplate, h as addAttribute, o as renderHead, k as renderComponent, n as renderSlot } from "./astro/server_CW7YkBu4.mjs";
/* empty css                         */
const $$Astro$1 = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navbar;
  const isLoggedIn = !!Astro2.locals.session;
  return renderTemplate`<!-- component -->${maybeRenderHead()}<nav class="flex justify-between px-20 py-8 items-center bg-white"> <h1 class="text-2xl text-gray-800 font-extrabold">
Auth<span class="text-gray-600">App</span> </h1> <div class="flex items-center"> <ul class="flex items-center space-x-6"> <li class="font-semibold text-gray-700"> <a href="/">Home</a> </li> ${isLoggedIn && renderTemplate`<li class="font-semibold text-gray-700"> <a href="/protected">Dashboard</a> </li>`} ${!isLoggedIn ? renderTemplate`<li class="font-semibold text-gray-700"> <a href="/login">Iniciar Sesión</a> </li>` : renderTemplate`<li id="logout" class="font-semibold text-gray-700"> <a href="#">Cerrar Sesión</a> </li>`} <li> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path d="M12 14l9-5-9-5-9 5 9 5z"></path> <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path> </svg> </li> <li> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path> </svg> </li> </ul> </div> </nav> ${renderScript($$result, "C:/Users/PC/Desktop/codigo2024/Astro/curso-devtalles/seccion-14/src/components/shared/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/PC/Desktop/codigo2024/Astro/curso-devtalles/seccion-14/src/components/shared/Navbar.astro", void 0);
const $$Astro = createAstro();
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title = "Astro Auth app" } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="bg-gray-100"> ${renderComponent($$result, "Navbar", $$Navbar, {})} <main class="bg-white rounded-md shadow container mx-auto p-5 mt-10"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "C:/Users/PC/Desktop/codigo2024/Astro/curso-devtalles/seccion-14/src/layouts/MainLayout.astro", void 0);
export {
  $$MainLayout as $
};
