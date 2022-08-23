// changing Celsius and Fahrenheit
function displayFahrenheit(e) {
  e.preventDefault();
  let temperatureElement = document.querySelector("#temp-value");
  let celIcons = document.querySelectorAll(".degreesIcon");
  let maxTemp = document.querySelector("#max-temp");
  let minTemp = document.querySelector("#min-temp");
  toCelBtn.classList.remove("active");
  toFahrBtn.classList.add("active");
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  let fahrMinTemp = (minCelsiusTemoerature * 9) / 5 + 32;
  let fahrMaxTemp = (maxCelsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
  maxTemp.innerHTML = Math.round(fahrMaxTemp);
  minTemp.innerHTML = Math.round(fahrMinTemp);
  Array.from(celIcons).forEach((celIcon) => {
    celIcon.innerHTML = "°F";
  });
}

function displayCelsius(e) {
  e.preventDefault();
  toCelBtn.classList.add("active");
  toFahrBtn.classList.remove("active");
  let fahIcons = document.querySelectorAll(".degreesIcon");
  let maxTemp = document.querySelector("#max-temp");
  let minTemp = document.querySelector("#min-temp");
  let temperatureElement = document.querySelector("#temp-value");
  maxTemp.innerHTML = Math.round(maxCelsiusTemperature);
  minTemp.innerHTML = Math.round(minCelsiusTemoerature);
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
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
