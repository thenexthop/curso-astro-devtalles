import { defineAction } from 'astro:actions'
import { z } from 'astro:schema'
import { prisma } from '@/db'

export const getProductBySlug = defineAction({
    accept: 'json',
    input: z.string(),
    handler: async (slug) => {

        const product = await prisma.product.findUnique({
            where: {
                slug,
            },
            include: {
                product_image: true,
            },
        })

        if (!product) {
            throw new Error('Product not found')
        }

        return product
    }
})