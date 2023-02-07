// Main Temp
function showTemp(response) {
  let temp = Math.round(response.data.list[0].main.temp);
  let changeTemp = document.querySelector(".displayTemp");

  let geoCityName = response.data.city.name;
  let currentCity = document.querySelector("#city-name");

  let locationIcon = document.querySelector(".main-image");
  let apiIcon = response.data.list[0].weather[0].icon;

  let updateCloud = document.querySelector(".clouds");
  let mainCloud = response.data.list[0].weather[0].description;

  let updateHumidity = document.querySelector(".humidity");
  let mainHumidity = response.data.list[0].main.humidity;

  let updateWind = document.querySelector(".wind-speed");
  let mainWind = response.data.list[0].wind.speed;

  currentCity.innerHTML = `${geoCityName}`;
  changeTemp.innerHTML = `${temp}`;
  locationIcon.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${apiIcon}@2x.png`
  );
  updateCloud.innerHTML = `<strong>${mainCloud}</strong>`;
  updateHumidity.innerHTML = `${mainHumidity}`;
  updateWind.innerHTML = `${mainWind}`;
}
// 5 Day Update

// let tempFiveDay = Math.round(response.data.main);
function showFiveDayTemp(response) {
  console.log(response);
}

//search-field & Search Weather API
function cityName(event) {
  event.preventDefault();
  let cityDisplay = document.querySelector("#city-input");
  let currentCity = document.querySelector("#city-name");
  currentCity.innerHTML = cityDisplay.value;
  let apiKey = "5201594abea9f3e38b70e65b11a80c24";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/forecast?";
  let unit = "imperial";
  let apiUrl = `${apiEndpoint}q=${cityDisplay.value}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(showTemp);
}

let city = document.querySelector("#city-search");
city.addEventListener("submit", cityName);

// Current Coordinates (default display)
function retrievePosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/forecast?";
  let apiKey = "5201594abea9f3e38b70e65b11a80c24";
  let unit = "imperial";
  let apiUrl = `${apiEndpoint}lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`;
  console.log(apiUrl);
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
