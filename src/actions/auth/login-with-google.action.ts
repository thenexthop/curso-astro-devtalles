import { firebase } from '@/Firebase/config';
import { defineAction } from 'astro:actions'
import { z } from 'astro:schema'
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth'

export const loginWithGoogle = defineAction({
    accept: 'json',
    input: z.any(),
    handler: async (credentials) => {

        const credential = GoogleAuthProvider.credentialFromResult(credentials);

        if (!credential) {
            throw new Error("Credenciales no válidas.")
        }

        const resp = await signInWithCredential(firebase.auth, credential);

        return `${resp.user.uid}`
    }
})