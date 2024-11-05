import { PrismaClient } from '@prisma/client';
import { competencies } from '../common/data';

const prisma = new PrismaClient();

async function main() {


  // Insert competencies if they don't already exist
  for (const competency of competencies) {
    await prisma.competency.upsert({
      where: { title: competency.title },
      update: {}, // No updates needed if it exists
      create: competency,
    });
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
