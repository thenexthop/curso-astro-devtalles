import { defineAction } from 'astro:actions'

export const logoutUser = defineAction({
    accept: 'json',
    handler: async (_, { cookies }) => {
        return true;
    }
})