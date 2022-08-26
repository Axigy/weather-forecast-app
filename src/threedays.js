function displayForecast() {
  let forecastElement = document.querySelector("#forecast");
  let days = ["Monday", "Tuesday", "Wednesday"];
  let forecastHTML = "";

  days.forEach(function (day) {
    forecastHTML =
      forecastHTML +
      `<div class="card border-secondary mb-3" style="max-width: 18rem">
      <div class="card-header weather-date" id="now-date">${day}</div>
        <div class="card-body text-secondary">
      <h5 class="card-title">
        <span class="min-weather-forecast-temp">20</span>
       <span class="degreesIcon">°C</span>
        /
        <span class="max-weather-forecast-temp">27</span>
         <span class="degreesIcon">°C</span>
      </h5>
      <img
        src="image/50d.svg"
        alt="cloudy day"
        class="weather_icon"
      />
      <p class="card-text">
        Wind: 6 km/h <br />
        Humidity: 40%
      </p>
    </div>
    </div>
  `;
  });
  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}
displayForecast();
// Add API
function giveDates(response) {
  console.log(response);
}

let keyApi = "920ae924ef286b04c010bf50d5e7861f";
let urlUpi = `https:https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&&appid=${keyApi}&units=metric`;

axios.get(`${urlUpi}`).then(giveDates);

// Add current location and change data
function giveDates(response) {
  console.log(response);
}

function showPosition(position) {
  console.log(position);
  let keyApi = "920ae924ef286b04c010bf50d5e7861f";
  let urlUpi = `https:https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&&appid=${keyApi}&units=metric`;
  console.log(urlUpi);
  axios.get(`${urlUpi}`).then(giveDates);
}
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let locationBtn = document.querySelector("#location-btn");
locationBtn.addEventListener("click", getCurrentPosition);
// changing Celsius and Fahrenheit
function displayFahrenheit(e) {
  e.preventDefault();
  let celIcons = document.querySelectorAll(".degreesIcon");
  toCelBtn.classList.remove("active");
  toFahrBtn.classList.add("active");
  Array.from(celIcons).forEach((celIcon) => {
    celIcon.innerHTML = "°F";
  });
}

function displayCelsius(e) {
  e.preventDefault();
  toCelBtn.classList.add("active");
  toFahrBtn.classList.remove("active");
  let fahIcons = document.querySelectorAll(".degreesIcon");
  Array.from(fahIcons).forEach((fahIcon) => {
    fahIcon.innerHTML = "°C";
  });
}

let minCelsiusTemoerature = null;
let maxCelsiusTemperature = null;
let celsiusTemperature = null;
let toCelBtn = document.querySelector("#change-to-celsius");
let toFahrBtn = document.querySelector("#change-to-fahrenheit");

toCelBtn.addEventListener("click", displayCelsius);
toFahrBtn.addEventListener("click", displayFahrenheit);
