import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const categories = ["Work", "Personal", "Study", "Travel", "Fitness"];

  const titles = [
    "Team Sync Notes",
    "Grocery List",
    "React Learning",
    "Book Summary: Deep Work",
    "Trip to Kyoto",
    "Meeting Agenda",
    "Recipe Ideas",
    "Workout Log",
    "Side Project Ideas",
    "Study Plan for Finals",
  ];

  const bodies = [
    "Content goes here...",
    "This is a placeholder note body.",
    "Remember to follow up with Jane.",
    "Ideas for improving UI.",
    "Read more about async patterns.",
    "Tasks for the week.",
    "Refactor this function.",
    "Start writing daily journal.",
    "Review code from yesterday.",
    "Prepare for presentation.",
  ];

  for (let i = 0; i < 10; i++) {
    await prisma.note.create({
      data: {
        title: titles[i],
        body: bodies[i],
        category: categories[Math.floor(Math.random() * categories.length)],
        createdAt: new Date(
          Date.now() - Math.floor(Math.random() * 30) * 86400000
        ),
        userId: "cmd69muyf0000ikwwaot0ualt",
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
