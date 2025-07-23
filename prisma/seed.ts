import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const userId = "cmdblsax30000ikz4226tucvg";

  const workCategory = await prisma.category.upsert({
    where: {
      name_userId: {
        name: "Work",
        userId,
      },
    },
    update: {},
    create: {
      name: "Work",
      userId,
    },
  });

  const personalCategory = await prisma.category.upsert({
    where: {
      name_userId: {
        name: "Personal",
        userId,
      },
    },
    update: {},
    create: {
      name: "Personal",
      userId,
    },
  });

  const ideasCategory = await prisma.category.upsert({
    where: {
      name_userId: {
        name: "Ideas",
        userId,
      },
    },
    update: {},
    create: {
      name: "Ideas",
      userId,
    },
  });

  const learningCategory = await prisma.category.upsert({
    where: {
      name_userId: {
        name: "Learning",
        userId,
      },
    },
    update: {},
    create: {
      name: "Learning",
      userId,
    },
  });

  const errandsCategory = await prisma.category.upsert({
    where: {
      name_userId: {
        name: "Errands",
        userId,
      },
    },
    update: {},
    create: {
      name: "Errands",
      userId,
    },
  });

  await prisma.note.createMany({
    data: [
      // Work Notes
      {
        title: "Finish project proposal",
        content: "Draft and finalize the proposal for next week.",
        userId,
        categoryId: workCategory.id,
      },
      {
        title: "Team meeting notes",
        content: "Discussed app architecture and timelines.",
        userId,
        categoryId: workCategory.id,
      },

      // Personal Notes
      {
        title: "Buy groceries",
        content: "Milk, Eggs, Bread, and Butter.",
        userId,
        categoryId: personalCategory.id,
      },
      {
        title: "Weekend plans",
        content: "Visit family and go hiking at Mt. Batulao.",
        userId,
        categoryId: personalCategory.id,
      },

      // Ideas Notes
      {
        title: "App Idea: Mood Tracker",
        content: "An app to log and analyze daily mood patterns.",
        userId,
        categoryId: ideasCategory.id,
      },
      {
        title: "Startup concept",
        content: "Subscription box for local art supplies.",
        userId,
        categoryId: ideasCategory.id,
      },

      // Learning Notes
      {
        title: "Learn Prisma",
        content: "Go through the official Prisma docs and tutorials.",
        userId,
        categoryId: learningCategory.id,
      },
      {
        title: "Next.js Notes",
        content: "Understand routing, server/client components.",
        userId,
        categoryId: learningCategory.id,
      },

      // Errands Notes
      {
        title: "Pick up laundry",
        content: "From the shop near 3rd Street.",
        userId,
        categoryId: errandsCategory.id,
      },
      {
        title: "Car maintenance",
        content: "Schedule oil change and brake check.",
        userId,
        categoryId: errandsCategory.id,
      },
    ],
  });

  console.log("🌱 Seeding complete!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
