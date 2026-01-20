import { getProductBySlug } from "./products/get-product-by-slug.action";
import { getProductsByPage } from "./products/get-products-by-page.action";

export const server = {
    //Auth
    // ...

    // Productos
    getProductsByPage,
    getProductBySlug,
}