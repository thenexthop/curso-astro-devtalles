import { e as createComponent, f as createAstro, m as maybeRenderHead, p as renderScript, h as addAttribute, r as renderTemplate, l as renderComponent } from "../../chunks/astro/server_fyYZyJDP.mjs";
import { a as actions } from "../../chunks/virtual_SSdfeHhT.mjs";
import { $ as $$MainLayout } from "../../chunks/MainLayout_JdVVY6m2.mjs";
/* empty css                                     */
import { renderers } from "../../renderers.mjs";
const $$Astro$1 = createAstro();
const $$ProductSlideShow = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProductSlideShow;
  const { images } = Astro2.props;
  const fullImages = images.map((image) => {
    return image.startsWith("http") ? image : `${"http://localhost:4321"}/images/products/${image}`;
  });
  return renderTemplate`<!-- Slider main container -->${maybeRenderHead()}<div class="swiper mt-10 col-span-1 sm:col-span-2"> <!-- Additional required wrapper --> <div class="swiper-wrapper"> <!-- Slides --> ${fullImages.map((image) => renderTemplate`<div class="swiper-slide"> <img${addAttribute(image, "src")} alt="Imagen del producto" class="w-full h-full object-contain px-4"> </div>`)} </div> <!-- If we need pagination --> <div class="swiper-pagination"></div> </div> <style>
    .swiper {
        width: 100%;
        height: 500px;
    }
</style> ${renderScript($$result, "C:/Users/PC/Desktop/codigo2024/Astro/curso-devtalles/seccion-14/src/components/products/ProductSlideShow.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/PC/Desktop/codigo2024/Astro/curso-devtalles/seccion-14/src/components/products/ProductSlideShow.astro", void 0);
const $$Astro = createAstro();
const prerender = false;
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  const { data: product, error } = await Astro2.callAction(
    actions.getProductBySlug,
    slug ?? ""
  );
  if (error) {
    console.log(error);
    return Astro2.redirect("/404");
  }
  const images = product.product_image.map((image) => image.image ?? "");
  return renderTemplate`<!-- description={product.description || ""}
image={images[0] || ""} -->${renderComponent($$result, "MainLayout", $$MainLayout, { "title": product.title ?? "" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-3 w-full gap-4"> ${renderComponent($$result2, "ProductSlideShow", $$ProductSlideShow, { "images": images })} <section> <h2 class="text-2xl font-bold">${product.title}</h2> <h2 class="font-bold">$${product.price}</h2> <h3 class="mt-5">Tallas</h3> <ul class="size-listing flex gap-3"> ${product.sizes?.split(",").map((size) => renderTemplate`<li${addAttribute(size, "data-size")}>${size}</li>`)} </ul> <h3 class="mt-5">Cantidad</h3> <div> <button class="decrease btn-quantity">-</button> <input id="quantity" type="number" min="1" value="1"> <button class="increase btn-quantity">+</button> </div> <button class="btn-add-to-cart mt-5 bg-blue-500 text-white p-3 w-full">Añadir al carrito</button> <h3 class="mt-10">Descripción</h3> <p>${product.description}</p> </section> </div> <input type="hidden" id="product-id"${addAttribute(product.id, "value")}> ` })} ${renderScript($$result, "C:/Users/PC/Desktop/codigo2024/Astro/curso-devtalles/seccion-14/src/pages/products/[...slug].astro?astro&type=script&index=0&lang.ts")} <style>
    h3 {
        font-weight: bold;
    }

    li {
        cursor: pointer;
        padding: 4px;
        margin-left: 2px;
        user-select: none;

        &:hover {
            text-decoration: underline;
        }
    }

    .selected-size {
        background-color: rgb(1, 114, 189);
        color: white;
        padding: 4px;
        border-radius: 2px;
        text-decoration: underline;
        font-weight: bold;
        transition: all;
    }

    .btn-quantity {
        width: 25px;
        text-align: center;
        padding: 2px;
        cursor: pointer;

        &:hover {
            background-color: rgb(146, 146, 146);
            border: 1px solid gray;
        }
    }

    input {
        width: 16;
        text-align: center;
        padding: 2;
        border: 1;
        border-color: gray;
    }

    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type="number"] {
        -moz-appearance: textfield; /* Para Firefox */
    }
</style>`;
}, "C:/Users/PC/Desktop/codigo2024/Astro/curso-devtalles/seccion-14/src/pages/products/[...slug].astro", void 0);
const $$file = "C:/Users/PC/Desktop/codigo2024/Astro/curso-devtalles/seccion-14/src/pages/products/[...slug].astro";
const $$url = "/products/[...slug]";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
