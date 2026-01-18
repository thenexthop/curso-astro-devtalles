import { defineAction } from 'astro:actions'
import { z } from 'astro:schema'

export const registerUser = defineAction({
    accept: 'form',
    input: z.object({
        name: z.string().min(1, 'Debe ingresar su nombre.'),
        email: z.string().email('El correo electrónico no tiene un formato válido.'),
        password: z.string().min(1, 'Debe ingresar la contraseña.'),
        remember_me: z.boolean().optional(),
    }),
    handler: async ({ name, email, password, remember_me }, { cookies }) => {

        return true;

    }
})