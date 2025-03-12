import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database with fake car data...');

  for( let i = 0; i < 10 ; i++){
    await prisma.koncert.create({
      data:{
        fellepo: faker.music.artist(),
        kezdesi_ido: faker.date.future(),
        idotartam: faker.number.int({min: (60), max:(140)}),
        elmarad_e: faker.datatype.boolean()
      }
    })
  }
  console.log('Seeding completed! ✅')

}

main()
.catch((e) => {
  console.error('Error seeding database:', e);
  process.exit(1);
})
.finally(async () => {
  await prisma.$disconnect();
});

