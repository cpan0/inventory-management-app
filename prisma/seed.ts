import 'dotenv/config'
import { PrismaClient } from '../generated/prisma/client.ts'
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({ 
  connectionString: process.env.DATABASE_URL 
});
const prisma = new PrismaClient({ adapter });

async function main() {
    const demoUserId = "demo-user";

    // Create sample products
    await prisma.product.createMany({
        data: Array.from({ length: 25 }).map((_, i) => ({
            userId: demoUserId,
            name: `Product ${i + 1}`,
            sku: `SKU-${String(i + 1).padStart(3, '0')}`,
            price: Math.floor(Math.random() * 100) + 1,
            quantity: Math.floor(Math.random() * 50) + 1,
            lowStockAt: 5,
            createdAt: new Date(Date.now() - Math.floor(Math.random() * 1000000000)),
        })),
    });

    console.log('Database has been seeded successfully.');
    console.log(`Created 25 products for user ID: ${demoUserId}`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });