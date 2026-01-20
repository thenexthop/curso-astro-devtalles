import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from "../chunks/astro/server_CW7YkBu4.mjs";
import { $ as $$MainLayout } from "../chunks/MainLayout_DECaBmxX.mjs";
import { renderers } from "../renderers.mjs";
const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Astro auth app" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-3xl text-slate-800 font-bold">Astro auth app</h1> <code> <pre>${JSON.stringify({ temp: "TODO" }, null, 2)}</pre> <pre>${JSON.stringify({ temp: "TODO" }, null, 2)}</pre> </code> ` })}`;
}, "C:/Users/PC/Desktop/codigo2024/Astro/curso-devtalles/seccion-14/src/pages/index.astro", void 0);
const $$file = "C:/Users/PC/Desktop/codigo2024/Astro/curso-devtalles/seccion-14/src/pages/index.astro";
const $$url = "";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
