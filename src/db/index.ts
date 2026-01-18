import { PrismaNeon } from '@prisma/adapter-neon'
import { PrismaClient } from "../../generated/prisma/client";

const connectionString = import.meta.env.DATABASE_URL;

console.log("connectionString: ", connectionString)

const adapter = new PrismaNeon({ connectionString });

export const prisma = new PrismaClient({
    adapter,
});

