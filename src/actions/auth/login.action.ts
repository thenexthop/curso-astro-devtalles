import { defineAction } from 'astro:actions'
import { z } from 'astro:schema'
import { firebase } from '@/Firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import type { FirebaseError } from 'firebase/app'

export const loginUser = defineAction({
    accept: 'form',
    input: z.object({
        email: z.string().email('El correo no tiene un formato válido.'),
        password: z.string().min(1, 'La contraseña es requerida'),
        remember_me: z.boolean().optional(),
    }),
    handler: async ({ email, password, remember_me }, { cookies }) => {
        try {
            const user = await signInWithEmailAndPassword(firebase.auth, email, password)

            if (remember_me) {
                cookies.set("email", email, {
                    path: "/",
                    //httpOnly: true,
                    //secure: true,
                    //sameSite: "strict",
                    expires: new Date(Date.now() + 60 * 60 * 24 * 180 * 1000),
                });
            } else {
                cookies.delete('email', {
                    path: '/',
                })
            }

            return { success: true, userId: user.user.uid }

        } catch (error) {
            console.log(error)
            const firebaseError = error as FirebaseError;
            if (firebaseError.code === 'auth/invalid-credential' || firebaseError.code === 'auth/user-not-found') {
                throw new Error("Credenciales inválidas");
            }

            throw new Error("Ocurrió un error al intentar iniciar sesión.");
        }
    }
})