import { PrismaClient } from '@prisma/client';
import { assignTo, categories, competencies, licenses, questions, rolesList, subCompetencies } from '../common/data';

const prisma = new PrismaClient();

async function main() {


  // Insert competencies if they don't already exist
  for (const category of categories) {
    await prisma.category.upsert({
      where: { title: category?.title },
      update: {}, // No updates needed if it exists
      create: category,
    });
  }
  for (const competency of competencies) {
    await prisma.competency.upsert({
      where: { title: competency.title },
      update: {}, // No updates needed if it exists
      create: competency,
    });
  }
  for (const assign of assignTo) {
    await prisma.assignTo.upsert({
      where: { title: assign.title },
      update: {}, // No updates needed if it exists
      create: assign,
    });
  }

for (const subCompetency of subCompetencies) {
  const competency = await prisma.competency.findUnique({
    where: { title: subCompetency.competencyTitle },
  });

  if (competency) {
    await prisma.subCompetency.upsert({
      where: { title: subCompetency.title },
      update: {},
      create: {
        title: subCompetency.title,
        competencyId: competency.id,
      },
    });
  }
}

// Fetch all necessary data once and map by titles for quick lookup
const competenciess = await prisma.competency.findMany();
const competencyMap = Object.fromEntries(competenciess.map(c => [c.title, c.id]));

const subCompetenciess = await prisma.subCompetency.findMany();
const subCompetencyMap = Object.fromEntries(subCompetenciess.map(sc => [sc.title, sc.id]));

const assignTos = await prisma.assignTo.findMany();
const assignToMap = Object.fromEntries(assignTos.map(a => [a.title, a.id]));

// Using a transaction to ensure data consistency
const upsertOperations = questions
  .map((question) => {
    const competencyId = competencyMap[question.competency.title];
    const subCompetencyId = subCompetencyMap[question.subCompetency.title];
    const assignToId = assignToMap[question.assignTo.title];

    // Check if all required IDs are present
    if (!competencyId || !subCompetencyId || !assignToId) {
      console.warn(`Skipping question "${question.question}" due to missing IDs.`);
      return null; // Skip this question by returning null
    }

    // Return Prisma upsert operation
    return prisma.question.upsert({
      where: { question: question.question },
      update: {
        ...(question.options?.length>0 ?
          {options: {
          set: [], // Clear existing options (if needed, depends on use case)
          connectOrCreate: question.options.map((option) => ({
            where: { title: option },
            create: {
              title: option,
            },
          })),
        }}:{}
      ),
      },
      create: {
        question: question.question,
        type: question.type,
        rank: question.rank,
        competencyId,
        subCompetencyId,
        assignToId,
        ...(question.options?.length>0 ?
          {options: {
          connectOrCreate: question.options.map((option) => ({
            where: { title: option },
            create: {
              title: option,
            },
          })),
        }}:{}
      ),
      },
    });
  })
  .filter((operation) => operation !== null); // Filter out null entries

// Execute all upsert operations in a transaction
await prisma.$transaction(upsertOperations);

for (const license of licenses) {
  await prisma.license.create({ data: license });
}
for (const role of rolesList) {
  await prisma.roles.create({ data: role });
}
}
main()
  .then(() => console.log('Seeding completed.'))
  .catch((e) => {
    console.error('Seeding error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
