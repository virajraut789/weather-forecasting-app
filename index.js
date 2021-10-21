const weather = require('weather-api-data');

async function getWeather() {
    const data = await weather.loction('tokyo');
    console.log(data);
}
getWeather();
