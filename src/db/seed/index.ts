import { prisma } from '../index';
import { seedProducts } from './seed-data';

export async function main() {
    await prisma.product_image.deleteMany();
    await prisma.product.deleteMany();

    console.log('Iniciando el sembrado de datos...');

    const insertPromises = seedProducts.map(async (product) => {
        const { images, sizes, tags, ...rest } = product;

        return prisma.product.create({
            data: {
                ...rest,
                sizes: sizes.join(','),
                tags: tags.join(','),
                product_image: {
                    create: images.map(image => ({
                        image: image
                    })),
                }
            }
        });
    });

    await Promise.all(insertPromises);

    console.log('¡Seed completado con éxito!');
}

