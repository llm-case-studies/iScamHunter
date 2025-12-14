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
            name: 'Scam Hunters™ Hoodie',
            price: 4999, // $49.99
            currency: 'usd',
            image: 'https://files.stripe.com/links/MDB8YWNjdF8xTTJaaHpCa0o1a3FqOXc4fGZsX3Rlc3RfNzZ1M21Vd21zZzFmS0x5MzR3ZzZ4NXVl00e6G2j2pD',
            provider: 'zendrop',
            externalId: 'ZG-123456',
            richDescription: 'Premium heavyweight cotton blend. The official uniform of the Hunt. Verify with confidence.'
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
            image: '/assets/images/alien-cover.jpg',
            specs: JSON.stringify({ format: 'PDF', pages: 42 })
        },
        {
            id: 'sh-donation-001',
            name: 'Community Donation',
            description: 'Support the cause.',
            price: 100,
            provider: 'internal',
            externalId: 'don_001',
            image: '/assets/logo/icon.svg'
        },
        {
            id: 'sh-opi-kit-001',
            name: 'Scam Hunter Node (OrangePi 5+)',
            description: 'The ultimate counter-scam appliance. Pre-flashed with HunterOS.',
            price: 14900,
            provider: 'manual',
            externalId: 'opi_kit_v1',
            image: '/assets/images/orangepi5.webp',
            specs: JSON.stringify({
                cpu: 'Rockchip RK3588 (8-core)',
                ram: '16GB LPDDR4x',
                storage: '256GB NVMe SSD',
                os: 'HunterOS v1.0 (Debian based)',
                ports: ['2x 2.5GbE LAN', 'HDMI 2.1', 'USB-C Power']
            })
        },
        {
            id: 'sh-docker-vllm-001',
            name: 'Hunt-in-a-Box (Docker Edition)',
            description: 'Deploy the Scam Hunter stack on your own hardware. Includes vLLM support.',
            price: 1995,
            provider: 'digital',
            externalId: 'docker_vllm_v1',
            image: '/assets/logo/Logo_Draft_With_Transparency.svg', // Validated existing file
            specs: JSON.stringify({
                format: 'Docker Compose + .env',
                base_image: 'Ubuntu 24.04 LTS (Jammy)',
                ai_engine: 'vLLM (CUDA 12.1 optimized)',
                tools: ['WireGuard VPN', 'PiHole DNS', 'HunterBot-Lite'],
                requirements: 'NVIDIA GPU (8GB+ VRAM) recommended',
                options: [
                    { id: 'opt_vllm', name: 'vLLM Support (Advanced AI)', price: 500, description: 'Pre-configured CUDA environment for local LLM inference.' },
                    { id: 'opt_admin', name: 'Hunter Admin Dashboard', price: 300, description: 'Web-based control panel (FastAPI + React) for managing nodes.' },
                    { id: 'opt_jokes', name: 'Scam Jokes Archive (1 Year)', price: 1200, description: 'Access to the daily updated humor feed.' }
                ]
            })
        }
    ];

    for (const product of products) {
        await prisma.product.upsert({
            where: { id: product.id },
            update: product, // Update with new values if exists
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
