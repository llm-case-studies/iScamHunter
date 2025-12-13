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
    console.log({ hunter })
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
