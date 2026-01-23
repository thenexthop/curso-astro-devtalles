import { e as createComponent, f as createAstro, l as renderComponent, p as renderScript, q as renderSlot, r as renderTemplate, m as maybeRenderHead } from "../chunks/astro/server_fyYZyJDP.mjs";
import { $ as $$MainLayout } from "../chunks/MainLayout_JdVVY6m2.mjs";
import { renderers } from "../renderers.mjs";
const $$Astro$5 = createAstro();
const $$SignedInCSR = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SignedInCSR;
  const { class: className } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "clerk-signed-in", "clerk-signed-in", { "class": className, "hidden": true }, { "default": () => renderTemplate` ${renderSlot($$result, $$slots["default"])} ` })} ${renderScript($$result, "C:/Users/PC/Desktop/codigo2024/Astro/curso-devtalles/seccion-14/node_modules/.pnpm/@clerk+astro@2.16.13_astro@_88edabb51340e9d91a2266d259d458dc/node_modules/@clerk/astro/components/control/SignedInCSR.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/PC/Desktop/codigo2024/Astro/curso-devtalles/seccion-14/node_modules/.pnpm/@clerk+astro@2.16.13_astro@_88edabb51340e9d91a2266d259d458dc/node_modules/@clerk/astro/components/control/SignedInCSR.astro", void 0);
const $$Astro$4 = createAstro();
const $$SignedInSSR = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SignedInSSR;
  const { userId } = Astro2.locals.auth();
  return renderTemplate`${userId ? renderTemplate`${renderSlot($$result, $$slots["default"])}` : null}`;
}, "C:/Users/PC/Desktop/codigo2024/Astro/curso-devtalles/seccion-14/node_modules/.pnpm/@clerk+astro@2.16.13_astro@_88edabb51340e9d91a2266d259d458dc/node_modules/@clerk/astro/components/control/SignedInSSR.astro", void 0);
const configOutput = "static";
function isStaticOutput(forceStatic) {
  if (forceStatic !== void 0) {
    return forceStatic;
  }
  return configOutput === "static";
}
const $$Astro$3 = createAstro();
const $$SignedIn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SignedIn;
  const { isStatic, class: className } = Astro2.props;
  const SignedInComponent = isStaticOutput(isStatic) ? $$SignedInCSR : $$SignedInSSR;
  return renderTemplate`${renderComponent($$result, "SignedInComponent", SignedInComponent, { "class": className }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "C:/Users/PC/Desktop/codigo2024/Astro/curso-devtalles/seccion-14/node_modules/.pnpm/@clerk+astro@2.16.13_astro@_88edabb51340e9d91a2266d259d458dc/node_modules/@clerk/astro/components/control/SignedIn.astro", void 0);
const $$Astro$2 = createAstro();
const $$SignedOutCSR = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SignedOutCSR;
  const { class: className } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "clerk-signed-out", "clerk-signed-out", { "class": className, "hidden": true }, { "default": () => renderTemplate` ${renderSlot($$result, $$slots["default"])} ` })} ${renderScript($$result, "C:/Users/PC/Desktop/codigo2024/Astro/curso-devtalles/seccion-14/node_modules/.pnpm/@clerk+astro@2.16.13_astro@_88edabb51340e9d91a2266d259d458dc/node_modules/@clerk/astro/components/control/SignedOutCSR.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/PC/Desktop/codigo2024/Astro/curso-devtalles/seccion-14/node_modules/.pnpm/@clerk+astro@2.16.13_astro@_88edabb51340e9d91a2266d259d458dc/node_modules/@clerk/astro/components/control/SignedOutCSR.astro", void 0);
const $$Astro$1 = createAstro();
const $$SignedOutSSR = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SignedOutSSR;
  const { userId } = Astro2.locals.auth();
  return renderTemplate`${!userId ? renderTemplate`${renderSlot($$result, $$slots["default"])}` : null}`;
}, "C:/Users/PC/Desktop/codigo2024/Astro/curso-devtalles/seccion-14/node_modules/.pnpm/@clerk+astro@2.16.13_astro@_88edabb51340e9d91a2266d259d458dc/node_modules/@clerk/astro/components/control/SignedOutSSR.astro", void 0);
const $$Astro = createAstro();
const $$SignedOut = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SignedOut;
  const { isStatic, class: className } = Astro2.props;
  const SignedOutComponent = isStaticOutput(isStatic) ? $$SignedOutCSR : $$SignedOutSSR;
  return renderTemplate`${renderComponent($$result, "SignedOutComponent", SignedOutComponent, { "class": className }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "C:/Users/PC/Desktop/codigo2024/Astro/curso-devtalles/seccion-14/node_modules/.pnpm/@clerk+astro@2.16.13_astro@_88edabb51340e9d91a2266d259d458dc/node_modules/@clerk/astro/components/control/SignedOut.astro", void 0);
const prerender = false;
const $$Protected = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SignedOut", $$SignedOut, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<p class="text-xl text-red-500 text-center">
Esta página es solo para usuarios autenticados, por favor inicia
            sesión para continuar.
</p> ` })} ${renderComponent($$result2, "SignedIn", $$SignedIn, {}, { "default": ($$result3) => renderTemplate` <h2 class="text-2xl font-bold">Bienvenido a su página protegida!</h2> <p>Contenido exclusivo para usuarios autenticados.</p> ` })} ` })}`;
}, "C:/Users/PC/Desktop/codigo2024/Astro/curso-devtalles/seccion-14/src/pages/protected.astro", void 0);
const $$file = "C:/Users/PC/Desktop/codigo2024/Astro/curso-devtalles/seccion-14/src/pages/protected.astro";
const $$url = "/protected";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Protected,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
