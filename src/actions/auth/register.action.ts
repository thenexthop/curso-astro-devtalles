import { defineAction } from 'astro:actions'
import { z } from 'astro:schema'
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth'
import type { FirebaseError } from 'firebase/app'
import { firebase } from '@/Firebase/config'

export const registerUser = defineAction({
    accept: 'form',
    input: z.object({
        name: z.string().min(1, 'Debe ingresar su nombre.'),
        email: z.string().email('El correo electrónico no tiene un formato válido.'),
        password: z.string().min(1, 'Debe ingresar la contraseña.'),
        remember_me: z.boolean().optional(),
    }),
    handler: async ({ name, email, password, remember_me }, { cookies }) => {

        if (remember_me) {
            cookies.set('email', email, {
                expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
                path: '/',
                //httpOnly: true,
                //secure: true,
                //sameSite: 'lax',
            })
        } else {
            cookies.delete('email', {
                path: '/',
            })
        }

        // Registrar usuario en Firebase
        try {
            const user = await createUserWithEmailAndPassword(firebase.auth, email, password);

            // TODO: actualizar el nombre (displayName)
            updateProfile(user.user, {
                displayName: name
            })

            // TODO: verificar email del usuario
            await sendEmailVerification(user.user, {
                url: `${import.meta.env.WEBSITE_URL}/protected?emailVerificado=true`
            })


            console.log(user.user.uid);
            return user.user.uid

        } catch (error) {
            console.log(error);
            const duplicateError = error as FirebaseError;

            if (duplicateError.code === 'auth/email-already-in-use') {
                throw new Error("El correo electrónico ya se encuentra registrado en el sistema.")
            }

            throw new Error("Ocurrió un error al intentar registrar al usuario.")
        }


    }
})