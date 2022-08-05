const axios = require('axios');
const { PrismaClient, Prisma } = require('@prisma/client');

const prisma = new PrismaClient();
let cards = [
  { url: 'hello', desc: 'world' },
  { url: 'hello!', desc: 'world!' },
]; // [Card{ url: String, desc: String }]

async function main() {
  await prisma.card.createMany({ data: cards });
  console.log('done!');
}

main();
