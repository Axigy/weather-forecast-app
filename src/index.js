// Search city form
function giveDates(response) {
  console.log(response);
  // main temperature
  celsiusTemperature = Math.round(response.data.main.temp);
  let nowTemp = document.querySelector("#temp-value");
  nowTemp.innerHTML = Math.round(response.data.main.temp);
  // write full location
  let currLocation = document.querySelector("#main-location");
  currLocation.innerHTML = `${response.data.name}, ${response.data.sys.country}`;
  // change weather icon
  let descIcon = document.querySelector(".weather_icon");
  descIcon.src = `image/${response.data.weather[0].icon}.svg`;
  // change wind speed and humidity
  let windSpeed = document.querySelector("#wind-speed");
  windSpeed.innerHTML = Math.round(response.data.wind.speed);
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = response.data.main.humidity;
  // add max and min temp
  let maxTemp = document.querySelector("#max-temp");
  maxTemp.innerHTML = Math.round(response.data.main.temp_max);
  let minTemp = document.querySelector("#min-temp");
  minTemp.innerHTML = Math.round(response.data.main.temp_min);
}

function searchCity(event) {
  event.preventDefault();
  let city = document.querySelector("#input-city");
  let mainLoc = document.querySelector("#main-location");
  mainLoc.innerHTML = `${city.value}`;
  let apiKey = "920ae924ef286b04c010bf50d5e7861f"; // add API
  let urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&APPID=`;

  axios.get(`${urlApi}${apiKey}`).then(giveDates);
}
let search_form = document.querySelector("#search-city-form");
search_form.addEventListener("submit", searchCity);

let city = document.querySelector("#input-city");
let mainLoc = document.querySelector("#main-location");
mainLoc.innerHTML = `${city.value}`;
let apiKey = "920ae924ef286b04c010bf50d5e7861f"; // add API
let urlApi = `https://api.openweathermap.org/data/2.5/weather?q=Poznan&units=metric&APPID=`;

axios.get(`${urlApi}${apiKey}`).then(giveDates);
// Add current location and change data

function showPosition(position) {
  let keyApi = "920ae924ef286b04c010bf50d5e7861f"; // add API
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&APPID=`;
  axios.get(`${apiUrl}${keyApi}`).then(giveDates);
}
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let locationBtn = document.querySelector("#location-btn");
locationBtn.addEventListener("click", getCurrentPosition);

// Dates form

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let now = new Date();
let day = days[now.getDay()];
let month = months[now.getMonth()];
let date = now.getDate();
let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minuts = now.getMinutes();
if (minuts < 10) {
  minuts = `0${minuts}`;
}
let currentDate = document.querySelector("#now-date");
currentDate.innerHTML = `${day}, ${month} ${date}`;

// Switch metrics

function displayFahrenheit(e) {
  e.preventDefault();
  let temperatureElement = document.querySelector("#temp-value");
  let celIcon = document.querySelector(".degreesIcon");
  toCelBtn.classList.remove("active");
  toFahrBtn.classList.add("active");
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
  celIcon.innerHTML = "°F";
}

function displayCelsius(e) {
  e.preventDefault();
  toCelBtn.classList.add("active");
  toFahrBtn.classList.remove("active");
  let fahIcon = document.querySelector(".degreesIcon");
  let temperatureElement = document.querySelector("#temp-value");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
  fahIcon.innerHTML = "°C";
}

let celsiusTemperature = null;
let toCelBtn = document.querySelector("#change-to-celsius");
let toFahrBtn = document.querySelector("#change-to-fahrenheit");

toCelBtn.addEventListener("click", displayCelsius);
toFahrBtn.addEventListener("click", displayFahrenheit);
