import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const userId = "cmdaaqkg70000ikuwz13gs5cq";

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

  await prisma.note.createMany({
    data: [
      {
        title: "Finish project proposal",
        content: "Draft and finalize the proposal for next week.",
        userId,
        categoryId: workCategory.id,
      },
      {
        title: "Buy groceries",
        content: "Milk, Eggs, Bread, and Butter.",
        userId,
        categoryId: personalCategory.id,
      },
      {
        title: "Team meeting notes",
        content: "Discussed app architecture and timelines.",
        userId,
        categoryId: workCategory.id,
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
