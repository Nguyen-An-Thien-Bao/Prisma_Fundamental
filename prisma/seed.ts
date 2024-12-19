import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const users = [
    await prisma.user.upsert({
      where: { email: 'bob@prisma.io' },
      update: {},
      create: {
        email: 'bob@prisma.io',
        name: 'Bob',
        posts: {
          create: [
            { title: 'Getting started with Prisma', publised: true},
            { title: 'Understanding the Prisma Schema', publised: false},
          ],
        },
      },
    }),
  
    await prisma.user.upsert({
      where: { email: 'carol@prisma.io' },
      update: {},
      create: {
        email: 'carol@prisma.io',
        name: 'Carol',
        posts: {
          create: [
            { title: 'Prisma and PostgreSQL', publised: true},
            { title: 'Improving API performance', publised: true },
            { title: 'Next.js Integration Tips', publised: false },
          ],
        },
      },
    }),
  
    await prisma.user.upsert({
      where: { email: 'dave@prisma.io' },
      update: {},
      create: {
        email: 'dave@prisma.io',
        name: 'Dave',
        posts: {
          create: [{ title: 'GraphQL with Prisma', publised: true }],
        },
      },
    }),
  
    await prisma.user.upsert({
      where: { email: 'eve@prisma.io' },
      update: {},
      create: {
        email: 'eve@prisma.io',
        name: 'Eve',
        posts: {
          create: [
            { title: 'Deploying Prisma on Vercel', publised: true },
            { title: 'Troubleshooting Prisma Client', publised: false },
          ],
        },
      },
    }),
  
    await prisma.user.upsert({
      where: { email: 'frank@prisma.io' },
      update: {},
      create: {
        email: 'frank@prisma.io',
        name: 'Frank',
        posts: {
          create: [{ title: 'How to use Prisma Studio', publised: true }],
        },
      },
    }),
  
    await prisma.user.upsert({
      where: { email: 'grace@prisma.io' },
      update: {},
      create: {
        email: 'grace@prisma.io',
        name: 'Grace',
        posts: {
          create: [
            { title: 'Migrating to Prisma ORM', publised: false },
            { title: 'Prisma Client Best Practices', publised: true },
          ],
        },
      },
    }),
  
    await prisma.user.upsert({
      where: { email: 'henry@prisma.io' },
      update: {},
      create: {
        email: 'henry@prisma.io',
        name: 'Henry',
        posts: {
          create: [{ title: 'Advanced Prisma Migrations', publised: true }],
        },
      },
    }),
  
    await prisma.user.upsert({
      where: { email: 'isabel@prisma.io' },
      update: {},
      create: {
        email: 'isabel@prisma.io',
        name: 'Isabel',
        posts: {
          create: [
            { title: 'Managing Prisma Relationships', publised: true },
            { title: 'Debugging Prisma Errors', publised: false },
          ],
        },
      },
    }),
  
    await prisma.user.upsert({
      where: { email: 'john@prisma.io' },
      update: {},
      create: {
        email: 'john@prisma.io',
        name: 'John',
        posts: {
          create: [{ title: 'Prisma and TypeScript', publised: true }],
        },
      },
    }),
  
    await prisma.user.upsert({
      where: { email: 'karen@prisma.io' },
      update: {},
      create: {
        email: 'karen@prisma.io',
        name: 'Karen',
        posts: {
          create: [
            { title: 'Using Prisma with SQLite', publised: true },
            { title: 'How Prisma Generates Queries', publised: true },
            { title: 'Optimizing Database Queries', publised: false },
          ],
        },
      },
    }),
  
    await prisma.user.upsert({
      where: { email: 'luke@prisma.io' },
      update: {},
      create: {
        email: 'luke@prisma.io',
        name: 'Luke',
        posts: {
          create: [
            { title: 'Setup Prisma in 5 Minutes', publised: true },
            { title: 'Understanding Prisma Client API', publised: false },
          ],
        },
      },
    }),
  
  ];
  
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