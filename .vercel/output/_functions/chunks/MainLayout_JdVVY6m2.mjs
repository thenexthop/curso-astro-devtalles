import { e as createComponent, f as createAstro, m as maybeRenderHead, l as renderComponent, p as renderScript, r as renderTemplate, h as addAttribute, v as renderHead, q as renderSlot } from "./astro/server_fyYZyJDP.mjs";
import { jsxs, jsx } from "react/jsx-runtime";
/* empty css                         */
const CartCounter = () => {
  return /* @__PURE__ */ jsxs("a", { href: "/cart", className: "relative inline-block", children: [
    /* @__PURE__ */ jsx("span", { className: "absolute -top-2 -right-2 w-5 h-5 text-xs flex items-center justify-center rounded-full bg-blue-600 text-white ", children: "3" }),
    /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1.675em", height: "1.675em", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxs("g", { fill: "none", stroke: "#333", strokeWidth: 1.5, children: [
      /* @__PURE__ */ jsx("path", { strokeLinecap: "round", d: "m2 3l.265.088c1.32.44 1.98.66 2.357 1.184S5 5.492 5 6.883V9.5c0 2.828 0 4.243.879 5.121c.878.879 2.293.879 5.121.879h8" }),
      /* @__PURE__ */ jsx("path", { d: "M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z", opacity: 0.5 }),
      /* @__PURE__ */ jsx("path", { d: "M5 6h11.45c2.055 0 3.083 0 3.528.674c.444.675.04 1.619-.77 3.508l-.429 1c-.378.882-.567 1.322-.942 1.57c-.376.248-.856.248-1.815.248H5" })
    ] }) })
  ] });
};
const $$Astro$1 = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navbar;
  const isLoggedIn = !!Astro2.locals.session;
  return renderTemplate`<!-- component -->${maybeRenderHead()}<nav class="flex justify-between px-20 py-8 items-center bg-white fixed top-0 z-10 h-20 w-full shadow-sm"> <h1 class="text-2xl text-gray-800 font-extrabold"> <a href="/">
AstroAuth<span class="text-gray-600">Store</span> </a> </h1> <div class="flex items-center"> <ul class="flex items-center space-x-6"> <li> ${renderComponent($$result, "CartCounter", CartCounter, {})} </li> <li class="font-semibold text-gray-700"> <a href="/">Home</a> </li> ${isLoggedIn && renderTemplate`<li class="font-semibold text-gray-700"> <a href="/protected">Dashboard</a> </li>`} ${!isLoggedIn ? renderTemplate`<li class="font-semibold text-gray-700"> <a href="/login">Iniciar Sesión</a> </li>` : renderTemplate`<li id="logout" class="font-semibold text-gray-700"> <a href="#">Cerrar Sesión</a> </li>`} <li> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path d="M12 14l9-5-9-5-9 5 9 5z"></path> <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path> </svg> </li> <li> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path> </svg> </li> </ul> </div> </nav> ${renderScript($$result, "C:/Users/PC/Desktop/codigo2024/Astro/curso-devtalles/seccion-14/src/components/shared/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/PC/Desktop/codigo2024/Astro/curso-devtalles/seccion-14/src/components/shared/Navbar.astro", void 0);
const $$Astro = createAstro();
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title = "Astro Store Auth app" } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Navbar", $$Navbar, {})} <main class="container max-w-5xl bg-white rounded-md shadow mx-auto p-4 mt-24"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "C:/Users/PC/Desktop/codigo2024/Astro/curso-devtalles/seccion-14/src/layouts/MainLayout.astro", void 0);
export {
  $$MainLayout as $
};
