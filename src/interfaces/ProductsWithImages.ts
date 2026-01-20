import type { Decimal } from "generated/prisma/internal/prismaNamespace";

export interface ProductImage {
    id: string;
    image: string | null;
    product_id: string | null;
}

export interface ProductsWithImages {
    id: string;
    description: string | null;
    gender: string | null;
    price: number;
    sizes: string | null;
    slug: string | null;
    stock: number | null;
    tags: string | null;
    title: string | null;
    type: string | null;
    user_id: string | null;
    product_image: ProductImage[];
}