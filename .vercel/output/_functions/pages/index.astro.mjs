import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate, l as renderComponent } from "../chunks/astro/server_fyYZyJDP.mjs";
import { a as actions } from "../chunks/virtual_SSdfeHhT.mjs";
import { $ as $$MainLayout } from "../chunks/MainLayout_JdVVY6m2.mjs";
import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { renderers } from "../renderers.mjs";
const ProductCard = ({ product }) => {
  const images = product.product_image.map((image) => {
    return image.image && image.image.startsWith("http") ? image.image : `${"http://localhost:4321"}/images/products/${image.image}`;
  });
  const [currentImage, setCurrentImage] = useState(images[0]);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("a", { href: `/products/${product.slug}`, children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center items-center gap-2 border-2 border-slate-200 rounded-lg shadow-md hover:shadow-lg transition-shadow", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        onMouseEnter: () => setCurrentImage(images[1] ?? images[0]),
        onMouseLeave: () => setCurrentImage(images[0]),
        src: currentImage,
        alt: product.title || "product image",
        className: "w-full h-auto object-cover rounded-t-md"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center gap-2 p-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold", children: product.title }),
      /* @__PURE__ */ jsxs("p", { className: "text-orange-800 font-semibold text-sm ml-auto", children: [
        "$ ",
        String(product.price)
      ] })
    ] })
  ] }) }) });
};
const ProductList = ({ products }) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center", children: products.map((product) => /* @__PURE__ */ jsx(ProductCard, { product }, product.id)) }) });
};
const $$Astro$1 = createAstro();
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { totalPages } = Astro2.props;
  const { searchParams, pathname } = Astro2.url;
  const page2 = Number(searchParams.get("page") ?? 1);
  const currentPage = Math.max(page2 > totalPages ? totalPages : page2, 1);
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center justify-between mt-8 mb-8"> <a${addAttribute(`${pathname}?page=${Math.max(1, currentPage - 1)}`, "href")} class="pagination__link">
Anteriores
</a> <p>${currentPage} de ${totalPages}</p> <a${addAttribute(`${pathname}?page=${Math.min(totalPages, currentPage + 1)}`, "href")} class="pagination__link">
Siguientes
</a> </div> <style>
    .pagination__link {
        background-color: #09f;
        color: white;
        padding: 0.5rem 1rem;
        text-decoration: none;
        border-radius: 4px;
    }
</style>`;
}, "C:/Users/PC/Desktop/codigo2024/Astro/curso-devtalles/seccion-14/src/components/shared/Pagination.astro", void 0);
const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { searchParams } = Astro2.url;
  const pageParam = Number(searchParams.get("page") ?? 1);
  const { data, error } = await Astro2.callAction(actions.getProductsByPage, {
    page: pageParam,
    limit: 12
  });
  if (error) {
    console.log(error);
    return;
  }
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Astro auth app" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="overflow-x-auto mt-4"> <h2 class="text-3xl text-slate-800 font-bold mb-4">
Lista de Productos
</h2> ${renderComponent($$result2, "ProductList", ProductList, { "products": data.products, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/products/ProductList", "client:component-export": "ProductList" })} </div> ${renderComponent($$result2, "Pagination", $$Pagination, { "totalPages": data.totalPages })} ` })}`;
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
