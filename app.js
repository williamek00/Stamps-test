//1. Program ApaBole

let output = ""; //declare variabel penampung

for (let i = 1; i <= 100; i++) { //looping dari 1 sampai 100
    if (i % 3 === 0 && i % 5 === 0)  output += "ApaBole, "; // kondisional
    else if (i % 3 === 0) output += "Apa, ";
    else if (i % 5 === 0) output += "Bole, ";
    else output += i + ", ";
}

console.log(output); //menampilkan ke terminal

const axios = require('axios')
const {formatDate,temperatureFormat} = require('./helper')
const lat = -6.200000
const lon = 106.816666
const APIkey = '1fd1ee78d2d5f3ed4f8eec8d3ac71def'
const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIkey}`

async function getWeather() {
    try {
      let response = await axios.get(url);
      let result = response.data;
      result.list.forEach((e) => {
        console.log(formatDate(e.dt_txt)+': '+temperatureFormat(e.main.temp));
      });
    } catch (error) {
      console.log(error);
    }
  }
  

getWeather()


