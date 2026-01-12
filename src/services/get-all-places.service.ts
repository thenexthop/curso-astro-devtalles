import { prisma } from "@/db";

export const getPlacesService = async () => {
    const places = await prisma.place.findMany();

    return places;
}