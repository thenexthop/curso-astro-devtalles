import { prisma } from '@/db'
import { defineAction } from 'astro:actions'
import { z } from 'astro:schema'

export const getProductsByPage = defineAction({
    accept: 'json',
    input: z.object({
        page: z.number().optional().default(1),
        limit: z.number().optional().default(12),
    }),
    handler: async ({ page, limit }) => {

        page = page <= 0 ? 1 : page

        const totalProducts = await prisma.product.count()
        const totalPages = Math.ceil(totalProducts / limit)

        if (page > totalPages) {
            return {
                page,
                limit,
                totalPages,
                totalProducts,
                products: []
            }
        }

        const products = await prisma.product.findMany({
            take: limit,
            skip: (page - 1) * limit,
            // INNER JOIN
            include: {
                product_image: {
                    take: 2,
                }
            },
            // Referencia para futuros usos:
            // orderBy: {
            //     created_at: 'desc'
            // }
        })

        return {
            page,
            limit,
            totalPages,
            totalProducts,
            products
        }
    }
})