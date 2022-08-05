const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://hargrimm-wikihow-v1.p.rapidapi.com/steps',
  params: {count: '3'},
  headers: {
    'X-RapidAPI-Key': '81410a061bmsh3b09b36b54c6225p173c69jsnd9a66709d32a',
    'X-RapidAPI-Host': 'hargrimm-wikihow-v1. p.rapidapi.com'
  }
};

async function getAPI () {
    const { data } = await axios.request(options)
    console.log(data);
    return data;
}

export default function handler(request, response) {
    const { method } = request;
    // GET, POST, PUT, PATCH 등 요청에 맞는 작업 실행
    if (method === "GET") {
        const data = getAPI()
        console.log(data);
        return response.status(200).json({
            data : data
        });
    }
  }