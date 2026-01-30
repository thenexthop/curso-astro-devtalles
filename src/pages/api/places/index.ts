import type { APIRoute } from 'astro'
import { prisma } from '@/db';

export const prerender = false

export const GET: APIRoute = async () => {

    const places = await prisma.place.findMany();

    return new Response(
        JSON.stringify(places),
        {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        }
    )
}