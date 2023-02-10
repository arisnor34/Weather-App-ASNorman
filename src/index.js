// Update Temp
function showTemp(response) {
  let fahrenheitTemperature = Math.round(
    response.data.daily[0].temperature.day
  );
  let temperatureElement = document.querySelector(".displayTemp");

  let geoCityName = response.data.city;
  let currentCity = document.querySelector("#city-name");

  let locationIcon = document.querySelector(".main-image");
  let apiIcon = response.data.daily[0].condition.icon_url;

  let updateCloud = document.querySelector(".clouds");
  let mainCloud = response.data.daily[0].condition.description;

  let updateHumidity = document.querySelector(".humidity");
  let mainHumidity = response.data.daily[0].temperature.humidity;

  let updateWind = document.querySelector(".wind-speed");
  let mainWind = response.data.daily[0].wind.speed;

  currentCity.innerHTML = `${geoCityName}`;
  temperatureElement.innerHTML = `${fahrenheitTemperature}`;
  locationIcon.setAttribute("src", `${apiIcon}`);
  updateCloud.innerHTML = `<strong>${mainCloud}</strong>`;
  updateHumidity.innerHTML = `${mainHumidity}`;
  updateWind.innerHTML = `${mainWind}`;
}

//Search Weather API Function
function cityName(event) {
  event.preventDefault();
  let cityDisplay = document.querySelector("#city-input");
  let currentCity = document.querySelector("#city-name");
  currentCity.innerHTML = cityDisplay.value;
  let apiKey = "40tb1c1a3eceff165eobe15e3ae05d42";
  let apiEndpoint = "https://api.shecodes.io/weather/v1/forecast?";
  let unit = "imperial";
  let apiUrl = `${apiEndpoint}query=${cityDisplay.value}&key=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(showTemp);
}

let city = document.querySelector("#city-search");
city.addEventListener("submit", cityName);

// Current Coordinates Weather API Function (default display)
function retrievePosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiEndpoint = "https://api.shecodes.io/weather/v1/forecast?";
  let apiKey = "40tb1c1a3eceff165eobe15e3ae05d42";
  let unit = "imperial";
  let apiUrl = `${apiEndpoint}lon=${lon}&lat=${lat}&key=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(showTemp);
  axios.get(apiUrl).then(showFiveDayTemp);
}

navigator.geolocation.getCurrentPosition(retrievePosition);

//update-time & Date
let updateTime = document.querySelector(".update-time");
let updateDayI = document.querySelector(".forecast-date1");
let updateDayII = document.querySelector(".forecast-date2");
let updateDayIII = document.querySelector(".forecast-date3");
let updateDayIV = document.querySelector(".forecast-date4");
let updateDayV = document.querySelector(".forecast-date5");
let now = new Date();
let date = now.getDate();
let year = now.getFullYear();
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];
let days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
updateDayI.innerHTML = days[now.getDay()];
updateDayII.innerHTML = days[now.getDay()];
updateDayIII.innerHTML = days[now.getDay()];
updateDayIV.innerHTML = days[now.getDay()];
updateDayV.innerHTML = days[now.getDay()];
let hour = now.getHours();
hour = hour % 12;
hour = hour ? hour : 12;
const minutes = String(now.getMinutes()).padStart(2, "0");
let ampm = +hour[0] < 12 ? "am" : "pm";
updateTime.innerHTML = `<em>Last updated: ${hour}:${minutes}${ampm}, ${date} ${month} ${year}</em>`;

function displayCelsiusTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector(".displayTemp");
  fahrenheitLink.classList.remove("active");
  celsiusLink.classList.add("active");
  let celsiusTemperature = (fahrenheitTemperature - 32) * 0.5556;
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

function displayFahrenheitTemperature(event) {
  event.preventDefault();
  fahrenheitLink.classList.add("active");
  celsiusLink.classList.remove("active");
  let temperatureElement = document.querySelector(".displayTemp");
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

let fahrenheitTemperature = "null";

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);
