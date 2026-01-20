import type { ProductsWithImages } from "@/interfaces/ProductsWithImages"
import { useState } from "react";

interface Props {
    product: ProductsWithImages
}


const ProductCard = ({ product }: Props) => {


    const images = product.product_image.map(image => {
        return image.image && image.image.startsWith('http')
            ? image.image
            : `${import.meta.env.PUBLIC_URL}/images/products/${image.image}`
    })

    const [currentImage, setCurrentImage] = useState(images[0]);

    return (
        <>
            <a href={`/products/${product.slug}`}>
                <div className="flex flex-col justify-center items-center gap-2 border-2 border-slate-200 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <img
                        onMouseEnter={() => setCurrentImage(images[1] ?? images[0])}
                        onMouseLeave={() => setCurrentImage(images[0])}
                        src={currentImage}
                        alt={product.title || 'product image'}
                        className="w-full h-auto object-cover rounded-t-md" />
                    <div className="flex flex-col justify-center gap-2 p-4">
                        <h2 className="text-lg font-semibold">{product.title}</h2>
                        <p className="text-orange-800 font-semibold text-sm ml-auto">$ {String(product.price)}</p>
                    </div>
                </div>
            </a>
        </>
    )
}

export default ProductCard