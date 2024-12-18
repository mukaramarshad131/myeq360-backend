"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const data_1 = require("../common/data");
const prisma = new client_1.PrismaClient();
async function main() {
    for (const category of data_1.categories) {
        await prisma.category.upsert({
            where: { title: category?.title },
            update: {},
            create: category,
        });
    }
    for (const competency of data_1.competencies) {
        await prisma.competency.upsert({
            where: { title: competency.title },
            update: {},
            create: competency,
        });
    }
    for (const assign of data_1.assignTo) {
        await prisma.assignTo.upsert({
            where: { title: assign.title },
            update: {},
            create: assign,
        });
    }
    for (const subCompetency of data_1.subCompetencies) {
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
    const competenciess = await prisma.competency.findMany();
    const competencyMap = Object.fromEntries(competenciess.map(c => [c.title, c.id]));
    const subCompetenciess = await prisma.subCompetency.findMany();
    const subCompetencyMap = Object.fromEntries(subCompetenciess.map(sc => [sc.title, sc.id]));
    const assignTos = await prisma.assignTo.findMany();
    const assignToMap = Object.fromEntries(assignTos.map(a => [a.title, a.id]));
    const upsertOperations = data_1.questions
        .map((question) => {
        const competencyId = competencyMap[question.competency.title];
        const subCompetencyId = subCompetencyMap[question.subCompetency.title];
        const assignToId = assignToMap[question.assignTo.title];
        if (!competencyId || !subCompetencyId || !assignToId) {
            console.warn(`Skipping question "${question.question}" due to missing IDs.`);
            return null;
        }
        return prisma.question.upsert({
            where: { question: question.question },
            update: {
                ...(question.options?.length > 0 ?
                    { options: {
                            set: [],
                            connectOrCreate: question.options.map((option) => ({
                                where: { title: option },
                                create: {
                                    title: option,
                                },
                            })),
                        } } : {}),
            },
            create: {
                question: question.question,
                type: question.type,
                rank: question.rank,
                competencyId,
                subCompetencyId,
                assignToId,
                ...(question.options?.length > 0 ?
                    { options: {
                            connectOrCreate: question.options.map((option) => ({
                                where: { title: option },
                                create: {
                                    title: option,
                                },
                            })),
                        } } : {}),
            },
        });
    })
        .filter((operation) => operation !== null);
    await prisma.$transaction(upsertOperations);
    for (const license of data_1.licenses) {
        await prisma.license.create({ data: license });
    }
    for (const role of data_1.rolesList) {
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
//# sourceMappingURL=seed.js.map