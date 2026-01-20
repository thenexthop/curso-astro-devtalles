import { PrismaNeon } from '@prisma/adapter-neon'
import { PrismaClient } from "../../generated/prisma/client";
// DB seed
// import { main } from './seed';

const connectionString = import.meta.env.DATABASE_URL;

const adapter = new PrismaNeon({ connectionString });

export const prisma = new PrismaClient({
    adapter,
});

//************************** */
// Solo para pruebas
//************************** */
// DB seed
// main()
//     .catch((e) => {
//         console.error(e);
//         process.exit(1);
//     })
//     .finally(async () => {
//         await prisma.$disconnect();
//     });