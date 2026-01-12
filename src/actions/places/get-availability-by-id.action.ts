import { defineAction } from 'astro:actions'
import { z } from 'astro:schema'

export const getAvailabilityById = defineAction({
    accept: 'json',
    input: z.string(),
    handler: async (placeId) => {
        await new Promise(resolve => setTimeout(resolve, 2000));

        const isAvailable = Math.random() > 0.5
        const spotsAvailables = Math.floor(Math.random() * 10) + 1
        let message = "No hay espacios disponibles."

        if (isAvailable) {
            message = spotsAvailables > 1
                ? `Hay ${spotsAvailables} espacios disponibles.`
                : `Hay 1 espacio disponible.`
        }

        return {
            id: placeId,
            isAvailable,
            spotsAvailables,
            message,
        }
    }
})