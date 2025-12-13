import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const hunter = await prisma.user.upsert({
        where: { email: 'hunter@scamhunters.io' },
        update: {},
        create: {
            email: 'hunter@scamhunters.io',
            name: 'The Chief',
            rank: 'Elite Hunter',
            xp: 1500,
            badges: {
                create: [
                    { slug: 'academy-graduate', awardedAt: new Date() },
                    { slug: 'first-blood', awardedAt: new Date() }
                ]
            }
        },
    })
    // Create Initial Products
    const products = [
        {
            id: 'sh-hoodie-001',
            name: 'Scam Hunters™ Hoodie – Streetwear for the Sharp',
            description: 'Premium heavyweight hoodie. Streetwear fit. Featuring LadyLasso.',
            price: 6995,
            provider: 'zendrop',
            externalId: 'zd_123456',
            image: '/assets/images/af8a324384298da43ca547625abbaad2.webp'
        },
        {
            id: 'sh-ishield-001',
            name: 'iShield for Scam Hunters',
            description: 'MagSafe clear armor for the field.',
            price: 1895,
            provider: 'zendrop',
            externalId: 'zd_789012',
            image: '/assets/images/fd7164459acbf43a7b9db145a1842b6a.webp'
        },
        {
            id: 'sh-deskmat-001',
            name: 'The War Room Desk Mat',
            description: 'Extra large desk mat for the ultimate command center.',
            price: 2595,
            provider: 'zendrop',
            externalId: 'zd_345678',
            image: '/assets/images/9a65180bf7e3ce38e1c85c3c2d771130.webp'
        },
        {
            id: 'alien-story-001',
            name: 'The Alien Story (Short Story)',
            description: 'A Sci-Fi short story by the Chief Hunter.',
            price: 499,
            provider: 'shopify',
            externalId: 'shp_998877',
            image: '/assets/images/alien-cover.jpg'
        },
        {
            id: 'sh-donation-001',
            name: 'Community Donation',
            description: 'Support the cause.',
            price: 100,
            provider: 'internal',
            externalId: 'don_001',
            image: '/assets/logo/icon.svg'
        }
    ];

    for (const product of products) {
        await prisma.product.upsert({
            where: { id: product.id },
            update: {},
            create: product,
        });
    }

    console.log('Database seeded with User and Products!');
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
