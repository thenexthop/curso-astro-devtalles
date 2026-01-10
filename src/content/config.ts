import { defineCollection, reference } from "astro:content";
import { z } from "astro/zod";


const blogCollection = defineCollection({
    type: "content",
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            date: z.date(),
            description: z.string(),
            image: image(),

            // Este codigo ya no es compatible en Astro 5
            // .refine((img) => img.width < 1000000, {
            //     message: "La imagen debe tener menos de 1000000px.",
            // })

            // Relación
            //author: z.string(),
            author: reference("author"),
            // Relación
            tags: z.array(z.string()),
        })
})

const authorCollection = defineCollection({
    type: "data",
    schema: ({ image }) =>
        z.object({
            name: z.string(),
            avatar: image(),
            twitter: z.string(),
            linkedIn: z.string(),
            github: z.string(),
            bio: z.string(),
            subtitle: z.string(),
        })
})

export const collections = {
    blog: blogCollection,
    author: authorCollection
}