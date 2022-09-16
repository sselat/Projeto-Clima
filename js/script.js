// https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=acc1cd1e6f8d51a82d971be585b188b2

const apiKey = "acc1cd1e6f8d51a82d971be585b188b2";
const apiCountryURL = "https://countryflagsapi.com/png/"

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const showWeatherData = (city) =>{
    console.log(city);
}

searchBtn.addEventListener("click", (e) =>{
    e.preventDefault();

    const city = cityInput.value;

    showWeatherData(city);
});