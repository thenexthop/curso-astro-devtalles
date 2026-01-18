import { defineAction } from 'astro:actions'
import { z } from 'astro:schema'

export const loginUser = defineAction({
    accept: 'form',
    input: z.object({
        email: z.string().email('El correo no tiene un formato válido.'),
        password: z.string().min(1, 'La contraseña es requerida'),
        remember_me: z.boolean().optional(),
    }),
    handler: async ({ email, password, remember_me }, { cookies }) => {
        return true;
    }
})