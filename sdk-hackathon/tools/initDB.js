const axios = require('axios');
const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient();

const getAxiosOptions = (page, fetchAmount) => {
  return {
    method: 'GET',
    url: `https://hargrimm-wikihow-v1.p.rapidapi.com/${page}`,
    params: { count: fetchAmount.toString() },
    headers: {
      'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
      'X-RapidAPI-Host': process.env.RAPIDAPI_HOST,
    },
  };
};

async function dropCards() {
  await prisma.card.deleteMany({});
}

async function fetchData(number) {
  let currentDescCount = 0;
  let currentImgCount = 0;
  let descs = [];
  let imgs = [];
  const fetchAmount = 100;
  let options = getAxiosOptions('steps', fetchAmount);
  while (currentDescCount < number) {
    try {
      const { data } = await axios.request(options);
      for (let index in data) {
        const desc = data[index];
        if (descs.indexOf(desc) == -1) {
          descs.push(desc);
          currentDescCount++;
        }
      }
    } catch (error) {
      console.log(error);
    }
    console.log(currentDescCount);
  }

  options = getAxiosOptions('images', fetchAmount);
  while (currentImgCount < number) {
    try {
      const { data } = await axios.request(options);
      for (let index in data) {
        const img = data[index];
        if (imgs.indexOf(img) == -1) {
          imgs.push(img);
          currentImgCount++;
        }
      }
    } catch (error) {
      console.log(error);
    }
    console.log(currentImgCount);
  }

  descs = descs.slice(0, number);
  imgs = imgs.slice(0, number);

  const cards = descs.map((desc, index) => {
    return { desc: desc, url: imgs[index] };
  });
  return cards;
}

async function main() {
  const cards = await fetchData(1000);
  await dropCards();
  await prisma.card.createMany({ data: cards });
  console.log('done!');
}

main();
