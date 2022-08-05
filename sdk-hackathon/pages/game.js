import { useEffect, useState } from "react";

const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://hargrimm-wikihow-v1.p.rapidapi.com/steps',
  params: {count: '3'},
  headers: {
    'X-RapidAPI-Key': '81410a061bmsh3b09b36b54c6225p173c69jsnd9a66709d32a',
    'X-RapidAPI-Host': 'hargrimm-wikihow-v1.p.rapidapi.com'
  }
};

async function getAPI () {
    const { data } = await axios.request(options)
    //console.log(data);
    return data;
}

const game = () => {

    const text = getAPI();
    console.log(text);
    return (
        <div>
            {
            }
        </div>
    )
}

export default game